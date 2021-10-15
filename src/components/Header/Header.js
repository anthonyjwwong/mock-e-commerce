import React from 'react';
import './Header.css';
import { Link,useHistory } from "react-router-dom";


const Header = () => {
   

    return(
        <div className="header">
            <div className="header_container">
                <div className="header_title">
                    <Link to="/" className="noUnderline">
                        <h3>FE</h3>
                    </Link>
                </div>
                <div className="header_nav">
                    <ul>
                        <Link to="/about" style={{textDecoration: 'none'}}>
                            <li>About</li>
                        </Link>
                        <Link to="/explore"  style={{textDecoration: 'none'}}>
                            <li>Explore</li>
                        </Link>
                        <Link to="/contact"  style={{textDecoration: 'none'}}>
                            <li>Contact Us</li>
                        </Link>
                    </ul>
                </div>
                <div className="header_functions">
                    <ul>
                        <li>Log in</li>
                        <li>Cart</li>
                    </ul>
                </div> 
            </div>
        </div>
    );
}

export default Header;