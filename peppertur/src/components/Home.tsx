import React from 'react';
import homeImg from '../../public/home-img.jpeg';

export const Home = React.forwardRef(({ handleNavClick }, ref) => {
    return (
    <>
        <section ref={ref} id="home" className="flex flex-col max-h-screen h-screen justify-center items-start px-6 sm:px-10 relative bg-black">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${homeImg})`, filter: 'brightness(0.3)' }}></div>
            <div className="relative z-10 text-white max-w-lg">
                <h3 className="text-3xl sm:text-4xl font-bold">Olá,</h3>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    Seja bem-vindo à <span className="text-red-600">Peppertur</span>
                </h1>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                    <button
                        onClick={(e) => handleNavClick(e, 'contact')}
                        className="relative inline-flex justify-center items-center w-[150px] h-[48px] sm:h-[56px] bg-red-600 text-white hover:bg-red-700 rounded-lg font-semibold text-lg z-10 overflow-hidden transition duration-500 group"
                    >
                        Contate-nos
                    </button>
                    <button
                        onClick={(e) => handleNavClick(e, 'whoare')}
                        className="btn2 relative inline-flex justify-center items-center w-[150px] h-[48px] sm:h-[56px] bg-red-600 text-white hover:bg-red-700 rounded-lg font-semibold text-lg z-10 overflow-hidden transition duration-500 group"
                    >
                        Saiba Mais
                    </button>
                </div>
            </div>
        </section>
    </>
  );
});

