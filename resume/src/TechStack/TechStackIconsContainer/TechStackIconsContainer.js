import React from "react";
import "./TechStackIconsContainer.css";

function TechStackIconsContainer({name, image, altProperty})
{
    return(
        <div className="techstack_icons">
            <img src={image} alt={altProperty} />
            <p>{name}</p>
        </div>
    );
}

export default TechStackIconsContainer;