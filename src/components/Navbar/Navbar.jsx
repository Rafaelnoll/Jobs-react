import { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo-container">
                        <h1 className="navbar-title">Jobs</h1>
                    </div>
                    <div className="navbar-links">
                        <a className="login-button navbar-link default-button" href="#">Log in</a>
                        <a className="post-job-button navbar-link default-button" href="#">Postar Trabalho</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;