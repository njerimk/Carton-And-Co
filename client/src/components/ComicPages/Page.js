import React from 'react';
import { Card, CardMedia } from '@mui/material';

export default function Page({ currentPage }) {
  if (!currentPage) {
    return <div>No page available</div>;
  }

  return (
    <Card style={{ margin: "auto", width: "50%" }}>
      <CardMedia
        component="img"
        width="100%"
        image={currentPage.image_url || 'https://e963yme7wqk.exactdn.com/wp-content/plugins/elementor/assets/images/placeholder.png?fit=755,503'}
        alt={currentPage.page_name}
      />
    </Card>
  );
}

