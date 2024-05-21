import React, { useState } from 'react';
import ComicPublish from './ComicPublish'
import Sidebar from './Sidebar';
import MainContent from './MainContent';

export default function PublishDashBoard(props) {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  

    return (
        <div className="dashboard-container">
          <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
          <MainContent activeTab={activeTab} />
        </div>
      );
    };
