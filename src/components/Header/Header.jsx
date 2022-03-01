import React from "react";
import Image from "next/image";
import HomepageImage from "../../../styles/img/homepage-image.png";

export default function Header() {
    return (
        <section className="homepage-body">
            <div className="homepage-container">
                <div className="homaepage-texts">
                    <h1 className="homepage-title">Encontre as melhores oportunidades de emprego</h1>
                    <h3 className="homepage-subtitle">Trabalhe de casa, remotamente, freelance,contrato, e full-time. Se inscreva na nossa newsletter semanal.</h3>
                </div>
                <div className="newsletter-form-container">
                    <form className="newsletter-form">
                        <input type="email" className="form-input" placeholder="Seu Endereço de Email" />
                        <button type="submit" className="form-button">Inscrever-se!</button>
                    </form>
                </div>
            </div>
            <div className="homapage-image-container">
                <Image
                    src={HomepageImage}
                    width={1100}
                    height={1000}
                    priority
                />
            </div>
        </section>
    );
}

