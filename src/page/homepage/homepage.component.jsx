import React from "react";

// components
import Hero from "../../components/hero/hero.component";
import About from '../../components/about/about.component'
import Project from "../../components/project/project-section.component";
import Skill from "../../components/skill/skill.component";
import Education from '../../components/education/education.component';
import Contact from '../../components/contact/contact.component';
import Footer from '../../components/footer/footer.component';

const Homepage = () => (
  <>
    <Hero />
    <About />
    <Project />
    <Skill />
    <Education />
    <Contact />
    <Footer />
  </>
  
);

export default Homepage;