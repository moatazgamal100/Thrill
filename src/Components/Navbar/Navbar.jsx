import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ userdate,logout }) {
    return <>
        <nav className='d-flex align-items-center p-3'>
            <div className=' container-fluid'>
                <div className="row align-items-center">
                    <div className="col-md-6 d-flex align-items-center">
                        <h1 className='m-0 me-2'>Thrill</h1>
                        {userdate?<ul className='m-0 list-unstyled d-flex align-items-center h-100 '>
                            <li className='px-2'><Link to=''>Home</Link></li>
                            <li className='px-2'><Link to='movies'>Movies</Link></li>
                            <li className='px-2'><Link to='tv'>Tv show</Link></li>
                            <li className='px-2'><Link to='people'>People</Link></li>
                            <li className='px-2'><Link to='about'>About</Link></li>
                        </ul>:''}
                    </div>
                    <div className="col-md-4 offset-md-2 d-flex me-0 align-items-center justify-content-end ">
                        <div className="social-media ">
                            <i className='fab mx-2 fa-facebook pointer-event'></i>
                            <i className='fab mx-2 fa-instagram'></i>
                            <i className='fab mx-2 fa-twitter'></i>
                            <i className='fab mx-2 fa-spotify'></i>
                            <i className='fab mx-2 fa-youtube'></i>
                        </div> 
                        <ul className='m-0 list-unstyled d-flex align-items-center h-100'>

                            {userdate ? <>
                                <li className='px-2 cursor-pointer' onClick={logout}><span>LogOut</span></li>
                                <li className='px-2'><Link to='profile'>Profile</Link></li></> :
                                <><li className='px-2'><Link to='login'>Login</Link></li>
                                 <li className='px-2'><Link to='register'>Register</Link ></li>
                            </>}
                            
                            
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
            </>
}
