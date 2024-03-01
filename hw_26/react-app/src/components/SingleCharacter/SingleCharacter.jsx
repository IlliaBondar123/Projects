import "./_singlecharacter.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const baseUrl = "https://gateway.marvel.com/";
const apiKey = "cb321be27edfdd523c3ec38a1f067556";
const singleCharacter = "v1/public/characters/";
const ts = "1707296272";
const hash = "fc2fcf4eb205fb7c44ca0e969a13b180";

function SingleCharacter () {
  useEffect(() => {document.title = 'Marvel | Hero';},[]);
  const movieId = useParams().id;
  console.log(movieId);
  const [characters, setMovie] = useState(null);
  const [error, setError] = useState(null);

  function getCharacter () {
    let url = baseUrl + singleCharacter + movieId;
    let params = {
      ts: ts,
      apikey: apiKey,
      hash: hash,
    }
    axios.get(url,{params: params})
      .then(response =>{
        setMovie(response.data.data.results);
      console.log(response);
      })
      .catch(error =>{
        setError(error.message);
      })
  }

  useEffect(() => {getCharacter();},[]);

if (error) {
  return (
    <h2>{error}</h2>
  )
} else if (characters) {
  let items = characters.map((character, index) =>
    <div className="container-singlecharacter" key={index}>
      <div className="singlecharacter">
        <img className="singlecharacter-img" src={ character.thumbnail.path + "." + character.thumbnail.extension} alt="{character.title}" />
        <div className="bio"> 
        <h2>{character.name}</h2>
        <p>{character.description}</p>
      </div>
      </div>
    </div>
  );
  return(
    <div>{items}</div>
  )
}};
export default SingleCharacter;