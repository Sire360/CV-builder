document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Generate CV Preview
    document.getElementById('generateCV').addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const title = document.getElementById('title').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const skills = document.getElementById('skills').value.trim().split('\n');
        const education = document.getElementById('education').value.trim().split('\n');
        const experience = document.getElementById('experience').value.trim().split('\n');
        const languages = document.getElementById('languages').value.trim();
        const awards = document.getElementById('awards').value.trim();
        const references = document.getElementById('references').value.trim();

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
        console.log('CV preview generated successfully');
    });

    // Download as Word
    document.getElementById('downloadCV').addEventListener('click', () => {
        const cvDisplay = document.getElementById('cvDisplay').innerHTML;

        const docContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <title>Generated CV</title>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; }
                    h1, h3 { color: #00ABE4; }
                    ul { list-style: disc; padding-left: 20px; }
                </style>
            </head>
            <body>
                ${cvDisplay}
            </body>
            </html>
        `;

        const blob = new Blob(['\ufeff', docContent], { type: 'application/msword' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Generated_CV.doc';
        link.click();
        console.log('Word document downloaded');
    });

    // Download as PDF
    document.getElementById('downloadPDF').addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();

        const content = document.getElementById('cvDisplay');
        pdf.html(content, {
            callback: function (doc) {
                doc.save('Generated_CV.pdf');
                console.log('PDF document downloaded');
            },
            x: 10,
            y: 10,
        });
    });
});
