import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import 'swiper/css';
import "./home_slider.scss";
const baseUrl = "https://gateway.marvel.com/";
const apiKey = "cb321be27edfdd523c3ec38a1f067556";
const allComics = "v1/public/comics";
const ts = "1707296272";
const offset = "100";
const hash = "fc2fcf4eb205fb7c44ca0e969a13b180";

function HomeSlider () {
  const [comics, setComics] = useState(null);
  const [error, setError] = useState(null);

  function getComics () {
    let url = baseUrl + allComics;
    let params = {
      ts: ts,
      apikey: apiKey,
      hash: hash,
      offset: offset,
    }
    axios.get(url,{params: params})
      .then(response =>{
        setComics(response.data.data.results);
        console.log(response);
      })
      .catch(error =>{
        setError(error.message);
      })
  }

  useEffect(() =>{getComics();},[]);

  if (error) {
    return (
      <h2>{error}</h2>
    )
  } else if (comics) {
    let items = comics.slice(0,6).map((comic, index) =>
    <SwiperSlide key={index}>
    <div className='slide-wrapper'>
    <Link className='slider-slide' to={"/comics/" + comic.id}><img className='slider-img' src={ comic.thumbnail.path + "." + comic.thumbnail.extension} alt="{comic.name}" />
      <h2 className='slider-slide-title'>{comic.title}</h2>
      </Link>
    </div>
    </SwiperSlide>
  );
    return (
      <Swiper className='slider'
      modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true}
        breakpoints={{
          // when window width is >= 640px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          450: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
        }}
      >
        {items}
      </Swiper>
    )
  }
}
export default HomeSlider;