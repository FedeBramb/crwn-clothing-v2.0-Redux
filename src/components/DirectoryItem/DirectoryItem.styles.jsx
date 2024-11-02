import styled from "styled-components";


// Diamo la priorità a BackgroundeImage così da averla disponibile
//  in DirectoryItemContainer.
export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ $imageUrl }) => `url(${$imageUrl})`};
`

export const Body = styled.div`
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
  position: absolute;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(0.95); /* Slightly enlarges the div */
    background: rgba(255, 255, 255, 0.2); /* Slightly more opaque on hover */
    color: black;
  }
`

export const Title = styled.div`
  margin: 0 0.6rem 0;
  font-size: 2.2rem;
`

export const DirectoryItemContainer = styled.div`
  min-width: 31%;
  height: 24rem;
  flex: 1 1 auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border: 1px solid black;
  margin: 0 0.75rem 1.5rem;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.2);
      transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
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