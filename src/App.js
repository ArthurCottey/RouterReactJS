import './App.css';
import {Navbar} from "./Navbar";
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Blogs} from "./pages/Blogs"
import {Route, Routes} from "react-router-dom";
import musique from './musique.mp3';

function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/blogs" element={<Blogs/>}/>
          </Routes>
          <figure>
              <figcaption>Heuss L'Enfoiré - Saiyan ft. Gazo</figcaption>
              <audio controls src={musique}></audio>
          </figure>
      </div>
  );
}

export default App;
