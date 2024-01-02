import React from "react";
import twitter from '../assets/Twitter Icon.png'
import facebook from '../assets/Facebook Icon.png'
import instagram from '../assets/Instagram Icon.png'
import github from '../assets/GitHub Icon.png'

export default function Footer() {
    return (
        <footer className="footer-container">
            <img src={twitter} alt="twitter-icon" />
            <img src={facebook} alt="twitter-icon" />
            <img src={instagram} alt="twitter-icon" />
            <img src={github} alt="twitter-icon" />
        </footer>
    )

}
