
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css"
import { resolve } from "styled-jsx/css";
const Movie = async () => {
  
  await new Promise(resolve=>setTimeout(resolve, 2000));

const url = process.env.RAPID_KEY;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4966da1f32mshffc4dbd19ed85ffp1311b5jsn6d3162d6f487',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
const res = await fetch(url, options);
const data = await res.json();
const main_data = data.titles;
// console.log(data);

    return (
      <>
      
      <section className= {styles.MovieSection}>
      <div className= {styles.container}>
        <h1>Movie and Series !</h1> 
        <div className= {styles.card_section}>
        {
          main_data.map((curElem) => {
            return <MovieCard key= {curElem.id} {...curElem}/>
          })
        }
        </div>
        </div>
        </section>
      </>
    );
  };
  export default Movie;