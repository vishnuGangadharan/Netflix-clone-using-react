import React, { useEffect, useState } from 'react'
import './Banner.css'
import {API_KEI , imageURL} from '../../constants/Constants'
import axios from '../../Axios'
function Banner() {

const [movie,setMovie] = useState({})

  useEffect(() => {
   axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEI}&language=en-US`).then((res)=>{

    setMovie(res.data.results[0])  
      console.log(res.data.results[0]);

   })
  }, [])
  

  return (
    <>

    <div className='banner' style={{backgroundImage: `URL(${movie ? imageURL+movie.backdrop_path: ''})` }}>
        <div className='content'>
            <h1 className='title'>{movie? movie.title : 'movie name not found'}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='discription'>{ movie? movie.overview : 'overview not found'}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
    
    </>
  )
}

export default Banner


