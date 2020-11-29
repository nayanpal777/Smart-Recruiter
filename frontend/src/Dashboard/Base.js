import React, { useState } from 'react'
import Navigation from './Navigation'
import { admin_logout } from '../auth/helper'
import { Redirect } from 'react-router-dom'
import logo from '../images/logo.png';

const Base = ({
    children
}) => {

    const [value, setvalue] = useState({
        logoutmsg: false
    })

    const { logoutmsg } = value;

    const logout = () => {
        admin_logout()
            .then(data => {
                if (data.status === true) {
                    setvalue({
                        ...value,
                        logoutmsg: true
                    })
                }
            })
    }
    const performlogout = () => {
        return (
            logoutmsg && (
                <Redirect to="/Admin" />
            )
        )
    }

    return (
        <div>
            {performlogout()}
            <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
                <div className="scrollbar-inner">
                    <div className="sidenav-header align-items-center mb-7">
                        <span className="navbar-brand">
                            <img src={logo} alt="Svvv logo" style={{maxHeight: "98px"}}/>
                            <h1>Smart Recruiter</h1>
                        </span>
                    </div>
                    <hr />
                    <Navigation />
                </div>
            </nav>
            <div className="main-content" id="panel">
                <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
                                <div className="form-group mb-0">
                                    <div className="input-group input-group-alternative input-group-merge">
                                        <input className="form-control" placeholder="Search" type="text" />
                                    </div>
                                </div>
                                <button type="button" className="close" data-action="search-close" data-target="#navbar-search-main"
                                    aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </form>
                            <ul className="navbar-nav align-items-center  ml-md-auto ">
                                <li className="nav-item d-xl-none">
                                    <div className="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin"
                                        data-target="#sidenav-main">
                                        <div className="sidenav-toggler-inner">
                                            <i className="sidenav-toggler-line"></i>
                                            <i className="sidenav-toggler-line"></i>
                                            <i className="sidenav-toggler-line"></i>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul className="navbar-nav align-items-center ml-auto ml-md-0">
                                <li className="nav-item">
                                    <div className="media align-items-center">
                                        <div className="media-body ml-2 d-none d-lg-block">
                                            <span className="mb-0 text-sm text-white font-weight-bold">Welcome Admin</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="media align-items-center">
                                        <div className="media-body ml-2 d-none d-lg-block">
                                            <button className="font-weight-bold" onClick={logout}>Logout</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Base;
