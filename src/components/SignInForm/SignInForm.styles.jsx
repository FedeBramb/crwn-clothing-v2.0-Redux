import styled from "styled-components";

export const SignInFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 42rem;
    padding: 30px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    
    h2 {
        color: #930101;
    }

    span {
        font-size: 1.6rem;
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
