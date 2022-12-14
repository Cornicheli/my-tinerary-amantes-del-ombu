import React from "react";
import '../Styles/Footer.css'
import "./ScrollToTop";
import "./Arrow.css";
import { FooterToTop } from "./ScrollToTop";



export default function Footer() {
  return (
        <footer> 
            <div className="contenedorBoton">
                <button className="boton">
                    <a href="-">Cities</a>{" "}
                </button>
                <button className="boton">
                    <a href="-">Hotels</a>
                </button>
            </div>
            <div className="date">
                <h3>Information</h3>
                <p>Monday to Friday. 10am - 21pm.</p>
                <p>Saturdays. 10am - 17pm.</p>
                <p>Fair. 10am - 15pm</p>
            </div>
            <div className="text-center">
                <h4>✈ Land your feet </h4>
                <h4> at your next destination ✈ </h4> <br />
                <a className="phone" href="tel:+">
                    0800-824-1784
                </a>
            </div>
            <div className="info">
                <h3>Methods of payment</h3>
                <p>Debit</p>
                <p>Credit</p>
                <p>Transfer</p>
            </div>
            {<FooterToTop />}
            
        </footer>
    );
}
