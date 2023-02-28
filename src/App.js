import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

// components
import Homepage from './page/homepage/homepage.component';
import ProjectPage from './page/project-page/project-page.component';

// styles
import './App.css';

const App = () => (
  <Routes>
    <Route exact path="/" element={<Homepage />} />
    <Route exact path="/projects" element={<ProjectPage />} />
  </Routes>
)
export default App;
