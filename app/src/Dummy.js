

import { useRef, useState, useEffect } from 'react';
// import axios from 'axios';
import './Login.css';


const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [email, password])


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);
        setEmail('');
        setPassword('');
        setSuccess(true)
    }
    // const handleApi = () => {
    //     // console.log({ email, password })
    //     axios.post('https://reqres.in/api/login', { email: email, password: password }).then(result => {

    //         console.log(result.data)

    //     }).catch(error => {
    //         console.log(error)
    //     })

    // }

    return (
        <div className="App">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Email:</label>
                <input value={email} onChange={handleEmail} type='text' id='username' ref={userRef} autoComplete="off" required /> <br /><br />

                <label htmlFor='password'>Password: </label>
                <input value={password} onChange={handlePassword} type='password' id='password' required /><br /><br />
                <button>Login</button>
                {/* onClick={handleApi} */}
            </form>
        </div>
    );
}

export default Login


// webcamera
import React, { useState, useRef } from "react";
import Webcam from "react-webcam";


const AllCameras = () => {

    const [devices, setDevices] = useState([])

    const handleDevices = React.useCallback((mediaDevices) =>
        setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
        [setDevices]
    );

    React.useEffect(() => {
        navigator.mediaDevices.enumerateDevices().then(handleDevices)
    }, [handleDevices])

    return (
        <>

            {devices.map((device, key) => (
                <div key={key}>
                    <Webcam
                        audio={false}
                        videoConstraints={{ deviceId: device.deviceId }}
                    />
                    {device.label || `Device ${key + 1}`}
                </div>
            ))}
        </>
    )
}


// export default AllCameras;

<nav className="navbar navbar-expand-lg navbar-dark bg fixed-top">
    <div className="container-fluid">
        {/* <!-- off-canvas-button --> */}
        <button className="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
        </button>
        {/* <!-- off-canvas-button --> */}
        <a className="navbar-brand text-uppercase fw-bold me-auto" href="#">Dashboard</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="d-flex ms-auto">
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="bi bi-person-fill"></i>
                        {/* {user.name} */}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="#"><i className="bi bi-person-bounding-box"></i> {contextName}</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-gear"></i> Account Info</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        {/* onClick={logout} */}
                        <li><a className="dropdown-item" href="#" onClick={loginPage}><i className="bi bi-arrow-right-square"></i> Log Out</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>