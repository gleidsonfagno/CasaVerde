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

        li {
            display: flex;
            gap: 16px;
            font-size: 16px;
            a {
                padding: 0 8px;
                color: #202020;
                font-family: "Montserrat", serif;
            }
        }

    }

    @media (max-width: 805px)  {
        flex-direction: column;
        gap: 10px;
        ul {
            flex-wrap: wrap;
            justify-content: center;
            li {
                font-size: 12px;
                a {
                    padding: 0  12px;
                }
            }
        }
    }
`;