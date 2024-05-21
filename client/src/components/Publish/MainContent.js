import React from 'react';
import { styled } from '@mui/system';

const MainContentContainer = styled('div')({
  marginLeft: '250px', // Same width as Sidebar
  padding: '20px',
});

const MainContent = ({ activeTab }) => {
  return (
    <MainContentContainer>
      {activeTab === 'home' && <div>Home Page Content</div>}
      {activeTab === 'messages' && <div>Messages Page Content</div>}
      {activeTab === 'notifications' && <div>Notifications Page Content</div>}
      {/* Add more content based on active tab */}
    </MainContentContainer>
  );
};

export default MainContent;
