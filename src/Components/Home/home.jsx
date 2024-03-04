import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem';

export default function Home({getTrending,isloading}) {
    let [trendingMovies, setTrendingMovies] = useState([]);
    let [trendingTv, setTrendingTv] = useState([]);
    let [trendingPeople, setTrendingPeople] = useState([]);
    useEffect(() => {
        getTrending('movie',setTrendingMovies);
        getTrending('tv',setTrendingTv);
        getTrending('person',setTrendingPeople);
    },[])
    return <>
        {isloading===true?<div>
        <div className="row">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <div className="title bord position-relative  ">
                    <h2 className='h4 my-4'>Trending <br />  Moivies <br /> To Watch Right Now</h2>
                    <p>Most watched movies by days</p>
               </div>
            </div>
            {trendingMovies.slice(10).map((item, index) => <MediaItem key={index} item={item} getTrending={ getTrending} />)}
        </div>
        <hr className='w-75 mx-auto' />
        <div className="row">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <div className="title bord position-relative  ">
                    <h2 className='h4 my-4'>Trending <br />  Tv <br /> To Watch Right Now</h2>
                    <p>Most watched Tv by days</p>
               </div>
            </div>
            {trendingTv.slice(10).map((item,index) => <MediaItem key={index} item={item } />)}
        </div>
        <hr className='w-75 mx-auto' />
        <div className="row">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <div className="title bord position-relative  ">
                    <h2 className='h4 my-4'>Trending <br />  People <br /> To Watch Right Now</h2>
                    <p>Most watched Tv by days</p>
               </div>
            </div>
            {trendingPeople.filter((item)=>item.profile_path!==null).slice(10).map((item,index) => <MediaItem key={index} item={item } />)}
        </div>
        </div> : <div className='loadind d-flex justify-content-center align-items-center'>
                <i className='fas fa-2xl fa-spinner fa-spin spin-load'></i>
        </div>}
    </>
}
