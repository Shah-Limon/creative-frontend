import React from "react";
import Banner from "../components/Banner";
import AboutUs from "../components/HomePage/AboutUs";
import OurSpeciality from "../components/HomePage/OurSpeciality";
import Portfolio from "../components/HomePage/Portfolio";
import RoadMap from "../components/HomePage/RoadMap";
import Team from "../components/HomePage/Team";
import Testimonials from "../components/HomePage/Testimonials";
import FeaturesPage from "./FeaturesPage";
import ServicesList from "../components/HomePage/ServicesList";
import ContactPage from "./ContactPage";
import CounterSection from "../components/HomePage/CounterSection";
import VideoSection from "../components/HomePage/VideoSection";
import CtaSection from "../components/HomePage/CtaSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServicesList></ServicesList>
      <AboutUs></AboutUs>
      <CounterSection></CounterSection>
      <VideoSection></VideoSection>
      <FeaturesPage></FeaturesPage>

      <Testimonials></Testimonials>
      <ContactPage></ContactPage>
      <CtaSection></CtaSection>
    </div>
  );
};

export default Home;
