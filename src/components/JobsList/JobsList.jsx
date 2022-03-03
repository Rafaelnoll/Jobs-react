import React from "react";
import DropDown from "../DropDown";

//Fake database
const filters = [
    {
        name: "Tipo",
        itemsList: [
            "Meio-Período",
            "Contrato",
            "Freelance",
            "Tempo Integral"
        ]
    },
    {
        name:"Categoria",
        itemsList:[
            "Marketing",
            "Técnico",
            "Editor",
            "UX",
            "Medico",
            "SEO",
            "Educação",
            "Outros"
        ]
    },
    {
        name:"Nível",
        itemsList:[
            "Qualquer",
            "Iniciante",
            "Intermedíario",
            "Senior"
        ]
    },
    {
        name:"Localização",
        itemsList:[
            "Local",
            "Remoto",
            "Remoto (BR)",
            "Remoto (USA)"
        ]
    }
]

export default function JobsList() {
    return (
        <section className="jobslist-container">
            <div className="jobslist-header">
                <div className="badge">Trabalhos</div>
                <h3 className="jobslist-title">Melhores Oportunidades De Emprego</h3>
                <h2 className="jobslist-subtitle">Oportunidades para trabalhar em casa, remotamente, freelance, full-time, part-time, contrato e estágios.</h2>
            </div>
            <div className="jobslist-filters-container">
                <ul className="filters-list">
                    {filters.map((filter, index) => {
                        return (
                            <li key={index} className="list-item">
                                <DropDown name={filter.name} itemsList={filter.itemsList} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

