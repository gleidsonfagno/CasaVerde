import { Container, MenuBar } from "./styles";

export function Menu() {
  return (
    <Container>
      <MenuBar>
        <span>
          <img
            src="/logo.png"
            alt="uma folha verde e um nome escrito casa verde"
          />
        </span>
        <ul>
          <li>
            <a href="/">
              Como fazer
            </a>
             <span>/</span>
          </li>
          <li>
            <a href="/Ofertas">
              Ofertas
            </a>
             <span>/</span>
          </li>
          <li>
            <a href="/Depoimentos">
              Depoimentos
            </a>
             <span>/</span>
          </li>
          <li>
            <a href="/Vídeos">
              Vídeos
            </a>
             <span>/</span>
          </li>
          <li>
            <a href="/Meu carrinho">Meu carrinho</a>
          </li>
        </ul>
      </MenuBar>
    </Container>
  );
}
