import React from "react";
import '../App.css';

export default function ImageCard(props){
    const {image} = props;
    return(
        <div className="card border-0 text-center">
            <img 
                src={image}
                className="card-img-top px-4" 
                alt="..."
            />
          <div className="card-body py-0" >
            <h5 className="card-title">
                <strong className="journal-title rounded shadow-sm" style={{fontSize:"1.5rem"}}> 10 Scandalous Love Triangles Captivating the Public </strong>
            </h5>
          </div>
          <ul class="list-group list-group-flush border-0">
                <li class="list-group-item">| Scandal | Rob Lewes</li>
            </ul>
          <div className="card-footer bg-white">
            <p>The Allure of Extreme Wealth When the term 'billionaire'  Wealth When the term 'billionaire'...</p>
          </div>
        </div>

    );
}