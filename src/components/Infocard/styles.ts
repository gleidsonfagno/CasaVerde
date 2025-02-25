import styled from "styled-components";

export const Card = styled.article`
  background: #ffffff;
  margin: 0 auto ;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  max-width: 995px;
  /* max-height: 440px; */
  width: 100%;
  overflow: hidden;

  .img {
    width: 100%;
    height: 440px;
    max-width: 585px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      max-width: 100%;
      /* height: 100%; */
      object-fit: cover;
      object-position: center;
    }
  }

  h2 {
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0;
    text-align: left;
    margin-bottom: 24px;
    strong {
      font-family: Elsie Swash Caps;
      font-weight: 900;
      line-height: 1;
      letter-spacing: 0;
      text-align: left;
      font-size: 42px;
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
    flex-direction: column;
    /* width: 400px; */
    padding: 16px ;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Lista = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  p {
    position: relative;
    font-size: 22px;
    padding-left: 65px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 52px;
      height: 52px;
      background-color: #ffcb47;
      border-radius: 50%;
    }
  }
`;
