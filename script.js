// Event listener for downloading as Word
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

  const blob = new Blob([docContent], { type: 'application/msword' });
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
  const pdf = new jsPDF();

  // Get content to include in the PDF
  const content = document.getElementById('cvContent');
  
  // Add content to PDF
  pdf.html(content, {
    callback: function (doc) {
      doc.save('Generated_CV.pdf');
    },
    x: 10,
    y: 10,
    width: 190 // Adjust width to fit content
  });
});
