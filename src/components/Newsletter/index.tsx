import { useForm } from "react-hook-form";
import { Container, HeroImg, Main } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";

type data = {
  email: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email  invaído")
    .required("O e-email é obrigatorio"),
});

export function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [submittedEmail, setSubmittedEmail] = useState("");

  const onSubmit = (data: data) => {
    console.log("Dados enviados:", data);
    setSubmittedEmail(data.email);

    
  };

  useEffect(() => {
    if (submittedEmail) {
      const timer = setTimeout(() => {
        setSubmittedEmail("")
      }, 3000);
      return () => clearTimeout(timer);
    }
  },[submittedEmail]);

  return (
    <Main>
      <Container>
        <article>
          <h4></h4>
          <h1>
            Sua casa com as
            <br />
            <strong> melhores plantas</strong>
          </h1>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
        </article>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <span>
              <img src="/mail.png" alt="icone de uma carta" />
            </span>

            <input
              type="email"
              placeholder="Insira seu e-mail"
              {...register("email", { required: true})}
            />
          </div>
          <button type="submit" disabled={!isValid}>
            Assinar newsletter
          </button>
        </form>
        {errors.email && <p className="erro">{errors.email.message}</p>}
        {submittedEmail && (
            <div className="alert">
              <p>
                “Obrigado pela sua assinatura, você receberá nossas novidades no
                e-mail <strong>{submittedEmail}</strong>”.
              </p>
            </div>
        )}
      </Container>

      <HeroImg>
        <img
          src="/imagem-hero.png"
          alt="uma plana  com as folhas verdes dentro de um cesto"
        />
      </HeroImg>
    </Main>
  );
}
 