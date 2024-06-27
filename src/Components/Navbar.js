import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import  '../App.css'

export class Navbar extends Component {
    render() {
        return (
            <>
                <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">DailyNews</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" id="ll"   aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" id="ll" aria-current="page" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" id="ll" aria-current="page" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" id="ll" aria-current="page" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" id="ll" aria-current="page" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" id="ll" aria-current="page" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" id="ll" aria-current="page" to="/technology">Technology</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="form-check form-switch" >
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.toggleMode} />
                            <label className="form-check-label" for="flexSwitchCheckDefault" style={{ color: this.props.mode === "dark" ? "white" : "black" }}
                            >switch mode</label>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar
