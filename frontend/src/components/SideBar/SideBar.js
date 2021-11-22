import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'

const SideBar = () => {
    return (
        <header class="sidebar-header" role="banner">
            <h1 class="logo">
                <a>Hello <span>ADMIN</span></a>
            </h1>
            <div class="nav-wrap">
                <nav class="main-nav" role="navigation">
                    <ul class="unstyled list-hover-slide">
                        <li><Link to="/admin/all-students"><a>STUDENTS</a></Link></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default SideBar
