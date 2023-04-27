import React, { useState } from "react";
import { useEffect} from "react";
import './App.css';
import SearchIcon from "./search.svg";
import Movie from "./Movie";

// 511ca5e7
const Api_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=511ca5e7";

const movie = {
    "Title": "The Batman",
    "Year": "2022",
    "Rated": "PG-13",
    "Released": "04 Mar 2022",
    "Runtime": "176 min",
    "Genre": "Action, Crime, Drama",
    "Director": "Matt Reeves",
    "Writer": "Matt Reeves, Peter Craig, Bob Kane",
    "Actors": "Robert Pattinson, Zoë Kravitz, Jeffrey Wright",
    "Plot": "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    "Language": "English, Spanish, Latin, Italian",
    "Country": "United States",
    "Awards": "Nominated for 3 Oscars. 33 wins & 162 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.8/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "85%"
        },
        {
            "Source": "Metacritic",
            "Value": "72/100"
        }
    ],
    "Metascore": "72",
    "imdbRating": "7.8",
    "imdbVotes": "692,486",
    "imdbID": "tt1877830",
    "Type": "movie",
    "DVD": "19 Apr 2022",
    "BoxOffice": "$369,345,583",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
};

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');
    const searchMovies = async (query) => {
        const response = await fetch(`${Api_URL}&s=${query}`)
        const moviesData = await response.json();
        if (moviesData.Search) {
            setMovies(moviesData.Search);
        }
        // console.log(moviesData.Search)
    }
    useEffect(() => {
        searchMovies('The Batman');
    }, []);
    return (
        <div className="app">
            <h1>ScreenSavvy</h1>
            <div className="search">
                <input
                    placeholder="Search for Movies"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => { searchMovies(searchTerm) }}
                />
            </div>

            {movies.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <Movie movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
            )}

        </div >
    )
}

export default App;
