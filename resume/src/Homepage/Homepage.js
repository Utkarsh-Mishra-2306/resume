import React from "react";
import "./Homepage.css";
import githubIcon from "../../src/images/githubIcon.png";
import linkedinIcon from "../../src/images/linkedinIcon.png";
import photo from "../../src/images/photo.gif";

function HomePage()
{
    return(
        <div className="homepage_container">
            <div className="homepage_left">
                <p className="homepage_left_p1"> <span className="green_color">Hi, </span> my name is</p>
                <p className="homepage_left_p2">Utkarsh Mishra.</p>
                <p className="homepage_left_p3"> I am a future <span className="green_color"> Engineer. </span></p>
                <p className="homepage_left_description">getting hand on <span className="green_color"> Data Structure Algorithm </span>
                 and </p>
                 <p>also gonna be a <span className="green_color"> Web Developer</span></p>

                 <div>
                    <a href="" target="_blank">
                        <img src={githubIcon} alt="github_image"/>
                    </a>
                    <a href="" target="_blank">
                        <img src={linkedinIcon} alt="linkedin_image"/>
                    </a>
                 </div>
                 <div>
                    <a href="mailto:utkarsh4u.mishra@gmail.com">
                        <button className="homepage_left_button">Get in Touch</button>
                    </a>
                 </div>
            </div>
            <div className="homepage_right">
                <img src={photo} alt="GIF"/>
            </div>
        </div>
    );
}

export default HomePage;