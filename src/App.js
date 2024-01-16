import './App.css';
import {Navbar} from "./Navbar";
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Blogs} from "./pages/Blogs"

function App() {
    let component
    switch (window.location.pathname) {
        case "/":
            component = <Home />
            break
        case "/about":
            component = <About />
            break
        case "/blogs":
            component = <Blogs />
            break
    }
  return (
    <div className="App">
      <Navbar />
        {component}
    </div>
  );
}

export default App;
