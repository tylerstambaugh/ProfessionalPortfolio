import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <main>
        <Header />
        <AboutMe />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

export default App;
