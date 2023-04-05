import React, { Component } from "react";
import './navs.css';
import { Link } from "react-router-dom";
import {Navbar, Nav, container} from "react-bootstrap";


class Navs extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                {/* <a className="navbar-brand" href="Resturant"> Resturant </a> */}
                <img src={"http://demo.tutsflow.com/foodera/images/logo.png"} title ="Logo"></img>

                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/Home">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about us">About Us</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Explore Food">Explore Food</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/review">Reviews</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/faq">FAQ</Link>
                        </li>
                        <Nav.Link id="lastnav" >087654342</Nav.Link>


                        </ul>
                        
                    
                </div>
            </nav>

        );
    }
}
export default Navs;