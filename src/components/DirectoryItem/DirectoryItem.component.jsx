import React from 'react';

import { useNavigate } from 'react-router-dom';

import { BackgroundImage, Body, DirectoryItemContainer, Title } from './DirectoryItem.styles';

function DirectoryItem({ category }) {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      { /* $per non fare triggerare la console errori con custom prop */}
        <BackgroundImage $imageUrl={imageUrl} /> 
        <Body>
            <Title>{title}</Title>
        </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;