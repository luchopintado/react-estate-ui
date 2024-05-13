import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
    const [open, setOpen] = useState(false);
    const user = {};

    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>LamaEstate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>

            <div className="right">
                {
                    user !== null ? (
                        <div className="user">
                            <img src="https://i.pravatar.cc/100" alt="" />
                            <span>John Doe</span>
                            <Link to="/profile" className="profile">
                                <div className="notification">3</div>
                                <span>Profile</span>
                            </Link>
                        </div>
                    ) : (
                        <>
                            <a href="/">Sign in</a>
                            <a href="/" className="register">Sign up</a>
                        </>
                    )
                }

                <div className="menuIcon">
                    <img src="/menu.png" alt="" onClick={() => setOpen((prevState) => !prevState)} />
                </div>
                <div className={ open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign out</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
