import React from 'react'
import './App.css'



function MovieCard({movie}) {
  return (
    <div className="movie">
        <div>
            <p>{movie.Year}</p>
        </div>
        <div>
            <img src={movie.Poster !== "N/A" ? movie.Poster : "http://via.placeholder.com/400"}  alt="" />
        </div>
        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
  )
}

export default MovieCard