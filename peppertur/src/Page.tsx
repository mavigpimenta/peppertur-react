import { useRef } from "react";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { WhoAre } from "./components/WhoAre";

export const Page = () => {
    const contactRef = useRef(null);
    const whoAreRef = useRef(null);
    const homeRef = useRef(null);
    const servicesRef = useRef(null);

    const handleNavClick = (event, section) => {
        event.preventDefault();
        switch(section) {
            case 'contact':
                contactRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'whoare':
                whoAreRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'home':
                homeRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'services':
                servicesRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Navbar handleNavClick={handleNavClick} />
            <Home ref={homeRef} handleNavClick={handleNavClick}/>
            <Services ref={servicesRef} />
            <WhoAre ref={whoAreRef} />
            <Contact ref={contactRef} />
            <Footer />
        </>
    );
};
