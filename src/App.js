import { React, useState } from "react";
import './App.scss';
import HeaderComponent from './components/header/header.tsx'
import VideosContainer from './components/videosContainer/videosContainer.js'
import Sidebar from './components/sidebar/sidebar.tsx'



function App() {

  return (
    <div className="App">
      <Sidebar />
      <HeaderComponent />
      <VideosContainer />
    </div>
  );
}

export default App;
