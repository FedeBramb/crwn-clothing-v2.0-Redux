import styled from "styled-components";

// Riceve grid-area per poi 
export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ $imageUrl }) => `url(${$imageUrl})`};
  height: 53.5rem;
  position: relative;
`

export const CategoryOverlay = styled.div`
  position: absolute; 
  bottom: 20%; /* Partenza a metà altezza del genitore */ 
  left: 50%; 
  height: 4rem;
  padding: 0 2.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(18px);
  border-radius: 3px;

  &:hover {
    background: rgba(255, 255, 255, 0.2); /* Slightly more opaque on hover */
  }
`

export const Title = styled.div`
  margin: 0 0.6rem 0;
  font-size: 2.2rem;
`

export const DirectoryItemContainer = styled.div`
  grid-area: ${({ $gridArea }) => $gridArea};
  min-width: 31%;
  flex: 1 1 auto;
  margin: 0 0.75rem 1.5rem;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${CategoryOverlay} {
      opacity: 0.9;
    }
  }

  &:first-child {
      margin-right: 0.75rem;
    }
  
    &:last-child {
      margin-left: 0.75rem;
    }
`