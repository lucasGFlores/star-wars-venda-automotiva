import t16 from "../autImages/T-16_skyhopper_-_SW_20.webp";
import tbomber from "../autImages/TIE_Bomber.webp";
import sandCrawler from "../../autImages/Sand Crawler.jpeg";
import credito from "../../image/credito.png";
import "../../styles/TelaDescricao.css";
import yoda from "../../image/babyYodaSad.png";
import store from "../../Controlers/ControlerForm";
import { formatpreco } from "../../Resources/Resources";
const telaDescricao = () => {
  document.body.classList.add("background-style");

  if (store.automovelSelecionado === null) {
    return (
      <>
        <h1 style={{ whiteSpace: "pre-wrap", color: "#F3BA3E" }}>
          {"Aconteceu um erro!!! \n você não selecionou um carro?!"}
        </h1>
        <img src={yoda} height={"300px"}/>
      </>
    );
  }
  document.body.style.placeItems = "flex-start";
  
  const auto = store.automovelSelecionado;
  return (
    <div className="telaDescricao">
      <div //caixa das imagens
        className="containerImages"
      >
        <img src={sandCrawler} height={"225px"} width={"32%"} id="imgLeft" />
        <img src={sandCrawler} height={"225px"} width={"32%"} id="imgTop" />
        <img src={sandCrawler} height={"225px"} width={"32%"} id="imgRight" />
      </div>

      <div //container das caixas
        style={{
          display: "flex",
          placeItems: "center",
          justifyContent: "space-around",
          margin: " auto",
        }}
      >
        <div //caixa da descrição do produto
          className="containerDescription"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr 1fr",
            padding: "10px 25px",
            width: "855px",
            height: "520px",
            backgroundColor: "#1A161C",
            borderRadius: "25px",
            border: "2px solid #C374B2",
          }}
        >
          <div
            style={{
              gridColumnStart: "1",
              gridColumnEnd: "span 3",
              textAlign: "start",
              justifyContent: "flex-start",
            }}
          >
            <p style={{ fontSize: "35px", fontWeight: "bolder", margin: "0" }}>
              Sand Crawler
            </p>
            <p style={{ fontSize: "26px", fontWeight: "500", margin: "0" }}>
              Digger Craw
            </p>
          </div>
          <Characteristics type={"Classe"} char={auto?.tipo ?? "???"} />
          <Characteristics
            type={"Velocidade máxima"}
            char={auto?.velocidade ?? "???"}
          />
          <Characteristics type="Tamanho" char={auto?.tamanho ?? "???"} />
          <Characteristics
            type={"Quantidade de \nPilotos"}
            char={auto?.qtgPilotos ?? "???"}
            style={{ gridRowStart: "3", whiteSpace: "pre-wrap" }}
          />
          <Characteristics
            type={"Quantidade de \npassageiros"}
            char={auto?.qtgPassageiros ?? "???"}
            style={{ gridRowStart: "3", whiteSpace: "pre-wrap" }}
          />
          <Characteristics
            type={"Capacidade de \ncarga"}
            char={auto.carga ?? "???"}
            style={{ gridRowStart: "4", whiteSpace: "pre-wrap" }}
          />
        </div>

        <div //caixa do preço
          className="containerPrice"
          style={{
            placeItems: "center",
            width: "23%",
            aspectRatio: "1/1",
            backgroundColor: "#1A161C",
            borderRadius: "40px",
            border: "2px solid #C374B2",
            padding: "10px 0px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={credito} height={"47px"}></img>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "62px",
                color: "#F3BA3E",
                margin: "0",
              }}
            >
             {formatpreco(auto?.preco) ?? "???"}
            </p>
          </div>
          <button
            style={{
              borderRadius: "25px",
              backgroundColor: "#8652AF",
              height: "25%",
              aspectRatio: "2/1",
              fontSize: "30px",
              marginTop: "calc(20% + 20px)",
            }}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};
function Characteristics({
  type,
  char,
  style,
}: {
  type: string;
  char: string;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ textAlign: "start", justifyContent: "flex-start", ...style }}>
      <p style={{ fontSize: "24px", margin: "0", color: "#EDD2EE" }}>{type}</p>
      <p style={{ fontSize: "28px", fontWeight: "500", margin: "0" }}>{char}</p>
    </div>
  );
}
export default telaDescricao;
