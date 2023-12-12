import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                sessionStorage.setItem('isLoggedIn', true);
                setMessage('Login successful');
            } else {
                const data = await response.json();
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('An error occurred');
        }
    };

    return (
        <React.Fragment>
            <div className="container-fluid g-0 p-0 ms-0 me-0">
                <div className="row m-0 g-0 p-0">
                    <div className="col-2 g-0 p-0 ms-0 me-0 " />
                    <div className="col-8 g-0 p-0 ms-0 me-0 mt-3 mb-auto p-5">
                        <div
                            className="container position-absolute top-50 start-50 translate-middle"
                            id="main"
                            style={{ maxWidth: '40%' }}
                        >
                            <form
                                className="mx-5 my-5 px-5 py-5 w-80"
                                style={{ textAlign: 'center' }}
                                onSubmit={handleLogin}
                            >
                                <h1>Login</h1>
                                <div className="form-floating my-2">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating my-2">
                                    <input
                                        type="password"
                                        className="form-control mb-2"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <Link to="/ForgotPass">Forgot Password?</Link>
                                <button className="btn btn-primary w-100 py-2 mt-2 mb-2" type="submit">
                                    Log in
                                </button>
                                New User ? <Link to="/signup">SignUp</Link>
                                {message && <p>{message}</p>}
                            </form>
                        </div>
                    </div>
                    <div className="col-2 g-0 p-0 ms-0 me-0 "></div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Login;
