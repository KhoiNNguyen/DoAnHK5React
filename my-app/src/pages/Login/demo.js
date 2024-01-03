
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import './style.css'
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../components/axiosClient/axiosClient';

function Demo() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axiosClient.post('/Users/login', { username, password });
            const { token, userRole } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('userRole', userRole);

            if (userRole === 'Admin') {
                navigate('/admin');
            } else if (userRole === 'User') {
                navigate('/');
            } else if (userRole == null) {
                navigate('/login');
            }
        } catch (error) {
            console.error('Error during login', error);
            // Handle error...
        }
    };
    return (
        <>
            <div className='title-login'>
                Login
            </div>
            <div className='div-login'>
                <div className="img-login">
                    <img src="https://hoanghamobile.com/Content/web/img/login-bg.png" alt=""></img>
                </div>
                <div className="content-login">
                    <div className="social-login">
                        <button className="btn-loginfb"> Đăng nhập bằng FaceBook</button>
                        <button className="btn-logingg"><FontAwesomeIcon icon={FaGoogle} /> Đăng Nhập bằng Google</button>
                    </div>
                    <hr />
                    <div className="form-login">
                        <form >
                            <div class="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-check mt-2">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <div class="mt-3">
                                <button onClick={handleLogin} className="btn-signIn">Sign In</button>
                                <button type="submit" className="btn-register" >Register</button>
                            </div>
                            <div className="forget-password mt-3">
                                <a href="#" style={{ fontSize: "1rem" }}>Forget Password</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Demo