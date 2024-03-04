import React, { useEffect, useState } from 'react'
import Layout from './Components/Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/home'
import About from './Components/About/about'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import People from './Components/People/People'
import Movies from './Components/Movies/Movies'
import Tv from './Components/Tv/Tv'
import Notfound from './Components/Notfound/Notfound'
import Profile from './Components/Profile/Profile'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import ItemDetails from './Components/ItemDetails/ItemDetails'
import axios from 'axios'
import Watch from './Components/Watch/Watch'
export default function App() {
    let [userdate, setUserData] = useState(null);
    let [isloading, setIsloading] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setData();
        }
    }, [])
   
    function setData() {
        let user = JSON.parse(localStorage.getItem('user'));
        setUserData(user);
    }
    async function getTrending(mediatype,callback) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediatype}/week?api_key=f736e6b17ecc2360601b70617b5e5745`);
        callback(data.results);
        setIsloading(true);
    }
    let routers = createBrowserRouter([
        {
            path: '/', element: <Layout userdate={userdate} setUserData={ setUserData} />, children: [
                {path:"/register",element:<Register/>},
                {path:"/about",element:<ProtectedRoute><About/></ProtectedRoute>},
                { index:true, element: <ProtectedRoute><Home isloading={isloading} getTrending={ getTrending} /></ProtectedRoute>},
                {path: "/login", element: <Login setData={setData} />},
                {path:"/profile",element:<ProtectedRoute><Profile/></ProtectedRoute>},
                {path:"/watch/:id/:mediatype/:src",element:<ProtectedRoute><Watch/></ProtectedRoute>},
                {path:"/people",element:<ProtectedRoute><People isloading={isloading} getTrending={ getTrending}/></ProtectedRoute>},
                {path:"/movies",element:<ProtectedRoute><Movies isloading={isloading} getTrending={ getTrending} /></ProtectedRoute>},
                { path: "/itemdetails/:id/:mediatype/:title", element: <ProtectedRoute><ItemDetails /></ProtectedRoute>},
                {path:"/tv",element:<ProtectedRoute><Tv isloading={isloading} getTrending={ getTrending}/></ProtectedRoute>},
                { path: "*", element: <Notfound /> }
                
            ]
        }
    ])
    return <RouterProvider router={routers}/>
}
