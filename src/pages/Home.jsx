import React from "react";
import EventHome from "../components/EventHome";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Location from "../components/Location";
import Sponsorship from "../components/Sponsorship";
import TextEvent from "../components/TextEvent";
import DateEvent from "../components/DateEvent";
import CategoryEvent from "../components/CategoryEvent";
import TextCategoryEvent from "../components/TextCategoryEvent";
import ImgHomeTop from "../components/ImgHomeTop";
import { ScrollRestoration } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <ImgHomeTop />
      <TextEvent />
      <DateEvent />
      <EventHome />
      <Location />
      <TextCategoryEvent />
      <CategoryEvent />
      <Sponsorship />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default Home;
