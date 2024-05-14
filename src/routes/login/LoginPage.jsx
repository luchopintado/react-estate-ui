import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./loginPage.scss";
import apiRequest from "../../lib/apiRequest";

function LoginPage() {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");

        try {
            setIsLoading(true);
            const res = await apiRequest.post("/auth/login", {
                username,
                password,
            });

            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate("/");
        } catch (err) {
            console.log(err);
            setError(err.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Welcome back</h1>
                    <input name="username" type="text" placeholder="Username" required min={3} maxLength={20} />
                    <input name="password" type="password" placeholder="Password" required />
                    <button disabled={isLoading}>Login</button>
                    {error && <span className="error">{error}</span>}
                    <Link to="/register">{"Don't"} you have an account?</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
}

export default LoginPage;
