import styled from "styled-components";

export const DirectoryContainer = styled.div`
  width: 100%;
  height: 230vh;
  padding: 0 4rem;
  background-color: #020202;
  margin: auto;
  display: grid;
  grid-template-areas :
    'sneakers jackets'
    'hats hats'
    'women men'
  ;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-areas :
      'sneakers'
      'jackets'
      'hats'
      'women'
      'men'
    ;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0;
  }
`