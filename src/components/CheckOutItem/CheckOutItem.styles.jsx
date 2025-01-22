import styled from "styled-components";

export const CheckOutItemContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr;
  grid-template-areas: 
  "image name quantity price remove";
  width: 100%;
  min-height: 30rem;
  border-bottom: 1px solid darkgrey;
  padding: 1.5rem 0;
  font-size: 2rem;
  align-items: center;

  @media screen and (max-width: 876px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "nome nome"
      "image details"
      "image details"
      "image details"
      "image details";
    grid-row-gap: 3rem;
  }

  @media screen and (max-width: 480px) {
    grid-column-gap: 4rem;
  }
`

export const ImageContainer = styled.div`
  background-image: ${({ $imageUrl }) => `url(${ $imageUrl })`};
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 90%;
  grid-area: image;

  @media screen and (max-width: 876px) {
    /* grid-column: 1; */
    min-height: 20rem;
    min-width: 20rem;
  }
`

export const Name = styled.span`
  width: 100%;
  grid-area: nome;
  font-weight: bold;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`

export const QuantityContainer = styled.div`
  width: 100%;
  display: flex;
  
  @media screen and (max-width: 480px) {
    width: 120px;
  }
`

export const Price = styled.span`
  width: 100%;
  
  @media screen and (max-width: 480px) {
    width: 120px;
  }
`

export const ArrowContainer = styled.div`
  cursor: pointer;
`

export const Value = styled.span`
  margin: 0 1rem;
`

export const RemoveIcon = styled.div`
  padding-left: 1.2rem;
  cursor: pointer;
  color: red;
  
  @media screen and (max-width: 480px) {
    width: 120px;
  }
`