// Debugging: Ensure the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Event listener for the Generate CV button
    document.getElementById('generateCV').addEventListener('click', () => {
        console.log('Generate CV button clicked');

        // Fetch input values
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

        // Log the fetched values for debugging
        console.log({ name, title, email, phone, skills, education, experience, languages, awards, references });

        // Check if required fields are filled
        if (!name || !title || !email || !phone) {
            alert('Please fill in all required fields.');
            return;
        }

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

        // Show the CV preview section
        document.getElementById('cvDisplay').style.display = 'block';
        console.log('CV preview generated successfully');
    });
});
