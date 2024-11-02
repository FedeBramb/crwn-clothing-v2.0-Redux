import styled from "styled-components";

export const DirectoryContainer = styled.div`
  width: 100%;
  height: calc(100vh - 14rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: none;
    width: calc(100vw - 1.7rem);
    height: auto;
  }

  @media screen and (max-width: 480px) {
    width: 100vw;
  }
`