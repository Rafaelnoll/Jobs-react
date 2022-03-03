import React, { useState } from "react";
import Image from "next/image";
import DownArrow from "../../../styles/img/drop-down-arrow.svg";

export default function DropDown(props) {
    const [isDown, setIsDown] = useState(false);

    function dropDownContent() {
        if (isDown) {
            return (
                <nav className="dropdown-list-content">
                    <ul className="dropdown-list">
                        {props.itemsList.map((item, index) => {
                            return <li key={index} className="dropwdown-list-item">{item}</li>
                        })}
                    </ul>
                </nav>
            );
        } else {
            return <div className="dropdown-content"></div>
        }
    }

    function changeDropDown() {
        setIsDown(!isDown);
    }

    return (
        <div className="dropDown" onClick={changeDropDown}>
            <div className="dropdown-button">
                <span>{props.name}</span>
                <Image
                    src={DownArrow}
                />
            </div>
            {dropDownContent()}
        </div>
    );
}