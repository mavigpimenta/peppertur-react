import React, { useRef } from "react";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { WhoAre } from "./components/WhoAre";

export const Page: React.FC = () => {
    
    const contactRef = useRef<HTMLDivElement>(null);
    const whoAreRef = useRef<HTMLOptionElement>(null);
    const homeRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);

    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, section: string) => {
        event.preventDefault();
        switch(section) {
            case 'contact':
                contactRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'whoare':
                whoAreRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'home':
                homeRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'services':
                servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Navbar handleNavClick={handleNavClick} />
            <Home ref={homeRef} handleNavClick={handleNavClick} />
            <Services ref={servicesRef} />
            <WhoAre ref={whoAreRef} />
            <Contact ref={contactRef} />
            <Footer />
        </>
    );
};
