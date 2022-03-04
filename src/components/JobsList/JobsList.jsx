import React from "react";
import DropDown from "../DropDown";
import Job from "../Job";

//Fake filters database
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
        name: "Categoria",
        itemsList: [
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
        name: "Nível",
        itemsList: [
            "Qualquer",
            "Iniciante",
            "Intermedíario",
            "Senior"
        ]
    },
    {
        name: "Localização",
        itemsList: [
            "Local",
            "Remoto",
            "Remoto (BR)",
            "Remoto (USA)"
        ]
    }
];

//Fake jobs database
const jobs = [
    {
        jobName: "Escritor",
        companyName: "GoodPlace",
        jobLocation: "Remoto (USA)",
        jobType: "Meio-Período",
        postDate: "4 de Março, 2022"
    },
    {
        jobName: "Designer de UX",
        companyName: "UXLegal",
        jobLocation: "Remoto (BR)",
        jobType: "Contrato",
        postDate: "3 de Março, 2022"
    },
    {
        jobName: "Desenvolvedor Front-end Junior",
        companyName: "DevLife",
        jobLocation: "Local",
        jobType: "Tempo Integral",
        postDate: "3 de Março, 2022"
    },
    {
        jobName: "Marketing Digital",
        companyName: "MarketingKing",
        jobLocation: "Remoto (USA)",
        jobType: "Freelance",
        postDate: "2 de Março, 2022"
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
            <ul className="jobs-list">
                {jobs.map((job, index) => {
                    return (
                        <li key={index} className="list-item">
                            <Job 
                                jobName={job.jobName}
                                companyName={job.companyName}
                                jobType={job.jobType}
                                jobLocation={job.jobLocation}
                                postDate={job.postDate}
                            />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

