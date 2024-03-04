import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Layout({ userdate, setUserData }) {
    let navigate = useNavigate();
    function logout() {
        localStorage.removeItem('user');
        setUserData(null);
        navigate('/login');

    }
    return <>
        <Navbar logout={logout} userdate={userdate} />
        <div className=" container-fluid position-relative mt-4">
            <Outlet></Outlet>
        </div>
     
    </>
}
