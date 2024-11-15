// Event listener for generating the CV preview
document.getElementById('generateCV').addEventListener('click', () => {
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

  // Populate the CV preview
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

  // Display the CV content in the preview section
  document.getElementById('cvContent').innerHTML = cvContent;
  document.getElementById('cvDisplay').style.display = 'block';
});

// Event listener for downloading as Word document
document.getElementById('downloadCV').addEventListener('click', () => {
  const cvContent = document.getElementById('cvContent').innerHTML;

  const docContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>CV Document</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
        }
        h2, h3 {
          color: #00ABE4;
        }
        p {
          margin: 10px 0;
        }
      </style>
    </head>
    <body>
      ${cvContent}
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff', docContent], { type: 'application/msword' }); // Add BOM for compatibility
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'Generated_CV.doc';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// Event listener for downloading as PDF
document.getElementById('downloadPDF').addEventListener('click', () => {
  const { jsPDF } = window.jspdf; // Import jsPDF library
  const pdf = new jsPDF();

  // Get content for the PDF
  const content = document.getElementById('cvContent');

  // Convert HTML to PDF
  pdf.html(content, {
    callback: function (doc) {
      doc.save('Generated_CV.pdf');
    },
    x: 10,
    y: 10,
    width: 180 // Adjust width to fit the content
  });
});
