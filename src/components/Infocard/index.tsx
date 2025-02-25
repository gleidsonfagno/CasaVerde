import { Card, Description, Lista } from "./styles";

export  function Infocarde(){
    return(
        <Card>
            <div className="img">
                <img src="/InfoCard .png" alt="imagem dasfolhas  de  uma  pplanta cor  verde" />
            </div>

            <Description >
                <h2>
                Como conseguir <br /> 
                <strong>
                minha planta
                </strong>
                </h2>

                <Lista>
                <p>Escolha suas plantas</p>
                <p>Faça seu pedido</p>
                <p>Aguarde na sua casa</p>
                </Lista>
            </Description>
        </Card>
    )
}