import React, { useEffect, useState } from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Contact } from "./components/contact";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import { Navigation } from "./components/navigation";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import JsonData from "./data/data.json";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
