import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../service/allAPI';

function Auth({ register }) {
    const isRegisterForm = register ? true : false;
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleRegister = async (e) => {
        e.preventDefault();
        const { username, email, password } = userData;
        
        if (!username || !email || !password) {
            toast.info("Please fill missing fields");
        } else {
            try {
                const result = await registerAPI(userData);
                if (result.status === 200) {
                    toast.success(`${result.data.username} has successfully registered`);
                    navigate('/login');
                    setUserData({ username: "", email: "", password: "" })
                } else {
                    toast.warning(result.data);
                }
            } catch (err) {
                console.log(err);
                
            }
        }
    }

    const handleLogin =async(e)=>{
        e.preventDefault()
        const{email,password}=userData
         if ( !email || !password) {
            toast.info("Please fill missing fields");
        } else {
            try {
                //proceed to api call
                const result = await loginAPI({email,password});
                if (result.status === 200) {
                    sessionStorage.setItem("username",result.data.existingUser.username)
                    sessionStorage.setItem("token",result.data.token)
                    navigate('/');
                    setUserData({ email: "", password: "" })
                } else {
                    toast.warning(result.response.data);
                }
            } catch (err) {
                console.log(err);
                
            }
        }
    }

    return (
        <>
            <div style={{ marginTop: "50px" }} className="d-flex justify-content-center align-items-center">
                <div className="container w-75">
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bolder' }}>
                        <i className='fa-solid fa-arrow-left'></i> Back to home
                    </Link>
                    <div className="card shadow p-3 bg-info">
                        <div className="row align-items-center flex-center">
                            <div className="col-lg-6">
                                <img src="https://w7.pngwing.com/pngs/344/876/png-transparent-user-profile-computer-icons-login-authentication-secure-miscellaneous-text-logo-thumbnail.png" alt="" width={"100%"} />
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center flex-column">
                                    <h1 className='fw-bolder text-light mt-2'><i className='fa-solid fa-list-check me-2'></i>Project fair</h1>
                                    <h5 className='fw-bolder text-warning'>
                                        {isRegisterForm ? 'Sign up for your account' : 'Sign in to your account'}
                                    </h5>
                                    <Form className="mt-4 text-dark" onSubmit={handleRegister}>
                                        {isRegisterForm && (
                                            <Form.Group className="mb-3" controlId="formUsername">
                                                <Form.Control
                                                    type="text"
                                                    size="lg"
                                                    placeholder="Enter your username"
                                                    onChange={e => setUserData({ ...userData, username: e.target.value })}
                                                    value={userData.username}
                                                />
                                            </Form.Group>
                                        )}
                                        <Form.Group className="mb-3" controlId="formEmail">
                                            <Form.Control
                                                type="email"
                                                size="lg"
                                                placeholder="Enter your email"
                                                onChange={e => setUserData({ ...userData, email: e.target.value })}
                                                value={userData.email}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formPassword">
                                            <Form.Control
                                                type="password"
                                                size="lg"
                                                placeholder="Enter your password"
                                                onChange={e => setUserData({ ...userData, password: e.target.value })}
                                                value={userData.password}
                                            />
                                                   </Form.Group>
                                        <div className='mt-3'>
                                            <button type="submit" onClick={handleLogin} className='btn btn-warning'>
                                                {isRegisterForm ? 'Register' : 'Login'}
                                            </button>
                                            <p className='text-light fw-bolder mt-2'>
                                                {isRegisterForm ? (
                                                    <>Already have an account? <Link to={'/login'} style={{ textDecoration: "none", color: "green" }}>Login</Link></>
                                                ) : (
                                                    <>New user? <Link to={'/register'} style={{ textDecoration: "none", color: "red" }}>Register</Link></>
                                                )}
                                            </p>
                                        </div>
                                    </Form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={2000} theme="colored" position="top-center"/>
        </>
    );
}

export default Auth;
