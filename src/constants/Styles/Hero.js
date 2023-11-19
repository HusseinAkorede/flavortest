import styled from "styled-components";

const HeroWrapper = styled.div`
        margin-top: 50px;
        max-width: 1200px;
        margin-inline: auto;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #000;
`
const HeroImage = styled.div`
        flex: 1;
`
const HeroText = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
    text-align: left;
        
`
const HeroTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    /* Adjust font size for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    /* Further adjustments for even smaller screens */
  }
`;

const HeroSubtitle = styled.p`
  font-size: 0.8rem;

  @media (max-width: 768px) {
    /* Adjust font size for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    /* Further adjustments for even smaller screens */
  }
`;

export {
    HeroWrapper,
    HeroImage,
    HeroText,
    HeroSubtitle,
    HeroTitle
}