import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 38rem;

    @media screen and (max-width: 480px) {
        width: 30rem;
    }

    h2 {
        margin: 1rem 0;
    }
`