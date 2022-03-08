import React from "react";
import WideBlock from "./WideBlock";

export default function WideGrid() {
    return (
        <section className="wide-grid">
            <WideBlock
                badge="Para Trabalhar"
                title="Procurando um trabalho?"
                subTitle="A velocidade importa, seja o primeiro a se candidatar! Receba alertas de emprego em sua caixa de entrada de e-mail para novas vagas diariamente. A Assinatura do Boletim Diário está aberta para acesso antecipado."
                buttonText="Torne-se um membro"
            />

            <WideBlock 
            badge="Para Empresas"
            title="Procurando Contratar?"
            subTitle="Publique um emprego no quadro de empregos nº 1 para alcançar 100 mil visitantes mensais do site, mais de 9.800 leitores de newsletters, 120 mil redatores no LinkedIn e 5,4 mil redatores no Facebook!"
            buttonText="Postar um emprego - R$ 300,00"
            />
        </section>
    );
}