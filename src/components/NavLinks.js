import React from "react";

export default function NavLinks(props) {
    const {name, linkTo} = props;

    return(
        <li className="nav-item">
            <a 
            href={linkTo}
            aria-current="page" 
            style={{fontSize:"1.3rem"}}
            className={`nav-link text-uppercase`} // add 'active' to activate the link
            >
                <b>{name}</b>
            </a>
        </li>
    );
}