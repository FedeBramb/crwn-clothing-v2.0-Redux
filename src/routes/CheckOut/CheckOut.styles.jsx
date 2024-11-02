import styled from "styled-components";

export const CheckOutHeader = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  .header-block {
    text-transform: capitalize;
    width: 23%;

    &:last-child {
      width: 8%;
    }
  }

  @media screen and (max-width: 560px) {
    display: none;
  }
`

export const CheckOutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;

  .total {
    margin-top: 3rem;
    margin-left: auto;
    font-size: 3.6rem;
  }

  @media screen and (max-width: 876px) {
    width: 90%;
  }

  @media screen and (max-width: 560px) {
    width: 98vw;
  }
`