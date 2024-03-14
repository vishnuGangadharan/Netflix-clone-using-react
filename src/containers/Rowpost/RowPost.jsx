import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../Axios'
import {API_KEI ,baseURL,imageURL} from '../../constants/Constants'
import YouTube from 'react-youtube'

function RowPost(props) {

  const opts = {
    height: '390px',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const [movies,setMovies] = useState([])
  const [movieId,setMovieId] = useState('') 

  useEffect(()=>{
    axios.get(props.url).then((res)=>{
      setMovies(res.data.results)      
    })
  },[])

  const videoplayer=(id)=>{
   axios.get(`/movie/${id}/videos?api_key=${API_KEI}&language=en-US`).then((res)=>{
      if(res.data.results.length !== 0){
        setMovieId(res.data.results[0])
      }else{
        console.log('trailer not found');
      }
   })
    
  }

  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className='posters'>
            {
              movies.map((obj,index)=>
            <img onClick={()=>{videoplayer(obj.id)}} className={props.isSmall ? 'smallPoster' : 'poster'} key={index} src={`${imageURL+obj.backdrop_path}` } alt="Poster" />
 
              )
            }
            
        </div>
          { movieId &&  <YouTube opts={opts} videoId={movieId.key}/> }


    </div>
  )
}

export default RowPost
