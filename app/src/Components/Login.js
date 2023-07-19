import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import img from './Image/a.webp';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('');

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleApi = () => {
        setLoading(true);

        axios.post('http://officetestapi.sympaan.com/api/User/login', { Username: email, Password: password }).then(result => {
            console.log(result)
            // debugger
            localStorage.setItem("token", result.data[0].token);
            localStorage.setItem("name", result.data[0].name);
            localStorage.setItem("role", result.data[0].role);
            localStorage.setItem("roleType", result.data[0].roleType);
            navigate('/dashboard');
        }).catch(error => {
            console.log(error)
            setLoading(false);
            setErrMsg('Login details did not match.Please try again.')
        })
    }


    return (
        <div>

            {loading ? (
                <div className='loader-container'>
                    <div className='spinner'></div>
                </div>) : (
                <section>

                    <div className='imgBx'>
                        <img src={img} alt='img' className='opacity' />
                    </div>
                    <div className='contentBx'>
                        <div className='formBx'>
                            <h2>Login</h2>
                            <p className='remember color'>{errMsg}</p>
                            <form>
                                <div className='inputBx'>
                                    <span>Username</span>
                                    <input value={email} id='email' name='email' onChange={handleEmail} type='text' />
                                </div>
                                <div className='inputBx'>
                                    <span>Password</span>
                                    <input value={password} id='password' onChange={handlePassword} type='password' />
                                </div>
                                <div className='remember'>
                                    <label><input type='checkbox' name='' /> Remember me</label>
                                </div>
                                <div className='inputBx'>
                                    <button disabled={!(email && password)} onClick={handleApi}>Sign in</button>
                                </div>
                            </form>
                            <div className='inputBx'>
                                <p>Don't have an account? <a href='#'>Sign up</a></p>
                            </div>
                            <h5>Login with social media</h5>
                            <ul className='sci'>
                                <li><span className='img'><i className="bi bi-facebook"></i></span></li>
                                <li><span className='img'><i className="bi bi-twitter"></i></span></li>
                                <li><span className='img'><i className="bi bi-instagram"></i></span></li>
                            </ul>
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Login

