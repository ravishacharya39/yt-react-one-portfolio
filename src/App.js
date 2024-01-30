import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Experience/>
      <Contact/>
      <SocialLinks/>

    </div>
  );
}

export default App;
