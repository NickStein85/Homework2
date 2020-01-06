import React, { useState } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar"
import "./style.scss";
const AuthPage = () => {
    const [userInput, setUserInput] = useState({
        email: "",
        username: "",
        profilepic: "",
        password: ""
    })

    const onChangeInput = e => {
        e.preventDefault();
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        axios.post("/users", {
            ...userInput
        })
            .then(result => {
                if (result.data.message) return;
                window.location.href = "/auth";
            });

    };

    return (
        <div className="auth-container">
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" value={userInput.email} className="form-control" id="email" onChange={onChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input type="text" name="username" value={userInput.username} className="form-control" id="username" onChange={onChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="profilepic">Profile Picture</label>
                    <input type="text" name="profilepic" value={userInput.profilepic} className="form-control" id="profilepic" onChange={onChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={userInput.password} className="form-control" id="password" onChange={onChangeInput} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default AuthPage;