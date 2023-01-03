import React from 'react'
import './RowPost.css'
import { useState,useEffect } from 'react'
import axios from '../axios'
import {imgUrl,API_KEY} from '../Constants/Constants'
import YouTube from 'react-youtube'

const RowPost = (props) => {
  const [movies, setmovies] = useState([])
  const [urlid,setUrlid] = useState('')

  useEffect(() => {
    axios.get(props.url).then((response)=>{
      // console.log(response.data);
      setmovies(response.data.results)
    })
  },)
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie=(id)=>{
      console.log(id);
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data);
        if(response.data.results.length!==0){
          setUrlid(response.data.results[0])

        }
      })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((obj,index)=>
               <img onClick={()=>handleMovie(obj.id)} key={index} className={props.isSmall ? 'smallPoster': 'poster'} src={`${imgUrl+obj.poster_path}`} alt=''/>
            )
           
            }
        </div>
        { urlid && <YouTube videoId={urlid.key} opts={opts} />}
    </div>
  )
}

export default RowPost