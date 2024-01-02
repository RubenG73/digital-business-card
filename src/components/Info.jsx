import React from "react";
import profilePic from '../assets/profile.jpg'
import mailIcon from '../assets/mail-icon.png'
import linkedIdIcon from '../assets/linkedin.png'

export default function Info() {
    return (
        <div className="info-container">
            <div className="img-container"></div>
            <div className="info-text-container">
                <h1>Godoy Ruben Ignacio</h1>
                <h2>Frontend Developer</h2>
                <p>rubengodoy.website</p>
            </div>
            <div className="buttons-container">
                <button type="button" className="btn"><img src={mailIcon} alt="" />Email</button>
                <button type="button" className="btn right-btn"><img src={linkedIdIcon} alt="" />LinkedIn</button>
            </div>
        </div>
    )
}