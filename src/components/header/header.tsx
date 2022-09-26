import React, { useState } from 'react';
import './header.scss';
import mainLogo from '../../images/logo.svg';
import searchImg from '../../images/search-icon.png';


function Header() {

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <header>
    <img src={mainLogo} alt="Wetube" className='mainLogo' />
    <div className='searchContainer'>
      <input placeholder='Search' onChange={inputHandler} />
      <button className='searchBtn'>
        <img src={searchImg} alt="Search" />
      </button>
    </div>
  </header>
  );
}

export default Header;
