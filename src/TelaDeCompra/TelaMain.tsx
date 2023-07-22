import CampoDeBusca from "./CampoDeBusca";
import "../styles/CampoDeBusca.css";
import SlidingContainer from "../components/SlidingContainer";
import ElementoAutomovel from "./ElementoAutomovel";
import store from "../Controlers/ControlerForm";
import { observer } from "mobx-react";
import { Component } from "react";
class TelaMain extends Component {
  componentWillMount() {
    store.fetherAutomovel()
  }
  render() {
    return(
   <Tela/>)
  }
}
const Tela = observer(() => {


  return (
    <>
      <CampoDeBusca />

      <div
        style={{
          width: "100%",
          overflowX: "auto",
          whiteSpace: "nowrap",
          marginTop: "200px",
        }}
      >
        {store.automoveis.length > 0 ? (
          <SlidingContainer>
            {/* Aqui você pode colocar o conteúdo que deseja deslizar */}
            
              {store.automoveis.map((automovel) => (
                <ElementoAutomovel
                  key={automovel.url}
                  fabricante={automovel.fabricante}
                  nome={automovel.nome}
                  modelo={automovel.modelo}
                  tipo={automovel.tipo}
                  velocidade={automovel.velocidade}
                  preco={automovel.preco}
                />
              ))}
           

            {/* E assim por diante */}
          </SlidingContainer>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h1>Carregando...</h1>
          </div>
        )}
      </div>
    </>
  );
});

export default TelaMain;
function componentWillMount() {
  throw new Error("Function not implemented.");
}

