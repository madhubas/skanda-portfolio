import "./app.scss";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Research from "./Components/Research/Research";
import Intern from "./Components/Intern/Intern";
import Community from "./Components/Community/Community";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Community />
      <Research />
      <Intern />
      <Gallery />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
