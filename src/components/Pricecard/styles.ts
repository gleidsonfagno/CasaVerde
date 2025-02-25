import styled from "styled-components";

export const Card = styled.div`
border: 2px solid rgba(255, 203, 71, 0.16);
  display: flex;
  flex-direction: row;
  background: #ffffff;
  max-width: 379px;
  /* max-height: 200px; */
  overflow: hidden;
  gap: 16px;
  align-items: center;
  padding: 16px;
  div {
    img {
        max-width: 225px;
        width: 100%;
        /* height: 337px; */
        object-fit: cover;
        width: 379;
max-height: 200px;

    }
  }

  div {
    h3 {
      font-family: Elsie Swash Caps;
      font-weight: 900;
      font-size: 32px;
      line-height: 36.86px;
      padding-bottom: 8px;
    }
    p {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 16px;
      line-height: 19.5px;
      padding-bottom: 24px;
    }
    a {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 16px;
      line-height: 19.5px;
      color: #FFCB47;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;
