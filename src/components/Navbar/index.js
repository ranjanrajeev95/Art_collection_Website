import React from 'react';
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const Navbar = ({ history }) => {
    return (
        <div className="navbar">
            <ul>
                <li>
                <FontAwesomeIcon
                icon={ faBookOpen }
                size="2x"
                />
                </li>
                <li className="logo" onClick={()=>history.push('/')}>
                    anisha
                </li>
                <li>
                <FontAwesomeIcon
                icon={ faShoppingCart }
                size="2x"
                onClick={()=>history.push('/cart')}
                />
                </li>
            </ul>
        </div>
    )
}

export default withRouter(Navbar);