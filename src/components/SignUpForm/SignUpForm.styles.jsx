import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 44rem;
    border: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 3rem;

    @media screen and (max-width: 480px) {
        width: 30rem;
    }

    h2 {
        color: #9a0707;
        margin-top: 2%;
    }

    span {
        font-size: 1.6rem;
    }
`