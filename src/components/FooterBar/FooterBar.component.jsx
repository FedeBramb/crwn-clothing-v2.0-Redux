import React from "react";

import { Container,
  Logo,
  NavLinks,
  Link,
  SocialIcons,
  Icon
} from './FooterBar.styles';

const FooterBar = ({ backgroundColor, textColor }) => {
  return (
    <Container $textColor={textColor} $backgroundColor={backgroundColor}>
      <Logo>MyShop</Logo>
      <NavLinks>
        <Link $textColor={textColor} href="/about">About</Link>
        <Link $textColor={textColor} href="/contact">Contact</Link>
        <Link $textColor={textColor} href="/terms">Terms</Link>
        <Link $textColor={textColor} href="/privacy">Privacy</Link>
      </NavLinks>
      <SocialIcons>
        <Icon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={`https://icongr.am/fontawesome/facebook-official.svg?size=32&color=ffffff`} alt="icon Facebook" />
        </Icon>
        <Icon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={`https://icongr.am/fontawesome/whatsapp.svg?size=32&color=ffffff`} alt="icon Facebook" />
        </Icon>
        <Icon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={`https://icongr.am/fontawesome/instagram.svg?size=32&color=ffffff`} alt="icon Facebook" />
        </Icon>
      </SocialIcons>
    </Container>
  );
};

export default FooterBar;