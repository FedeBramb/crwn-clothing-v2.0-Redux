import styled from "styled-components";

export const AuthenticationContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin: 0 auto;
    height: calc(100vh - 19rem);

    @media screen and (max-width: 980px) {
        flex-direction: column;
        align-items: center;
        gap: 8rem;
        width: 99vw;
        height: 100%;
        margin: 3rem auto;
    }
`

