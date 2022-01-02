import React from "react";
// images
import CrawnClothing from "../../assets/crwn-clothing.png";
import MoviesHome from '../../assets/movieshome.png';
import NasaMissionControl from '../../assets/nasa-mission-control.png'


export const projectsData = [
  {
    id: 1,
    title: "NASA MISSION CONTROL",
    description1: "NASA MISSION CONTROL is a Full-Stack Wep Application",
    description2: `Front-end built with React with help of arwes library.Arwes is a Futuristic Sci-Fi UI Web Framework. The backend is served by Node, Launches are handled by SpaceX API, Login with OAuth and email. This site is styled with CSS in JS. Test are done by jest.`,
    stack: ["React","CSS in Js","Arwes","Node","Express", "SpaceX-Api", "MongoDB", "mongoose"],
    liveLink:"https://crwn-live-preview.herokuapp.com/",
    sourceLink: "https://github.com/SumanIslam/NASA-mission-control-project",
    imageSource: NasaMissionControl,
  },
  {
    id: 2,
    title: "Crwn Clothing",
    description1: "Crwn Clothing is a Full-Stack E-commerce Wep Application",
    description2: "It's built with React and Redux. The backend is served by Firebase, payments are handled by Stripe API, Login with OAuth and email. This is fully responsive site styled with styled-component. Also used little bit Node for handling payment.",
    stack: ["React","Redux","Styled-Component","Node","Firebase", "Stripe"],
    liveLink:"https://crwn-live-preview.herokuapp.com/",
    sourceLink: "https://github.com/SumanIslam/crwn-clothing",
    imageSource: CrawnClothing,
  },
  {
    id: 3,
    title: "Crwn Clothing",
    description1: "Crwn Clothing is a fictional E-commerce Wep Application",
    description2: "Omnifood a fictional restaurant website where customer can find healthy foods. Here you will get 24/7 service. It has various menu items. You can order online too.",
    stack: ["React","Redux","Styled-Component","Node","Firebase"],
    liveLink:"https://crwn-live-preview.herokuapp.com/",
    sourceLink: "https://github.com/SumanIslam/omnifood",
    imageSource: MoviesHome,
  },
  {
    id: 4,
    title: "Crwn Clothing",
    description1: "Crwn Clothing is a fictional E-commerce Wep Application",
    description2: "Omnifood a fictional restaurant website where customer can find healthy foods. Here you will get 24/7 service. It has various menu items. You can order online too.",
    stack: ["React","Redux","Styled-Component","Node","Firebase"],
    liveLink:"https://crwn-live-preview.herokuapp.com/",
    sourceLink: "https://github.com/SumanIslam/omnifood",
    imageSource: MoviesHome,
  },
];