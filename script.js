document.getElementById('downloadCV').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const skills = document.getElementById('skills').value.replace(/\n/g, '<br>');
  const education = document.getElementById('education').value.replace(/\n/g, '<br>');
  const experience = document.getElementById('experience').value.replace(/\n/g, '<br>');
  const languages = document.getElementById('languages').value.replace(/\n/g, '<br>');
  const awards = document.getElementById('awards').value.replace(/\n/g, '<br>');
  const references = document.getElementById('references').value.replace(/\n/g, '<br>');

  // Word document content
  const docContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          padding: 20px;
          margin: 0;
        }
        h1, h2, h3 {
          color: #00ABE4;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 10px;
          text-align: left;
          border: 1px solid #ddd;
        }
        th {
          background-color: #E9F1FA;
        }
      </style>
    </head>
    <body>
      <h1>${name}'s CV</h1>
      <h2>Contact Information</h2>
      <table>
        <tr><th>Email</th><td>${email}</td></tr>
        <tr><th>Phone</th><td>${phone}</td></tr>
      </table>
      
      <h2>Skills</h2>
      <p>${skills}</p>
      
      <h2>Education</h2>
      <p>${education}</p>
      
      <h2>Work Experience</h2>
      <p>${experience}</p>
      
      <h2>Languages</h2>
      <p>${languages}</p>
      
      <h2>Awards & Certifications</h2>
      <p>${awards}</p>
      
      <h2>References</h2>
      <p>${references}</p>
    </body>
    </html>
  `;

  // Create the Word document blob
  const blob = new Blob([docContent], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);

  // Download the document
  const link = document.createElement('a');
  link.href = url;
  link.download = `${name.replace(/\s+/g, '_')}_CV.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
