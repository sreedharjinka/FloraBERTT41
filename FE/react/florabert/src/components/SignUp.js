import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new user object with email and password
        const newUser = {
            email: email,
            password: password
        };
        console.log(JSON.stringify(newUser));
        // Send the new user details to the server at port 5000
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the server
                console.log(data);
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.error(error);
            });
    };

    return (
        <React.Fragment>
            <div className="container-fluid g-0 p-0 ms-0 me-0">
                <div className="row m-0 g-0 p-0">
                    <div className="col-2 g-0 p-0 ms-0 me-0 " />
                    <div className="col-8 g-0 p-0 ms-0 me-0 mt-3 mb-auto p-5">
                        <div className="container position-absolute top-50 start-50 translate-middle" id="main" style={{ maxWidth: '40%' }}>
                            <form className="mx-5 my-5 px-5 py-5 w-80" style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
                                <h1>Sign Up</h1>
                                <div className="form-floating my-2">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control mb-2" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <button className="btn btn-primary w-100 py-2 mt-2 mb-3" type="submit">Sign Up</button>
                                Already A User ? <Link to="/login">LogIn</Link>
                            </form>
                        </div>
                    </div>
                    <div className="col-2 g-0 p-0 ms-0 me-0 ">
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SignUp;