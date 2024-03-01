import "./_comics.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import wishadd from './img/add.png';
import wishadded from './img/added.png';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const baseUrl = "https://gateway.marvel.com/";
const apiKey = "cb321be27edfdd523c3ec38a1f067556";
const allComics = "v1/public/comics";
const ts = "1707296272";
const hash = "fc2fcf4eb205fb7c44ca0e969a13b180";

function Comics () {
  useEffect(() => {document.title = 'Marvel | Comics';},[]);
  const [comics, setComics] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [total_pages, setTotalPages] = useState(1);
  const [limit_pages, setLimitPages] = useState(1);
  const [offset, setOffset] = useState(0);
  const [liked, setLiked] = useState(() => {
    let items = [];
    for(let i=0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (!key.indexOf('comic-')) {
        items.push(Number(key.replace('comic-','')));
      }
    }
    return items;
  });

  function searchComic (e) {
    e.preventDefault();
    getComics (search);
  }

  function getComics (search,offset) {
    let url = baseUrl + allComics;
    let params;
    if (search) {
      params = {
        ts: ts,
        apikey: apiKey, 
        hash: hash,
        title: search,
        offset: offset,
      }
    }else {
      params = {
        ts: ts,
        apikey: apiKey,
        hash: hash,
        offset: offset,
      }
    }
    axios.get(url,{params: params})
      .then(response =>{
        setComics(response.data.data.results);
        setTotalPages(response.data.data.total);
        setLimitPages(response.data.data.limit);
        console.log(response);
      })
      .catch(error =>{
        setError(error.message);
      })
  }

  function setComicsPage (e, value) {
    let offset = Math.round(Number(value-1))*Number(limit_pages)
    console.log(typeof(limit_pages));
    setOffset(offset);
    getComics(search, offset)
  }

  function wishlist(event) {
    event.preventDefault();
    let id = Number(event.target.attributes.getNamedItem('data-comic-id').value);
    let isFavourited = liked.includes(id);
    if (!isFavourited) {
      let newItem = [...liked,id]
      setLiked(newItem);
      for (let i = 0; i < comics.length; i++) {
        if (comics[i].id === id) {
          window.localStorage.setItem('comic-'+id, JSON.stringify(comics[i]));
        }
      }
    } else {
      let newItem = liked.filter((savedId) => savedId !== id)
      setLiked(newItem);
      window.localStorage.removeItem('comic-'+id, );
    }
  }

  useEffect(() =>{getComics(search);},[]);

if (error) {
  return (
    <h2>{error}</h2>
  )
} else if (comics) {
  let items = comics.map((comic, index) =>
    <div key={index} className="comics-wrapper">
      <div className="comic container-wrapper">
        <img className="wishlist"
        onClick={wishlist} 
        data-comic-id={comic.id} 
        src={liked.includes(comic.id) ? wishadded : wishadd }
        ></img>
      <img src={ comic.thumbnail.path + "." + comic.thumbnail.extension} alt="{comic.name}" />
      <Link to={"/comics/" + comic.id}><h2>{comic.title}</h2></Link>
      </div>
    </div>
  );
  return(
    <div>
      <div className="form container">
        <form onSubmit={searchComic} className="search-character">
          <div className="form-items">
            <input type="text" className="input-character" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button type="submit" className="button-character">Search</button>
          </div>
        </form>
      </div>
      <div className="comics container-wrapper">{items}</div>
      <div className="pagination container-wrapper">
      <Stack spacing={2}>
        <Pagination count={Math.round(Number(total_pages)/Number(limit_pages))} variant="outlined" shape="rounded" onChange={setComicsPage} />
      </Stack>
      </div>
      </div>
  )
}};
export default Comics;