import React from "react"
import {useParams} from "react-router-dom"
import moviesData from "./moviesData"

function MoviesDetail() {
    const {id} = useParams();
    const thismovie = moviesData.find(movie => movie.id === id)
    
    return (
        <div >
            <h1>{thismovie.title}</h1>
            <p>{thismovie.description}</p>
            <img src={thismovie.PosterURL} width="80" height="80"/>
           <p>{thismovie.rating}</p>
        </div>
    )
}

export default MoviesDetail