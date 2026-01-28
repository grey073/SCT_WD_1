import {use, useEffect ,useState } from 'react'

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() =>{
        const handleScroll = () => {
            setScrolled(window.scrollY>60);
    };
    window.addEventListener("scroll",handleScroll);
    return () =>window.removeEventListener("scroll",handleScroll);
    },[]);
    return(
        <nav className={`navbar ${scrolled ?"scrolled" :""}`}>
            <div className="navbar-content">
            <h2 className="logo">
               
                Movies <span>Watch</span>
                </h2>
             
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                 <li><a href="#watch">Watchlist</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
                </div>
                </nav>
        );
}

export default Navbar;