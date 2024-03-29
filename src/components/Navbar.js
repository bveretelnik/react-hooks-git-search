import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div className="navbar-brand">
                Github Пошук
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink exact to ='/' className="nav-link">Головна</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to ='/about' className="nav-link">Інформація</NavLink>
                </li>
            </ul>

        </nav>
    )
}
