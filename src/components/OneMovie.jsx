import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import requests from '../Requests'

import "../index.css"

const OneMovie = () => {
    const [movies, setMovies] = useState([])
    const [trailer, setTrailer] = useState()
    
    const {id} = useParams()
    console.log();

    useEffect(() => {
        try {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0163e657d05a344b4e056b1be90f4305&language=en-US`)
                .then(res => res.json())
                .then(movies => setMovies(movies))
            fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=0163e657d05a344b4e056b1be90f4305&language=en-US`)
                .then(res => res.json())
                .then(trailer => setTrailer(trailer))
        } catch (error) {
            console.log(error)
        }
    },[])

    const movie = id
    // const movie = movies[Math.floor(Math.random() * movies.length)]

    // try {
    //     axios()
    // } catch (error) {
    // }

    // useEffect (() => {
    //     axios.get(requests.requestPopular).then((response) => {
    //         setMovies(response.data.results)
    //     })
    // },[])

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num ) + '...'
        }else {
            return str
        }
      }

  return (
    <div className='w-full h-[550px] text-white'>
    <div className='w-full h-full'>
      <div className='absolute w-full h-[550px] bg-gradient-to-r from-black '></div>
      <img className='w-full h-full object-cover'
       src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`} 
       alt={movies?.title} 
       />
       <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movies?.title}</h1>
         <div className='my-4'>
         <a href='https://web.telegram.org/k/#@saureikahttps://gifer.com/ru/gifs/%D1%84%D0%B5%D0%B9%D0%BB'>

         </a>
        </div>
        <p className='text-gray-400 text-sm' >
          Released: {movies?.release_date}
          </p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
          {truncateString(movies?.overview, 150)}
          </p>
      </div>
      {trailer ? 
      <div className='flex justify-center items-center'>
        <iframe  width="549" height="280" 
        src={`https://www.youtube.com/embed/${trailer.results[0].key}` }
        title="🔥 Build NETFLIX With React JS - Tailwind CSS - FIREBASE - Front-End Web Developer Project" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe> 
        </div>
        : ""}
   </div>

  </div>
  )
}

export default OneMovie