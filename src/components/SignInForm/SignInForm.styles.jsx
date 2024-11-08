import styled from "styled-components";

export const SignInFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 38rem;

    h1 {
        color: #9a0707;
    }

    @media screen and (max-width: 480px) {
        width: 30rem;
    }
`
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 480px) {
        .no-display {
            display: none;
        }
    }
    
`
