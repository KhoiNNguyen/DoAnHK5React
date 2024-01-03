import React, { useEffect, useState } from 'react'
import './style.css'
import axiosClient from '../../components/axiosClient/axiosClient'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [loadingAPI, setLoadingAPI] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            navigate('/');
        }
    }, [])

    const handeLogin = async (event) => {
        //event.preventDefault();
        setLoadingAPI(true);
        try {
            const response = await axiosClient.post('/Users/login', { username, password });

            const { userRole } = response.data;
            // Lưu thông tin xác thực vào localStorage hoặc sessionStorage
            localStorage.setItem('token', response.data.token);
            
            localStorage.setItem('userRole', userRole);
            //console.log(userRole)
            if(userRole =="Admin"){
                navigate('/admin')
            }else if(userRole =='User'){
                navigate('/')
            }
            
        } catch (error) {
            console.error('Lỗi đăng nhập', error);
        }
        setLoadingAPI(false);
    }

    return (
        <div className='login-container col-12 col-sm-4'>
            <div className='title-login'>Log in</div>
            <div className='text-login'>Enter username</div>
            <input className='input-login' type='text' placeholder='Username...'
                value={username} onChange={(event) => setUsername(event.target.value)}
            />
            <div className='input-position'>
                <input className='input-login'
                    type={isShowPassword ? 'text' : 'password'}
                    placeholder='Password...'
                    value={password} onChange={(event) => setPassword(event.target.value)}
                />
                {/* <FontAwesomeIcon
                    className='icon-position'
                    icon={isShowPassword ? faEye : faEyeSlash}
                    onClick={() => setIsShowPassword(!isShowPassword)}
                ></FontAwesomeIcon> */}

            </div>
            <button
                className={`button-login ${username && password ? 'active' : ''}`}
                disabled={username && password ? false : true}
                onClick={() => handeLogin()}
            >
                {loadingAPI && <i class="fa-solid fa-sync fa-spin"></i>}
                &nbsp; Login
            </button>

            <div className='back-login'><i class="fa-solid fa-arrow-left"></i><span>  </span>Go back</div>
        </div>
    )
}

export default Login