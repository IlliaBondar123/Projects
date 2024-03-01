import { useEffect } from "react";
import AboutSlider from "../AboutSlider/AboutSlider";
import "./_about.scss";
import characters from "./img/marvel_characters.jpg"

function About () {
  useEffect(() => {document.title = 'Marvel | About';},[]);
  return (
    <div className="container background">
      <div className="title-about"><h1>Our History</h1></div>
      <AboutSlider />
      <div className="section">
        <div><img className="characters-about" src={ characters } alt="" /></div>
        <div><p className="information">Marvel Comics is an American comic book publisher and the property of The Walt Disney Company since December 31, 2009, and a subsidiary of Disney Publishing Worldwide since March 2023. Marvel was founded in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko, and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.
                Marvel counts among its characters such well-known superheroes as Spider-Man, Iron Man, Captain America, Thor, Doctor Strange, Hulk, Daredevil, Wolverine, Black Panther, and Captain Marvel, as well as popular superhero teams such as the Avengers, X-Men, Fantastic Four, and Guardians of the Galaxy. Its staple of well-known supervillains includes the likes of Doctor Doom, Magneto, Ultron, Thanos, Kang the Conqueror, Green Goblin, Red Skull, Galactus, Loki, and Kingpin. Most of Marvel's fictional characters operate in a single reality known as the Marvel Universe, with most locations mirroring real-life places; many major characters are based in New York City, New York, United States.[4] Additionally, Marvel has published several licensed properties from other companies. This includes Star Wars comics twice from 1977 to 1986 and again since 2015.</p></div>
      </div>
    </div>
  )
}
export default About;