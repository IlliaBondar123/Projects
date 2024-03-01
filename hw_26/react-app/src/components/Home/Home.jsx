import "./_home.scss";
import HomeSlider from "../HomeSlider/HomeSlider";
import { useEffect } from "react";
function Home () {
  useEffect(() => {document.title = 'Marvel | Home';},[]);
  return (
    <div className="home-wrapper">
      <div className="quote">
        <h1> "I used to be embarrassed because I was just a comic book writer while other people were building bridges or going on to medical careers. And then I began to realize: Entertainment is one of the most important things in people's lives. Without it, they might go off the deep end. "<br />- Stan Lee</h1>
      </div>
      <HomeSlider />
    </div>
  )
}
export default Home;