import styled from "styled-components";

export const AuthenticationContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin: 3rem auto;
    

    @media screen and (max-width: 980px) {
        flex-direction: column;
        align-items: center;
        gap: 8rem;
        width: 99vw;
    }
`

