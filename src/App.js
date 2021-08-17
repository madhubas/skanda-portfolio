import "./app.scss";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Research from "./Components/Research/Research";
import Intern from "./Components/Intern/Intern";
import Community from "./Components/Community/Community";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Work from "./Components/Work/Work";
import Theatre from "./Components/Theatre/Theatre";
import Landing from "./Components/landing/Landing";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Main /> */}
      <Landing />
      <About />
      <Community />
      <Research />
      <Gallery />
      <Intern />

      <Theatre />
      <Footer />
    </div>
  );
}

export default App;
