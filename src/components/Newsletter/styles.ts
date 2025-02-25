import styled from "styled-components";

export const Main = styled.div`
  max-width: 1202px;
  margin: 0 auto;
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  padding-bottom: 103px;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

export const Container = styled.div`
  color: #202020;
  max-width: 585px;
  width: 100%;
  padding-top: 153px;
  article {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 37px;
    h1 {
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
        font-size: 82px;
      }
    }

    p {

      font-family: "Montserrat";
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
    }
  }

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 585px;
    box-shadow: 1px 14px 30px rgba(32, 32, 32, 0.2);

    div {
      background-color: #ffff;
      width: 100%;
      padding-left: 17px;
      display: flex;
      align-items: center;
      input {
        padding: 27px 16px;
        height: 100%;
        width: 100%;
        color: #202020;
        font-family: "Montserrat", serif;
        :placeholder {
          color: #202020;
        }
      }
    }

    button {
      font-family: "Montserrat", serif;
      background-color: #ffcb47;
      color: #ffffff;
      font-size: 16px;
      font-weight: 400;
      border: none;
      max-width: 194px;
      width: 100%;
      padding: 27px 16px;
      transition: all 0.3s;

      &:hover {
        background-color: rgb(216, 166, 41);
      }
    }
    button:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  .erro {
    color: red;
  }

  .alert {
    position: fixed;
    top: 16px;
    right: 16px;
    background-color: #16a34a;
    padding: 12px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
    z-index: 1000;
    p {
      font-size: 16px;
      color: #fff;
    }
  }

  @media (max-width: 1000px) {
    padding-top: 50px;
    article {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding-bottom: 37px;
      h1 {
        font-size: 18px;
        strong {
          font-size: 50px;
        }
      }
    }
    form {
      flex-direction: column;

      button{
        max-width: 100%;
        width: 100%;
      }
    }
  }
`;

export const HeroImg = styled.div`
  z-index: 1;
  img {
    display: block;
    width: 100%;
  }

  @media (max-width: 1000px) {
    img {
      display: none;
    }
  }
`;
