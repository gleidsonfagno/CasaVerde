import { Card } from "./styles";

interface  CardProps  {
    name: string,
    preco: number,
    img:  string,
}

export function  Pricecard ({name, preco, img,}: CardProps) {
    return(
        <Card>
            <div>
                <img src={`/${img}.png`} alt="" />
            </div>
            <div>
                <h3>{name} </h3>
                <p>R${preco} </p>
                <a href="/">Comprar <span> &gt; </span></a>
            </div>
        </Card>
    )
}