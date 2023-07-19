import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BioData } from '../App';


const Header = ({parenToChild}) => {

    const contextName = useContext(BioData)


    const navigate = useNavigate();
    const loginPage = () => {
        navigate('/')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg fixed-top">
                <div className="container-fluid">
                    {/* <!-- off-canvas-button --> */}
                    <button className="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
                    </button>
                    {/* <!-- off-canvas-button --> */}
                    <a className="navbar-brand text-uppercase fw-bold me-auto" href="#">{parenToChild}</a>
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

        </>

    )
}

export default Header