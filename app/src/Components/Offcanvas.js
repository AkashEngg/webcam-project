import React from 'react';
import { useNavigate } from 'react-router-dom';


const Offcanvas = () => {

    const navigate = useNavigate();

    const loginPage = () => {
        navigate('/')
    }

    return (
        <>
            <div className="offcanvas offcanvas-start bg1 text-muted sidebar-nav" tabIndex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">

                <div className="offcanvas-body">
                    {
                        localStorage.getItem("role1") ?
                            <>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active color-nav" aria-current="page" href="/dashboard"><i className="bi bi-grid"></i> Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active color-nav" aria-current="page" href="/dashboard/form/event"><i class="bi bi-calendar-event"></i> Guest Event</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link color-nav" href="/dashboard/form"><i class="bi bi-person-plus"></i> Guest Form</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link color-nav" href="/dashboard/camera"><i className="bi bi-webcam"></i> Upload Image</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link color-nav" href="" onClick={loginPage}><i className="bi bi-box-arrow-right"></i> Log out</a>
                                    </li>
                                </ul>
                            </>
                            :
                            <>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active color-nav" aria-current="page" href="/dashboard"><i className="bi bi-grid"></i> Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link color-nav" href="/dashboard/camera"><i className="bi bi-webcam"></i> Upload Image</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link color-nav" href="" onClick={loginPage}><i className="bi bi-box-arrow-right"></i> Log out</a>
                                    </li>
                                </ul>
                            </>
                    }

                </div>
            </div>

        </>

    )
}

export default Offcanvas