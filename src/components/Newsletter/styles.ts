import styled from "styled-components";

export const Container = styled.div`

  color: #202020;
  max-width: 585px;


  article {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 37px;
    h1 {
      font-family: "Elsie Swash Caps", serif;
      font-weight: 900;
      font-style: normal;
      font-size: 82px;
    }

    p {
      font-family: "Montserrat", serif;
      font-optical-sizing: auto;
      font-weight: 300;
      font-style: normal;
      font-size: 16px;
      padding-top: 12px;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 585px;
    box-shadow: 1px 3px 100px rgba(32, 32, 32, 0.2);


    div {
      background-color: #ffff;
      width: 100%;
      padding-left: 17px;
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
    }
  }
`;
