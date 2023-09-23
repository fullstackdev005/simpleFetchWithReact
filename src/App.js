import {useState, useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";



// API - KEY -----> 959e4d5c
const API_KEY = '959e4d5c'
const movieUrl =`http://www.omdbapi.com/?apikey=${API_KEY}`

function App() {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${movieUrl}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
        
        return data.Search;  
    }


    useEffect(() => {
        // calling the api as soon the page loads
       searchMovies("marvel");
    

    }, [])

    return (
            <div className="app">
                <h1>Movie Island</h1>
                <div className="search">
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for movies"
            />
                    
                <img 
                    src={SearchIcon} 
                    alt="/" 
                    onClick={() => searchMovies(searchTerm)}
                />
                
            </div>

                {movies?.length > 0 ? (
                    <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                    </div>
                ) : (
                    <div className="empty">
                    <h2>No movies found</h2>
                    </div>
                )}
                
            </div>
    );
    }

export default App;