import styled from "styled-components";

export const SignInFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 38rem;

    h2 {
        margin: 1rem 0;
    }

    @media screen and (max-width: 480px) {
        width: 30rem;
    }
`
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    .no-display {
        display: none;
    }
`
