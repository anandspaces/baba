import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import './styles/styles.css';

const Signup = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const uid = user.uid;
                setUser(user);
                console.log("uid", uid);
            } else {
                // User is signed out
                setUser(null);
                console.log("user is logged out")
            }
        });
    }, []);

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/dashboard");
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`${errorCode}: ${errorMessage}`);
            console.error(errorCode, errorMessage);
        }
    };

    if (user === null) {
        return (
            <main>
                <section>
                    <div className='container h-100'>
                        <div className='row h-100 justify-content-center align-items-center'>
                            <div className='col-md-6 '>
                                <div className="card">
                                    <div className="card-body">
                                        <h1> Sign Up </h1>
                                        <form className='form-group'>
                                            <div className='form-control'>
                                                <label htmlFor="username">
                                                    Username
                                                </label>
                                                <input
                                                    type="text"
                                                    label="Enter username"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    required
                                                    placeholder="Username"
                                                />
                                            </div>

                                            <div className='form-control'>
                                                <label htmlFor="email-address">
                                                    Email address
                                                </label>
                                                <input
                                                    type="email"
                                                    label="Email address"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    placeholder="Email address"
                                                />
                                            </div>

                                            <div className='form-control'>
                                                <label htmlFor="password">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    label="Create password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                    placeholder="Password"
                                                />
                                            </div>

                                            <button className='btn btn-success' type="submit" onClick={onSubmit}>
                                                Sign up
                                            </button>

                                        </form>

                                        <p>
                                            Already have an account?{' '}
                                            <NavLink to="/login">
                                                Login
                                            </NavLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    } else {
        navigate("/dashboard");
    }
};

export default Signup;
