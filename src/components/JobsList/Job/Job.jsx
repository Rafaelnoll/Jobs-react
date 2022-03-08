import React from "react";

export default function Job(props) {
    return (
        <div className="job-container">
            <div className="job-content">
                <img
                    className="job-company-image"
                    src="https://media.istockphoto.com/vectors/technological-brain-design-brain-and-circuit-vector-design-connection-vector-id1136903163?k=20&m=1136903163&s=612x612&w=0&h=4qiCPXMe1pvxsSiJ38IKht8iBA2YGthJh8ME8AExk7k="
                />
                <div className="job-infos">
                    <div>
                        <h3 className="job-name">{props.jobName}</h3>
                        <p className="company-name">{props.companyName}</p>
                        <p className="job-location-type">{props.jobType}, {props.jobLocation}</p>
                    </div>
                    <div>
                        <p className="post-time">{props.postDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}