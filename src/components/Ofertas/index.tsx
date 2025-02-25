import { useEffect, useState } from "react";
import { Pricecard } from "../Pricecard";
import { Ofertascard, Sectionoferstas } from "./styles";

// Tipagem correta para os produtos
interface Produto {
  name: string;
  preco: number;
  img: string;
  ordem: number; // Adicionado para garantir que a ordem exista
}

export function Ofertas() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw?utm_medium=email&_hsenc=p2ANqtz-9LeH1CtmmWA1OFzs8EkxUr4spYAaqw-gyPHoArHrP2QaKMdoVB6pWd4FlrZzGDE2ygILkftjMuddVYVVhgill1hUex0NV3v_zXBIvsdUlXo5oa0KM&_hsmi=231361624&utm_content=231361624&utm_source=hs_automation'
    )
      .then((response) => response.json())
      .then((data) => {
        // Filtrando os itens válidos, agora verificando 'ordem'
        const produtosFiltrados = data.filter(
          (item: Produto) => item.ordem !== undefined && item.ordem !== null
        );
        setProdutos(produtosFiltrados); // Atualiza o estado com os produtos válidos
        console.log(produtosFiltrados);
      })
      .catch((error) => console.error('Erro ao buscar os dados:', error));
  }, []);

  return (
    <Sectionoferstas>
      <div>
        <h2>Conheça nossas <br />
        <strong>ofertas</strong></h2>
      </div>
    <Ofertascard>
      
      {produtos.map((produto, index) => (
        <Pricecard
          key={index}
          name={produto.name}
          preco={produto.preco}
          img={produto.img}
        />
      ))}
    </Ofertascard>
    </Sectionoferstas>
  );
}
