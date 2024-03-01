import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from "./components/About/About";
import Comics from "./components/Comics/Comics";
import Characters from "./components/Characters/Characters";
import Layout from "./components/Layout/Layout";
import 'reset-css';
import './style.scss';
import PageNotFound from "./components/PageNotFound/pagenotfound";
import SingleCharacter from "./components/SingleCharacter/SingleCharacter";
import SingleComic from "./components/SingleComic/SingleComic";
import Wishlist from "./components/Wishlist/Wishlist";


function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<SingleCharacter />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/comics/:id" element={<SingleComic />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound/>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
