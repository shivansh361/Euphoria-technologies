import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body} !important;
    color: ${({ theme }) => theme.text} !important;
  }

  .toggle-button {
    color: ${({ theme }) => theme.toggleButtonText} !important;
    background-color: ${({ theme }) => theme.toggleButton} !important; 
  }

  .navbar__main,
  .navbar__main__open,
  .collapseMenu {
    background-color: ${({ theme }) => theme.navBackground} !important;
  }

  input, textarea {
    background-color: ${({ theme }) => theme.formBackground} !important;
  }

  .showcase__main {
    color: ${({ theme }) => theme.lightText} !important;
  }

  .showcase__main p, .showcase__main h1 {
    font-weight: ${({ theme }) => theme.lightTextWeight} !important;
  }

  .about__boxes__box,
  .chimpsCards,
  .testimonial__boxes__item,
  .speaker__card {
    background-color: ${({ theme }) => theme.cardColor} !important; 
  }

  .about__boxes__box > p {
    background-color: ${({ theme }) => theme.cardColor} !important; 
    color: ${({ theme }) => theme.text} !important;
  }

  .about__main > p,
  .chimpsCards > p,
  .testimonial > p,
  .team-info > h3,
  .contact > p,
  .contact__address > p {
    color: ${({ theme }) => theme.grayText} !important;
  }

  .chimpsCards > h2,
  .testimonial > h2,
  .contact > h1 {
    color:  ${({ theme }) => theme.grayH2} !important;
  }

  .team {
    background-color: ${({ theme }) => theme.teamBg} !important;
  }
  
  .card-social a {
    color: ${({ theme }) => theme.cardSocialA};
  }

  .footer__main > ul > li > a > i,
  .footer__main p
   {
    color: ${({ theme }) => theme.body} !important;
  }

  .footer__main hr {
    border-color: ${({ theme }) => theme.body} !important;
  }
  `
