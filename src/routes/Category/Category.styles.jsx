import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat( 4, 1fr);
    column-gap: 2rem;
    row-gap: 5rem;
    padding: 0 2.5rem;

    @media screen and (max-width: 1050px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 584px) {
        grid-template-columns: 1fr;
    }
`

export const CategoryTitle = styled.h2`
    font-size: 3.8rem;
    margin-bottom: 2.5rem;
    text-align: center;
`
