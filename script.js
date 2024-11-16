document.getElementById('generateCV').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value.split('\n');
    const education = document.getElementById('education').value.split('\n');
    const experience = document.getElementById('experience').value.split('\n');
    const languages = document.getElementById('languages').value;
    const awards = document.getElementById('awards').value;
    const references = document.getElementById('references').value;

    // Set preview fields
    document.getElementById('previewName').textContent = name;
    document.getElementById('previewTitle').textContent = title;
    document.getElementById('previewEmail').textContent = email;
    document.getElementById('previewPhone').textContent = phone;
    document.getElementById('previewSkills').innerHTML = skills.map(skill => `<li>${skill}</li>`).join('');
    document.getElementById('previewEducation').innerHTML = education.map(edu => `<p>${edu}</p>`).join('');
    document.getElementById('previewExperience').innerHTML = experience.map(exp => `<p>${exp}</p>`).join('');
    document.getElementById('previewLanguages').textContent = languages;
    document.getElementById('previewAwards').textContent = awards;
    document.getElementById('previewReferences').textContent = references;

    // Handle image upload
    const imgInput = document.getElementById('image');
    const imgArea = document.getElementById('imgArea');
    if (imgInput.files && imgInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imgArea.style.display = 'block';
            imgArea.innerHTML = `<img src="${e.target.result}" alt="User Image">`;
        };
        reader.readAsDataURL(imgInput.files[0]);
    } else {
        imgArea.style.display = 'none'; // Hide if no image
    }

    document.getElementById('cvDisplay').style.display = 'block';
});

// Download as Word
document.getElementById('downloadCV').addEventListener('click', () => {
    const content = document.getElementById('cvDisplay').innerHTML;
    const blob = new Blob(['\ufeff', content], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Generated_CV.doc';
    link.click();
});

// Download as PDF
document.getElementById('downloadPDF').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    const content = document.getElementById('cvDisplay');
    pdf.html(content, {
        callback: (doc) => {
            doc.save('Generated_CV.pdf');
        },
        x: 10,
        y: 10
    });
});
