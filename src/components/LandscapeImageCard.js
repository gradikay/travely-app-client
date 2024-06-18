import React from "react";

export default function LandscapeImageCard(props){
    const {image} = props;
    return(
        <div className="card border-0 border-bottom rounded-0">
            <div className="card border-0" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className={`col-4 align-content-center ${image == "none" ? "d-none" : ""}`}>
                    <img src={image} className="img-fluid p-1 rounded-start" alt="..."/>
                    </div>
                    <div className={`col-${image == "none" ? "12" : "8"}`}>
                    <div className="card-body">
                        <h5 className="card-title"> <strong style={{fontSize:"1.5rem"}}> 10 Scandalous Love Triangles </strong></h5>
                        <p className="card-text">| Scandal | Rob Lewes</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    );
}