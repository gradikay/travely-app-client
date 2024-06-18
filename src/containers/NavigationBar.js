import React from "react";
import NavLinks from "../components/NavLinks";
import Model from "../components/Model";
import '../App.css';

export default function NavigationBar() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();

    return (
        <nav className="navbar navbar-expand-lg border-bottom mb-5">
            <div className="container">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="row w-100">
                        <div className="col-12">
                            <div className="row">   
                                <div className="col-6">
                                    <ul className="navbar-nav justify-content-start">
                                        <li className="nav-item">
                                            <span className="nav-link"> <strong>{month}/{day}/{year}</strong> </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="navbar-nav justify-content-end">
                                        <NavLinks name="about" linkTo="#about" />
                                        <NavLinks name="contact" linkTo="#contact" />
                                        <NavLinks name="my account" linkTo="#myaccount" />
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 py-2 my-2 border-bottom">
                            <div className="row text-center "> 
                                <div className="col-3 align-content-center">
                                    {/* Modal Button */}
                                    <button type="button" className="btn border btn-outline-dark rounded-0 shadow-sm text-uppercase" data-bs-toggle="modal" data-bs-target={`#newsLetter`}>
                                        <strong style={{fontSize:"1.5rem"}}> News Letter </strong>
                                    </button>
                                    <Model title="news letter" target="newsLetter" modelLabel={"newsLetterLabel"} />
                                </div>
                                <div className="col-6"> 
                                    <a className="navbar-brand brand" href="#" style={{fontSize: "4rem"}}>
                                         Travely
                                    </a>
                                </div>
                                <div className="col-3 align-content-center">
                                <button type="button" className="btn border btn-outline-dark rounded-0 shadow-sm text-uppercase">
                                    <strong style={{fontSize:"1.5rem"}}> pricing plan </strong>
                                </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <ul className="navbar-nav justify-content-center">
                              <li className="nav-item">
                                {/* Modal Button */}
                                <button type="button" className="btn border shadow-sm m-0 me-1 rounded-0" data-bs-toggle="modal" data-bs-target={`#allCategory`}>
                                  <strong style={{fontSize:"1.5rem"}}> ALL </strong>
                                </button>
                                <Model title="all category" target="allCategory" modelLabel={"allCategoryLabel"} />
                              </li>
                              <NavLinks name="photography" linkTo="#photography" />
                              <NavLinks name="adventure" linkTo="#adventure" />
                              <NavLinks name="culture" linkTo="#culture" />
                              <NavLinks name="nature" linkTo="#nature" />
                              <NavLinks name="historical" linkTo="#historical" />
                              <NavLinks name="solo" linkTo="#solor" />
                              <NavLinks name="family" linkTo="#family" />
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
}
        