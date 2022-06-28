import React from "react";
import "./TechStack.css";
import react from "../../src/images/react.svg";
import html from "../../src/images/html.svg";
import css from "../../src/images/css.svg";
import js from "../../src/images/js.png";
import java from "../../src/images/java.png";
import firebase from "../../src/images/firebase.png";
import TechStackIconsContainer from "./TechStackIconsContainer/TechStackIconsContainer.js";

function TechStack()
{

    const techstackData = [
    
        {
            iconName: "Html",
            iconImage: html,
            iconAltPropery: "htmlImage",
        },

        {
            iconName: "CSS",
            iconImage: css,
            iconAltPropery: "cssImage"
        },

        {
            iconName: "JavaScript",
            iconImage: js,
            iconAltPropery: "jsImage",
        },

    ];

    const techstackData2 = [
        {
            iconName: "React",
            iconImage: react,
            iconAltPropery: "reactImage",
        },

        {
            iconName: "JAVA",
            iconImage: java,
            iconAltPropery: "javaImage",
        },
        
        {
            iconName: "Firebase",
            iconImage: firebase,
            iconAltPropery: "firebaseImage",
        },
    ];
    return(
        <div className="techstack_container">
            <p className="teckstack_title">Tech Stack</p>
            <div className="techstack_icon_container">
                {techstackData.map((item, index) => {
                    return (
                    <TechStackIconsContainer
                    name = {item.iconName}
                    image = {item.iconImage}
                    altProperty = {item.iconAltPropery}
                    />
                    );
                })}
            </div>
            <div className="techstack_icon_container">
                {techstackData2.map((item, index) => {
                    return (
                    <TechStackIconsContainer
                    name = {item.iconName}
                    image = {item.iconImage}
                    altProperty = {item.iconAltPropery}
                    />
                    );
                })}
            </div>
        </div>
    );
}

export default TechStack;