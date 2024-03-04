import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem';

export default function People({getTrending,isloading}) {
  let [trendingpeople, setTrendingPeople] = useState([]);
  useEffect(() => {
    getTrending('person',setTrendingPeople);
},[])
  return <>
    {isloading==true?<div className="row justify-content-center align-items-center">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <div className="title bord position-relative  ">
                    <h2 className='h4 my-4'>Trending <br />  People <br /> To Watch Right Now</h2>
                    <p>Most watched Tv by days</p>
               </div>
            </div>
            {trendingpeople.filter((item)=>item.profile_path!==null).map((item,index) => <MediaItem key={index} item={item } />)}
        </div>: <div className='loadind d-flex justify-content-center align-items-center'>
                    <i className='fas fa-2xl fa-spinner fa-spin spin-load'></i>
                  </div>}
  </>
}
