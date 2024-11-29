import Hero from "./component/Header";
import ResponsiveMessage from "./component/ResponsiveMessage";
import BrowserEvents from "./component/BrowseEvents";

import ConcertSlider from "./component/ConcertSlider";
import Footer from "./component/Footer";
// import styles from "../styles/Hero.module.css";

export default function Home() {
  return (
    <div>
    
    <ResponsiveMessage/>
      <Hero/>
      <BrowserEvents />

      <ConcertSlider />
        <Footer/>
    
    </div>
  );
}
