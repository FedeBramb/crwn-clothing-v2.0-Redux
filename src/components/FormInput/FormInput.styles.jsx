import styled, { css } from "styled-components";

const subColor = '#292929';
const mainColor = '#930101';

// Definisco un mixin per spostare il testo e rimpicciolirlo
export const shrinkLabelStyles = css`
  top: -1.4rem;
  font-size: 1.4rem;
  color: ${mainColor};
`
export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1.6rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.5rem;
  top: 1rem;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  color: ${subColor};
  font-size: 1.6rem;
  padding: 1rem 1rem 1rem 0.5rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 3rem 0;

  &:focus {
    outline: none;
  }
  // Seleziona l'elemento fratello all'interno dello stesso div
  // Attiva shrinkLabel anche quando è attivo
  // focus input senza che l'input.value sia 0
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`

export const Group = styled.div`
  position: relative;
  margin: 2rem 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`