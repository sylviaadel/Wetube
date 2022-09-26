import React, { useState } from 'react';
import './sidebar.scss';
import MenuIcon from '../../images/list-icon.png'
import exploreIcon from '../../images/explore-icon.png'
import shortsIcon from '../../images/shorts-icon.png'
import subscriptionsIcon from '../../images/subscriptions-icon.png'
import libraryIcon from '../../images/library-icon.png'
import homeIcon from '../../images/home-icon.png'

function Sidebar()  {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleClass = () => {
    setCollapsed(!isCollapsed);
  };

  return (
      <div className={'Sidebar'+ ' ' + (isCollapsed ? 'open': '')}>
        <button className='MenuBtn' onClick={toggleClass}>
          <img src={MenuIcon} />
        </button>
        <div className='LinksContainer'>
          <a href='#' className='active'><img src={homeIcon} alt="Home" /> <label>Home</label> </a>
          <a href='#'><img src={exploreIcon} alt="Explore" /> <label>Explore</label> </a>
          <a href='#'><img src={shortsIcon} alt="Shorts" /> <label>Shorts</label> </a>
          <a href='#'><img src={subscriptionsIcon} alt="Subscriptions" /> <label>Subscriptions</label> </a>
          <hr />
          <a href='#'><img src={libraryIcon} /> <label>Library</label> </a>
        </div>
      </div>
    );
  }
export default Sidebar;
