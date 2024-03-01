import "./_characters.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const baseUrl = "https://gateway.marvel.com/";
const apiKey = "cb321be27edfdd523c3ec38a1f067556";
const allCharacters = "/v1/public/characters";
const ts = "1707296272";
const hash = "fc2fcf4eb205fb7c44ca0e969a13b180";

function Characters () {
  useEffect(() => {document.title = 'Marvel | Heroes';},[]);
  const [characters, setCharacters] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [total_pages, setTotalPages] = useState(1);
  const [limit_pages, setLimitPages] = useState(1);
  const [offset, setOffset] = useState(0);

  function searchCharacter (e) {
    e.preventDefault();
    getCharacters (search);
  }

  function setComicsPage (e, value) {
    let offset = Math.round(Number(value-1))*Number(limit_pages)
    console.log(typeof(limit_pages));
    setOffset(offset);
    getCharacters(search, offset)
  }

  function getCharacters (search, offset) {
    let url = baseUrl + allCharacters;
    let params;
    if (search) {
      params = {
      ts: ts,
      apikey: apiKey,
      hash: hash,
      name: search,
      offset: offset,
    }} else {
      params = {
      ts: ts,
      apikey: apiKey,
      hash: hash,
      offset: offset,
    }
    }
    axios.get(url,{params: params})
      .then(response =>{
        setCharacters(response.data.data.results);
        setTotalPages(response.data.data.total);
        setLimitPages(response.data.data.limit);
        console.log(response);
      })
      .catch(error =>{
        setError(error.message);
      })
  }

  useEffect(() =>{getCharacters(search);},[]);

if (error) {
  return (
    <h2>{error}</h2>
  )
} else if (characters) {
  let items = characters.map((character, index) =>
    <div key={index} className="character-wrapper">
      <div className="character container-chracters">
      <img src={ character.thumbnail.path + "." + character.thumbnail.extension} alt="{character.name}" />
      <Link to={"/characters/" + character.id}><h2>{character.name}</h2></Link>
      </div>
    </div>
  );
  return(
    <div>
      <div className="form container">
        <form onSubmit={searchCharacter} className="search-character">
          <div className="form-items">
            <h1>What kind of hero this galaxy needs.</h1>
            <input type="text" className="input-character" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button type="submit" className="button-character">Search</button>
          </div>
        </form>
      </div>
      <div className="characters container">{items}</div>
      <div className="pagination container-wrapper">
      <Stack spacing={2}>
        <Pagination count={Math.round(Number(total_pages)/Number(limit_pages))} variant="outlined" shape="rounded" onChange={setComicsPage} />
      </Stack>
      </div>
      </div>
  )
}};
export default Characters;