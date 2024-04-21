import React, {useState,useEffect} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
 
const Login = () => {
    const [user, setUser] = useState(null);
    useEffect(()=>{
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
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/dashboard");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode,errorMessage)
            console.log(errorCode, errorMessage)
        });
       
    }
    if(user===null) {
        return(
            <>
                <main >        
                    <section>
                    <div className='container h-100'>
                        <div className='row h-100 justify-content-center align-items-center'>                 
                        <div className='col-md-6 '> 
                        <div className="card">
                        <div className="card-body">
                                                                            
                            <h1> Login </h1>                       
                                                           
                            <form className='form-group'>                                              
                                <div className='form-control'>
                                    <label htmlFor="email-address">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"                                    
                                        required                                                                                
                                        placeholder="Email address"
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </div>
    
                                <div className='form-control'>
                                    <label htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"                                    
                                        required                                                                                
                                        placeholder="Password"
                                        onChange={(e)=>setPassword(e.target.value)}
                                    />
                                </div>
                                                    
                                <div>
                                    <button className='btn btn-success' onClick={onLogin}>      
                                        Login                                                                  
                                    </button>
                                </div>                               
                            </form>
                           
                            <p className="text-sm text-black">
                                No account yet? {' '}
                                <NavLink to="/">
                                    Sign up
                                </NavLink>
                            </p>
                            </div>
                            </div>
                            </div>
                            </div>                       
                        </div>
                    </section>
                </main>
            </>
        )
    } else {
        navigate("/dashboard");
    }
}
 
export default Login