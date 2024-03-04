import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem';
export default function Movies({ getTrending,isloading }) {
  let [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    getTrending('movie',setTrendingMovies);
},[])
  return <>
    {isloading==true? <div className="row justify-content-center align-items-center">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <div className="title bord position-relative  ">
                    <h2 className='h4 my-4'>Trending <br />  Moivies <br /> To Watch Right Now</h2>
                    <p>Most watched movies by days</p>
               </div>
            </div>
            {trendingMovies.filter((item)=>item.title!=='Argylle').map((item,index) => <MediaItem key={index} item={item } />)}
           </div>: <div className='loadind d-flex justify-content-center align-items-center'>
                    <i className='fas fa-2xl fa-spinner fa-spin spin-load'></i>
                  </div>}
    
  </>
}
