'use client';
import Link from 'next/link';
import React from 'react'
import './styles/navbar.css'
import './FormInput'
import FormInput from './FormInput';
const Navbar = () => {
    return (
        <header className='header container'>
            <nav className='header__nav'>
                <Link className='header__link logo' href='/'>SHOESHAVEN</Link>
                <div className="header__form">
                    <FormInput />
                </div>

                <ul className='header__menu'>

                    <li className='header__list'>
                        <Link href='/cart' className='header__cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>

                        </Link>
                    </li>
                    <li className='header__list header__login'>
                        <Link className='header__register btn' href='/register'>Register</Link>
                    </li>
                    <li className='header__list header__login'>
                        <Link className='header__login btn' href='/login'>Login</Link>
                    </li>
                    <li className='header__list header__bars'>
                        <button className="header__bars" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>

                        </button>
                    </li>
                </ul>


            </nav>
        </header>
    )
}

export default Navbar