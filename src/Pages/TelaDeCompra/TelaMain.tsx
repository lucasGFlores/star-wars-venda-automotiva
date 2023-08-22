import CampoDeBusca from "./CampoDeBusca";
import "../../styles/TelaMain.css";
import SlidingContainer from "../../components/SlidingContainer";
import ElementoAutomovel from "./ElementoAutomovel";
import store from "../../Controlers/ControlerForm";
import { observer } from "mobx-react";
import { Component } from "react";
import loadimage from "../../image/logoBranco.png";
import logo from "../../image/logoStarWars.png";
class TelaMain extends Component {
  async componentWillMount() {
    document.body.classList.add("background-style");
    document.body.style.placeItems = "center";
    await store.fetherAutomovel();
  }
  render() {
    return <Tela />;
  }
}
const Tela = observer(() => {
  return (
    <>
      <div style={{ marginBottom: "60px", marginTop: "-50px" }}>
        <img className="logo" src={logo} />
        {store.automoveis.length > 0 ? (
          <CampoDeBusca className={"campoDeBusca"} />
        ) : (
          ""
        )}
      </div>

      {store.buscarAutomoveis().length > 0 ? (
        <>
          <SlidingContainer>
            {store.buscarAutomoveis().map((automovel, index) => (
              <ElementoAutomovel
                style={{
                  animation: `aparecer ${index * 720}ms ease-in-out`,
                }}
                automovel={automovel}
                key={automovel.url}
               
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
