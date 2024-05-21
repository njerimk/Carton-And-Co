import React from 'react';
import { styled } from '@mui/system';

const SidebarContainer = styled('div')({
  backgroundColor: '#f0f0f0',
  width: '250px',
  height: '100vh',
  padding: '20px',
  borderRight: '1px solid #ccc',
});

const SidebarItem = styled('div')(({ theme, active }) => ({
  cursor: 'pointer',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
  ...(active && {
    backgroundColor: '#d3d3d3',
    fontWeight: 'bold',
  }),
}));

const Sidebar = ({ activeTab, onTabChange }) => {
  return (
    <SidebarContainer>
      <SidebarItem active={activeTab === 'home'} onClick={() => onTabChange('home')}>
        Home
      </SidebarItem>
      <SidebarItem active={activeTab === 'messages'} onClick={() => onTabChange('messages')}>
        Messages
      </SidebarItem>
      <SidebarItem
        active={activeTab === 'notifications'}
        onClick={() => onTabChange('notifications')}
      >
        Notifications
      </SidebarItem>
      {/* Add more sidebar items as needed */}
    </SidebarContainer>
  );
};

export default Sidebar;

