import React from "react";

export default function Subscribe() {
    return (
        <section className="subscribe-content">
            <div className="subscribe-container">
                <div className="badge">Inscrever-se</div>
                <div className="wide-block-texts">
                    <h2 className="wide-block-title">Vamos ao Trabalho</h2>
                    <h3 className="wide-block-subtitle">Se inscreva agora e receba em primeira mão ofertas de trabalho no seu inbox.</h3>
                    <h3 className="wide-block-subtitle">Toda semana. Apenas ofertas boas.</h3>
                </div>
                <form className="subscribe-form">
                    <input className="subscribe-input" type="email" placeholder="Seu enderço de email"></input>
                    <button className="subscribe-button" type="button">Receber Ofertas de trabalho</button>
                </form>
            </div>
        </section>
    );
}