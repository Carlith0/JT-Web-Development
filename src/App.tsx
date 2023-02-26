import Homepage from "./Homepage/HomePage";
import Proces from "./Proces/Proces";
import Offer from "./Offer/Offer";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Styles from "./App.module.scss";

function App() {
  return (
    <div className={Styles.App}>
      <Homepage />
      <Proces />
      <Offer />
      <Projects />
      <hr />
      <About />
      <hr />
      <Contact />
    </div>
  );
}
export default App;
