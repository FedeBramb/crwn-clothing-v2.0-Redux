import styled from "styled-components";

export const SignInFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 42rem;
    padding: 30px;
    text-align: center;
    align-content: center;
    justify-content: center;
    background-color: #eeeeee;
    
    h2 {
        color: #930101;
    }

    span {
        font-size: 1.6rem;
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
