import "./App.css";
import Homepage from "./homepage/homepage";
import Proces from "./Proces/Proces";
import Offer from "./Offer/Offer";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App">
      <Homepage />
      <hr />
      <Proces />
      <hr />
      <Offer />
      <hr />
      <Projects />
      <hr />
      <About />
      <hr />
      <Contact />
    </div>
  );
}

export default App;
