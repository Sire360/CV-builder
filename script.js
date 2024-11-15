document.getElementById('generateCV').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const education = document.getElementById('education').value;
  const experience = document.getElementById('experience').value;
  const skills = document.getElementById('skills').value;

  const cvContent = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h3>Education</h3>
    <p>${education.replace(/\n/g, '<br>')}</p>
    <h3>Experience</h3>
    <p>${experience.replace(/\n/g, '<br>')}</p>
    <h3>Skills</h3>
    <p>${skills.replace(/\n/g, '<br>')}</p>
  `;

  document.getElementById('cvContent').innerHTML = cvContent;
  document.getElementById('cvDisplay').style.display = 'block';
});

document.getElementById('downloadCV').addEventListener('click', () => {
  const cvContent = document.getElementById('cvContent').innerHTML;
  const preHtml = `
    <html>
    <head>
      <title>CV Document</title>
    </head>
    <body>
  `;
  const postHtml = `
    </body>
    </html>
  `;
  const blob = new Blob([preHtml + cvContent + postHtml], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'CV.doc';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
