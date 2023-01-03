import React, { useState } from 'react'
import { useEffect } from 'react'
import './Banner.css'
import axios from '../axios'
import {API_KEY,imgUrl} from '../Constants/Constants'

const Banner = () => {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    //  console.log(response.data);
     const min = 1;
        const max = 20;
        const random = Math.floor(min + (Math.random() * (max - min)));
        console.log(random);
     setMovie(response.data.results[random]);
    })
    
  }, [])
  
  return (
    <div
    style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title:""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button> 
                <button className='button'>My list</button> 
            </div>
            <h1 className='banner_desc'>{movie ? movie.overview : ""}</h1>
        </div>
    <div className="fade"></div>
    </div>
  )
}

export default Banner