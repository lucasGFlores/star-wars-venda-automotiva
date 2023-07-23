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
          // overflowX: "auto",
          // whiteSpace: "nowrap",
          // margin:"0"
      
        }}
      >
        {store.automoveis.length > 0 ? (
          <SlidingContainer>
            
              {store.buscarAutomoveis().map((automovel) => (

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
          </SlidingContainer>
        ) : (
          <div style={{ textAlign: "center", marginTop:"200px" }}>
            <h1>Carregando...</h1>
          </div>
        )}
      </div>
    </>
  );
});

export default TelaMain;

