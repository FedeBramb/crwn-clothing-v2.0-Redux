import styled from "styled-components";

export const AuthenticationContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: calc(100vh - 7rem);
    background-image: url('https://i.ibb.co/D8SvgSs/photo.jpg');
    background-size: cover; /* Adatta la dimensione */
    background-position: bottom; /* Centra l'immagine */
    background-repeat: no-repeat; /* Evita la ripetizione */

    @media screen and (max-width: 980px) {
        flex-direction: column;
        align-items: center;
        gap: 8rem;
        width: 99vw;
        height: 100%;
        margin: 0 auto;
    }
`

