import TopBar from "./components/topbar/TopBar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testiomonials from "./components/testimonials/Testiomonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import {useState} from "react" 
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen , setMenuOpen]= useState(false)
  return (
    <div className="app">
<TopBar  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
<Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
<div className="sections">
  <Intro/> 
  <Portfolio/>
  {/* <Works/> */}
  <Testiomonials/>
  <Contact/>
</div>
    </div>
  );
}

export default App;
 