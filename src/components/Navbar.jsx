import React, { useState } from "react";
import { Link } from "react-scroll";
const Navbar = (props) => {
    
    const [navLinkOpen, navLinkToggle] = useState(false);
    const handleNavLinksToggle =() => {
        navLinkToggle(!navLinkOpen)
    };
    const renderClasses = () =>{
        let classes = "navlinks";

        if (navLinkOpen) {
            classes += " active"
        }
        return classes
    }
    return (
        <nav>
            <div className="logo">
                <Link className="navbar-brand" to="0" onClick={() => props.setState(0)} spy={true} smooth={true} duration={1000}><img src="joint.png"/><h4>TWS</h4></Link>
            </div>
            <ul className="navlinks">
                <li className="link"><Link className="nav-link" activeClass="active-route" onSetActive={()=> {props.setState(0)}} to="0" spy={true} smooth={true} duration={1000}>Wasted Stamps</Link></li>
                <li className="link"><Link className="nav-link" activeClass="active-route" onSetActive={()=> {props.setState(1)}} to="1" spy={true} smooth={true} duration={1000}>About</Link></li>
                <li className="link"><Link className="nav-link" activeClass="active-route" onSetActive={()=> {props.setState(2)}} to="2" spy={true} smooth={true} duration={1000}>OGs</Link></li>
                <li className="link"><Link className="nav-link" activeClass="active-route" onSetActive={()=> {props.setState(3)}} to="3" spy={true} smooth={true} duration={1000}>ION</Link></li>
                <li className="link"><Link className="nav-link" activeClass="active-route" onSetActive={()=> {props.setState(4)}} to="4" spy={true} smooth={true} duration={1000}>Destination</Link></li>
            </ul>
            <div onClick={handleNavLinksToggle} className="hamburger-toggle">
                <i className="fa-solid fa-bars"></i>
            </div>
        </nav>
    )
}

export default Navbar