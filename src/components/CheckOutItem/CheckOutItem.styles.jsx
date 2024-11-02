import styled from "styled-components";

export const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 10rem;
  border-bottom: 1px solid darkgrey;
  padding: 1.5rem 0;
  font-size: 2rem;
  align-items: center;

  @media screen and (max-width: 560px) {
    
  }
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 1.5rem;
`

export const Img = styled.img`
width: 100%;
height: 100%;
`

export const Name = styled.span`
  width: 23%;
`

export const QuantityContainer = styled.div`
  width: 23%;
  display: flex;
`

export const Price = styled.span`
  width: 23%;
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
`