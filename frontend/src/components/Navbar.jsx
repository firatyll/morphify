import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container">
                <Link class="navbar-brand" to={'/'}>Morphify</Link>
                <a href="https://github.com/firatyll/morphify" target="_blank" rel="noopener noreferrer" className="nav-link">
                    <FaGithub size={24} />
                </a>
            </div>
        </nav>
    )
}

export default Navbar