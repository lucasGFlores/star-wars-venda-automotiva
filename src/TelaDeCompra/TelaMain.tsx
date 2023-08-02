import CampoDeBusca from "./CampoDeBusca";
import "../styles/TelaMain.css";
import SlidingContainer from "../components/SlidingContainer";
import ElementoAutomovel from "./ElementoAutomovel";
import store from "../Controlers/ControlerForm";
import { observer } from "mobx-react";
import { Component } from "react";
import loadimage from "../image/logoBranco.png"
import logo from '../image/logoStarWars.png'
class TelaMain extends Component {
  async componentWillMount() {
    document.body.classList.add("background-style");
    await store.fetherAutomovel();
  }
  render() {
    console.log(store.automovelSelecionado);
    return <Tela />;
  }
}
const Tela = observer(() => {

  return (
    <>
      <img className="logo" src={logo} />
      {store.automoveis.length > 0 ? (
 <CampoDeBusca className={"campoDeBusca"} />
      ) : ("")}
     

      {/* <div
        style={{
          width: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <div className="card" style={{maxWidth:"300px", maxHeight:"400px",position:"relative",padding:"0"}}>
          <div className="bordered-shape">bababa</div>
          <div className="colorLine" id="l1" />
          <div className="colorLine" id="l2" />
          <div className="colorLine" id="l3" />
        </div>
      </div> */}

      {store.buscarAutomoveis().length > 0 ? (
        <>
          <SlidingContainer>
            {store.buscarAutomoveis().map((automovel, index) => (
              <ElementoAutomovel
                style={{
                  animation: `aparecer ${index * 720}ms ease-in-out`,
                }}
                key={automovel.url}
                url={automovel.url}
                fabricante={automovel.fabricante}
                nome={automovel.nome}
                modelo={automovel.modelo}
                tipo={automovel.tipo}
                velocidade={automovel.velocidade}
                preco={automovel.preco}
              />
            ))}
          </SlidingContainer>
        </>
      ) : !(store.filtro.length > 0) ? (
        <div
          className="loading"
          style={{
            textAlign: "center",
            width: "400px",
            margin: "10% auto",
          }}
        >
          <img
            className="logoLoading"
            style={{ margin: " 10px auto" }}
            alt="gif foda"
            src={loadimage}
            width={100}
          />
          <h2 style={{ fontWeight: "23px", fontSize: "35px", margin: "0" }}>
            Carregando...
          </h2>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <h1 style={{ whiteSpace: "pre-wrap" }}>
            Não existe esse automóvel que busca :( {"\n"} Tente novamente
          </h1>
        </div>
      )}
    </>
  );
});

export default TelaMain;
