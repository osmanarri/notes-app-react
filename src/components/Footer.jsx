import React from "react";

export default function Footer(){

    // dynamic year
    const currentYear = new Date().getFullYear();
    const creator = "Osman"

    return(

        <footer>
           <p>Copyright © {creator} {currentYear}</p>
        </footer>
    )
}