import styled from "styled-components";

export const Sectionoferstas = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 44px 16px;
  flex-direction: column;
  padding-bottom: 153px;

  div {
    h2 {
        font-family: Montserrat;
font-weight: 400;
font-size: 22px;
line-height: 26.82px;

text-align: center;

        padding-bottom: 10px;
    strong {
      font-family: Elsie Swash Caps;
      font-weight: 900;
      font-size: 82px;
      line-height: 94.46px;
      letter-spacing: 0%;
      text-align: center;
    }
  }
  }
`;

export const Ofertascard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
