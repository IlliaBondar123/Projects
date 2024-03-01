import "./wishlist.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import wishadd from './img/add.png';
import wishadded from './img/added.png';

function Wishlist () {
  useEffect(() => {document.title = 'Marvel | Wishlist';},[]);
  const [comics, setComics] = useState([]);
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

  function ListWish(event) {
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

  useEffect(() => {
    let items = [];
    for(let i=0; i < localStorage.length; i++) {
      let key =localStorage.key(i);
      if (!key.indexOf('comic-')) {
        let comicItem = JSON.parse(localStorage.getItem(key));
        items.push(comicItem)
      }
    }
    setComics(items);
  }, []);

  if (comics) {
    const items = comics.map((comic, index) => {
      return (
      <div key={index} className="comics-wrapper">
      <div className="comic container-wrapper">
      <img className="wishlist"
        onClick={ListWish} 
        data-comic-id={comic.id} 
        src={liked.includes(comic.id) ? wishadded : wishadd }
        ></img>
      <img src={ comic.thumbnail.path + "." + comic.thumbnail.extension} alt="{comic.name}" />
      <Link to={"/comics/" + comic.id}><h2>{comic.title}</h2></Link>
      <p>{ comic.description }</p>
      </div>
    </div>
    )
    
      });
  return (
    <div>
      <div className="wishlist-title"><h1>Wishlist</h1></div>
      <div className="comics container-wrapper">{items}</div>
    </div>
  );
}
  }
  
export default Wishlist;