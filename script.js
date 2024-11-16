document.getElementById('generateCV').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value.split('\n');
    const education = document.getElementById('education').value.split('\n');
    const experience = document.getElementById('experience').value.split('\n');
    const languages = document.getElementById('languages').value;
    const awards = document.getElementById('awards').value;
    const references = document.getElementById('references').value;

    // Populate preview
    document.getElementById('previewName').textContent = name;
    document.getElementById('previewEmail').textContent = email;
    document.getElementById('previewPhone').textContent = phone;

    document.getElementById('previewSkills').innerHTML = skills.map(skill => `<li>${skill}</li>`).join('');
    document.getElementById('previewEducation').innerHTML = education.map(edu => `<p>${edu}</p>`).join('');
    document.getElementById('previewExperience').innerHTML = experience.map(exp => `<p>${exp}</p>`).join('');
    document.getElementById('previewLanguages').textContent = languages;
    document.getElementById('previewAwards').textContent = awards;
    document.getElementById('previewReferences').textContent = references;

    // Show preview
    document.getElementById('cvDisplay').style.display = 'block';
});
