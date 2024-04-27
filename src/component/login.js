import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
function Login() {
    const history = useNavigate();
    const [isSignedIn, setIsSignedIn] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function signIn(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/", {
                email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        setIsSignedIn(true);
                        history("/homePage", { state: { id: email } })
                    }
                    else if (res.data === "notexist") {
                        alert("Wrong Email or Password")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);
            alert('Error Signing In')
        }
    }

    return (
        isSignedIn !== true ?
            <div className="login">

                <h1>Login</h1>

                <form action="POST">
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                    <input type="submit" onClick={signIn} />

                </form>

                <br />
                <p>OR</p>
                <br />

                <Link to="/signup">Signup Page</Link>

            </div> : null
    );
}

export default Login