import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
export default function ItemDetails({ movies }) {
    let navigate = useNavigate();
    let { id, mediatype,title } = useParams();
    let [itemdetails, setItemdetails] = useState({});
    let [isloading, setIsloading] = useState(false);
    async function getitemdetails(id, type) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=f736e6b17ecc2360601b70617b5e5745`);
        setItemdetails(data);
        setIsloading(true)
    }
    let [moviesarr, setmovies] = useState([
        {
            name: 'Wonka',
            src: 'wnSIn-pPBdE'
        },
        {
            name: 'Ferrari',
            src: 'MpIf8LCZ91g'
        },
        {
            name: 'Aquaman and the Lost Kingdom',
            src: '-_f8Z1xtp0Y'
        },
        {
            name: 'The Beekeeper',
            src: 'cB6Fkp9Vffc'
        },
        {
            name: 'Wish',
            src: 'KFHe5MkXu60'
        },
        {
            name: 'The Marvels',
            src: '2xX9NUAao8w'
        },
        {
            name: 'Migration',
            src: 'vB9TFVmNRR8'
        },
        {
            name: 'Badland Hunters',
            src: 'QmVfKYibx2k'
        },
        {
            name: 'Oppenheimer',
            src: 'wtLwFfROPco'
        },
        {
            name: 'Napoleon',
            src: 'Ua6t-BdEFL0'
        },
        {
            name: 'Poor Things',
            src: 'Xe66vklDpW8'
        },
        {
            name: 'Shaun the Sheep Movie',
            src: 'F7kMGUDDhTQ'
        },
        {
            name: 'Lift',
            src: 'FgMVkIOmOkE'
        },
        {
            name: 'Barbie',
            src: 'fSNKhkY4Fvk'
        },
        {
            name: 'Night Swim',
            src: '7N3B_BlI7zw'
        },
        {
            name: 'Killers of the Flower Moon',
            src: '4rbgiUKrWuI'
        },
        {
            name: 'Society of the Snow',
            src: 'KJG6KMm3XRs'
        },
        {
            name: 'Anatomy of a Fall',
            src: '3Za4JvRitsg'
        },
        {
            name: 'Role Play',
            src: 'pAn0mL3UNsE'
        },
        {
            name: 'The Holdovers',
            src: 'FHgMuL02zg4'
        },
        {
            name: 'Shaun the Sheep: The Flight Before Christmas',
            src: 'p_CP2lyTIts'
        },
        {
            name: "Shaun the Sheep: The Farmer's Llamas",
            src: 'FHgMuL02zg4'
        },
    ])
    let movie = moviesarr.filter((movie) => movie.name == title)
    let srcc;
    if (movie.length > 0) {
         srcc=movie[0].src;
    }
    useEffect(() => {
        getitemdetails(id, mediatype);
    },[])
    return <>
        {isloading===true?<div className="row details">
                
                <div className="col-md-6  offset-md-3 cern justify-content-center align-items-center d-flex">
                    .
                    <div className="container justify-content-center align-items-center d-flex">
                        <div className="row justify-content-center align-items-center mt-3">
                            <div className="col-md-6">
                                {itemdetails.poster_path && <img className='w-100 rounded-end-pill' src={'https://image.tmdb.org/t/p/w500/'+itemdetails.poster_path} alt="" />}
                                {itemdetails.profile_path && <img className='w-100 rounded-end-pill' src={'https://image.tmdb.org/t/p/w500/'+itemdetails.profile_path} alt="" />}
                            </div>
                            <div className="col-md-6 d-flex flex-column ">
                                {itemdetails.original_title && <h3 className='text-danger fa-bold'>{itemdetails.original_title}</h3>}
                                {itemdetails.name && <h3 className='text-danger fa-bold'>{itemdetails.name}</h3>}
                                <p className='lead small'>{itemdetails.overview}</p>
                                {itemdetails.biography && <p className='lead small'>{itemdetails.biography.split(".")[0]}</p>}
                                {itemdetails.release_date&&<h6 className=''> <span className=' fw-bold'>The Release Date :</span> {itemdetails.release_date}</h6>}
                                {itemdetails.first_air_date&&<h6 className=''> <span className=' fw-bold'>The Release Date :</span> {itemdetails.first_air_date}</h6>}
                                {itemdetails.vote_average && <h6 className=' '><span className=' fw-bold'>Vote Average :</span> {itemdetails.vote_average.toFixed(1)} </h6> }
                            </div>
                            {mediatype=='movie'?<Link to={`/watch/${id}/${mediatype}/${srcc}`} className='w-75 btn btn-danger'>Watch</Link>:''}
                        </div>
                    </div>
                    </div>
                </div>
     :<div className='loadind d-flex justify-content-center align-items-center'>
     <i className='fas fa-2xl fa-spinner fa-spin spin-load'></i>
   </div>}
           </>
}