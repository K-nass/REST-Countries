import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import style from './Navbar.module.css'


export default function Navbar() {
    return (
        <header className = {`${style.header} pt-4 pb-4 shadow`}>
            <div className="container">
                <div className='d-flex justify-content-between align-content-center'>
                    <div>
                        <h1 className='h6 fw-bold text-nowrap'>Where in the world?</h1>
                    </div>
                    <div>
                        <button className='btn p-0 text-nowrap mb-1'>
                            <FontAwesomeIcon icon={faMoon} className='me-1' />
                            Dark Mode
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
