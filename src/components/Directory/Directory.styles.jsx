import styled from "styled-components";

export const DirectoryContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
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
  }
`