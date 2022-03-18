import React from "react";

export default function Footer() {
    return (
        <section className="footer-content">
            <div className="footer-container">
                <div className="footer-description">
                    <h3 className="footer-title">Jobs</h3>
                    <p className="footer-subtitle">Conteúdo pago paratrabalhar em casa, remotamente,freelance, contrato e em tempo integral.</p>
                </div>
                <div className="footer-nav">
                    <ul className="footer-links-list">
                        <li className="list-item">
                            <a href="#">Trabalhos</a>
                        </li>
                        <li className="list-item">
                            <a href="#">Contratar</a>
                        </li>
                        <li className="list-item">
                            <a href="#">Newsletter</a>
                        </li>
                        <li className="list-item">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <ul className="footer-terms-list">
                        <li className="list-item">
                            <a href="#">Novidades</a>
                        </li>
                        <li className="list-item">
                            <a href="#">Termos</a>
                        </li>
                        <li className="list-item">
                            <a href="#">Privacidade</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
