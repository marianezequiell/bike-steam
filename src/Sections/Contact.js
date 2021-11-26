/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import Header from '../UI/Header'
import SectionTitle from '../UI/SectionTitle'

const Contact = () => {
    return (
        <div>
            <Header />
            <SectionTitle title="Contact" />
            <div id="contactSection">
                <div id="subContactSection">
                    <div id="googleMaps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26281.729249301396!2d-58.43852504695255!3d-34.573396763125984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59c771eb933%3A0x6b3113b596d78c69!2sPalermo%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1637693448833!5m2!1ses-419!2sar"  style={{border: 0, width: 600, height: 450}} allowfullscreen="" loading="lazy" />
                    </div>
                    <div id="formContainer">
                        <h2>Contáctese con nosotros</h2>
                        <form id="form">
                            <input type="text" placeholder="Nombre" required />
                            <input type="text" placeholder="E-mail" required />
                            <input type="text" placeholder="Tel." />
                            <textarea required placeholder="Ingrese aquí su consulta" />
                            <button className="btn btn-primary">Enviar mensaje</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
