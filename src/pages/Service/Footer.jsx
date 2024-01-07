import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () =>
{

    return (
        <div>


            <div className="service-blockquote">
                <blockquote>
                    “Within every success lies the failure. I can give you the formula for failure.  You have to avoid these failures to achieve success.”
                    <cite>Sayantan Kar</cite>
                </blockquote>
            </div>
            <div className="space-10"></div>

            <div className="service-blockquote">
                <blockquote>
                    “Pursuing excellence is our ongoing sprint, and with each milestone, we unveil the boundless horizon of our collective potential.”
                    <cite>{ "Dibyangan Sarkar" }</cite>
                </blockquote>
            </div>


        </div>
    );

}

export default Footer;