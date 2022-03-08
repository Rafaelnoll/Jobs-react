import React from "react";

export default function WideBlock(props) {
    return (
        <div className="wide-block">
            <div className="badge">{props.badge}</div>
            <div className="wide-block-texts">
                <h2 className="wide-block-title">{props.title}</h2>
                <h3 className="wide-block-subtitle">{props.subTitle}</h3>
            </div>
            <a href="#" className="wide-block-button">{props.buttonText}</a>
        </div>
    );
}