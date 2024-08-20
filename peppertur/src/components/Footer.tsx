import React from 'react';

export const Footer = () => {
  return (
    <>
    
    <footer className="shadow-2xl text-center py-6">
      <p className="text-4xl font-bold mb-4 transition-colors duration-300 hover:text-red-600">
        Peppertur
      </p>
      <div className="flex justify-center mb-4">
        <a href="https://www.instagram.com/peppertur/" className="mx-4 text-2xl text-gray-800 transition-colors duration-300 hover:text-red-600">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://maps.app.goo.gl/r2hKXkmU6cDshhJ27" className="mx-4 text-2xl text-gray-800 transition-colors duration-300 hover:text-red-600">
          <i className="bx bx-map"></i>
        </a>
        <a href="https://www.facebook.com/peppertur.com.br/?locale=pt_BR" className="mx-4 text-2xl text-gray-800 transition-colors duration-300 hover:text-red-600">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=5541998552425&text&type=phone_number&app_absent=0" className="mx-4 text-2xl text-gray-800 transition-colors duration-300 hover:text-red-600">
          <i className="bx bxl-whatsapp"></i>
        </a>
      </div>
      <a href="mailto:mariapimenta2607@gmail.com" className="text-sm text-gray-800">
        &#169; Maria Vitória Garcia Pimenta. All rights reserved
      </a>
    </footer>
    </>
  );
};

