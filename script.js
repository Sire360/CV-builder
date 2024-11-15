document.getElementById('generateCV').addEventListener('click', (event) => {
  event.preventDefault(); // Ensure the default form behavior doesn't interfere.

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const skills = document.getElementById('skills').value.trim().replace(/\n/g, '<br>');
  const education = document.getElementById('education').value.trim().replace(/\n/g, '<br>');
  const experience = document.getElementById('experience').value.trim().replace(/\n/g, '<br>');
  const languages = document.getElementById('languages').value.trim().replace(/\n/g, '<br>');
  const awards = document.getElementById('awards').value.trim().replace(/\n/g, '<br>');
  const references = document.getElementById('references').value.trim().replace(/\n/g, '<br>');

  // Ensure all required fields are filled
  if (!name || !email || !phone) {
    alert('Please fill in all required fields.');
    return;
  }

  // Populate the preview section
  const cvContent = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Languages</h3>
    <p>${languages}</p>
    <h3>Awards & Certifications</h3>
    <p>${awards}</p>
    <h3>References</h3>
    <p>${references}</p>
  `;

  // Display the CV preview
  const cvDisplay = document.getElementById('cvDisplay');
  document.getElementById('cvContent').innerHTML = cvContent;
  cvDisplay.style.display = 'block';
});
