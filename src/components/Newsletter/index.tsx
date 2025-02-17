import { Container } from "./styles";

export function Newsletter() {
  return (
    <Container>
      <article>
        <h4>Sua casa com as </h4>
        <h1>melhores plantas</h1>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
      </article>

      <div>
        <div>
          {/* <span>
          </span> */}
            <img src="/mail.png" alt="icone de uma carta" />

          <input type="text" placeholder="Insira seu e-mail" />
        </div>
        <button>Assinar newsletter</button>
      </div>
    </Container>
  );
}
