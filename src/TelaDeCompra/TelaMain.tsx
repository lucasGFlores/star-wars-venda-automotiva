import CampoDeBusca from "./CampoDeBusca";
import "../styles/CampoDeBusca.css";
import "../styles/TelaMain.css";
import SlidingContainer from "../components/SlidingContainer";
import ElementoAutomovel from "./ElementoAutomovel";
import store from "../Controlers/ControlerForm";
import { observer } from "mobx-react";
import { Component } from "react";
import { CardInsa } from "../components/cardInsa";
class TelaMain extends Component {
  componentWillMount() {
    store.fetherAutomovel();
    console.lo;
  }
  render() {
    return <Tela />;
  }
}
const Tela = observer(() => {
  document.body.classList.add("backGround");
  console.log(store.automoveis.map((automovel) => automovel.nome));
  return (
    <>
      <CampoDeBusca />

      <div
        style={{
          width: "100%",
        }}
      >
        <CardInsa />
        {store.buscarAutomoveis().map((automovel, ind) => {
          if(ind !== 0 ) return
          return <ElementoAutomovel
            key={automovel.url}
            fabricante={automovel.fabricante}
            nome={automovel.nome}
            modelo={automovel.modelo}
            tipo={automovel.tipo}
            velocidade={automovel.velocidade}
            preco={automovel.preco}
          />
        })}
        {/* {store.buscarAutomoveis().length ? (
          <SlidingContainer style={{ marginTop: "30px" }}>
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
        ) : store.filtro.length === 0 ? (
          <div style={{ textAlign: "center", marginTop: "200px" }}>
            <h1>Carregando...</h1>
          </div>
        ) : (
          <div style={{ textAlign: "center", marginTop: "200px" }}>
            <h1 style={{ whiteSpace: "pre-wrap" }}>
              Não existe esse automóvel que busca :( {"\n"} Tente novamente
            </h1>
          </div>
        )} */}
      </div>
    </>
  );
});

export default TelaMain;
