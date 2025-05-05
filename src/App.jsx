// Made by wirestorm - https://wirestorm.software
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { GalleryPage } from "./components/GalleryPage";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { ContactFloat } from "./components/ContactFloat";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = ({ landingPageData }) => {
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} contactData={landingPageData.Contact} />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <ContactFloat />
    </div>
  );
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home landingPageData={landingPageData} />
        </Route>
        <Route path="/gallery">
          <GalleryPage data={landingPageData.Gallery} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
// Made by wirestorm - https://wirestorm.software
