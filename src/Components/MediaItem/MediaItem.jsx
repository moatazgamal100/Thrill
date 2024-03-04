import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function MediaItem({ item, }) {
   
    return <>
        
        <div className="col-md-2 item mb-2">
            <Link to={`/itemdetails/${item.id}/${item.media_type}/${item.title}`}>
            <div className="movie position-relative ">
                {item.poster_path?<img className='w-100' src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} alt="" />:<img className='w-100' src={'https://image.tmdb.org/t/p/w500/'+item.profile_path} alt="" />}
                
                <h2 className='h6 py-2'>{item.title}{item.name}</h2>
                {item.vote_average && <div className="vote">{item.vote_average?.toFixed(1)}</div>}
                
            </div>
        </Link>
        </div>
    </>
}
