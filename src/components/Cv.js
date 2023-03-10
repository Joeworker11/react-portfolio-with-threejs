import React from 'react';
import { jsPDF } from "jspdf";
import myCV from '../documents/CV_JOZSEF_ECKERT.pdf';

function DownloadCVButton() {
  const downloadCV = () => {
    // Create new jsPDF instance
    const doc = new jsPDF();

    // Add text and image to the PDF
    doc.text(`${myCV}`, 10, 10);
    // You can add an image as well
    // doc.addImage(imageData, 'JPEG', x, y, width, height);

    // Save the PDF
    doc.save("jozsef_eckert_cv.pdf");
  };

  return (
    <button className='text-yellow' onClick={downloadCV}>Download CV</button>
  );
}

const Cv = () => {
    return (
        <>
          <h1 className='text-white px-2'>My CV</h1>
          <p className='text-white py-6'>Here's some information about me...</p>
          <DownloadCVButton />
        </>
    )
}

export default Cv;