import "./App.css";
import Carousel from "./components/Carousel";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import Search from "./components/Search";
import Selections from "./components/Selections";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selections />
      <Carousel />
      <Review/>
      <Footer />
    </div>
  );
}

export default App;
