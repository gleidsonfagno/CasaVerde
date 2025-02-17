import styled from 'styled-components'

export const Container = styled.header`
    max-width: 1202px;
    margin: 0 auto;

`;

export const MenuBar = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
    ul {
        display: flex;
        flex-direction: row;
        gap:  10px 16px 0;

        li {
            display: flex;
            gap: 16px;
            a {
                font-size: 16px;
                color: #202020;
                font-family: "Montserrat", serif;
            }
        }

        li:last-child {
            padding-left: 42px;
               
        }
    }
`;