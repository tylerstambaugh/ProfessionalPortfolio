import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}
{
  basename: "/ProfessionalPortfolio";
}
export default App;
