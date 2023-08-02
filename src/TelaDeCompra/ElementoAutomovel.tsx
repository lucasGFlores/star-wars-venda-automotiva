import imagem from "../autImages/Sand Crawler.jpeg";
import "../styles/cardElement.css";
import { CSSProperties } from "react";
const ElementoAutomovel = ({
  fabricante,
  nome,
  modelo,
  tipo,
  velocidade,
  preco,
  style,
  className,
}: {
  fabricante: string;
  nome: string;
  modelo: string;
  tipo: string;
  velocidade: string;
  preco: string;
  style?: React.CSSProperties;
  className?: string;
}) => {
  const IMAGEM_SAND_CRAWLER = "../autImages/Sand Crawler.jpeg";
 const animation = style?.MozAnimation
  return (
    <div
      className={`card ${className ? className : ""}`}
      style={{
        position: "relative",
        padding: "0",
        animation,
      }}
    >
      <div className="bordered-shape">
        <div
          key={nome}
          style={{
            flexShrink: 0,
            borderRadius: "17px",
            height: "400px",
            width: "350px",
            marginTop: "15px",
            textAlign: "center",
            paddingLeft: "0",
            ...style,
          }}
        >
          <img
            style={{ marginTop: "5px", borderRadius: "15px" }}
            src={"../autImages/Sand Crawler.jpeg"}
            width={"190px"}
            height={"90px"}
          />
          <div style={{ width: "290px", marginTop: "7px", marginLeft: "14px" }}>
            <p
              style={{
                width: "80%",
                overflow: "hidden",
                whiteSpace: "pre-wrap",
                marginTop: "18px",
                wordBreak: "normal",
                color: "#534B62",
                fontWeight: "bold",
                margin: "auto",
                fontSize: "15px",
                marginBottom: "0",
              }}
            >
              {fabricante}
            </p>
            <p
              style={{
                color: "#DDD4EF",
                fontWeight: "bold",
                fontSize: `${nome.length > 23 ? "22px" : "24px"}`,
                margin: "0",
              }}
            >
              {nome}
            </p>
            <p
              style={{
                fontWeight: "bold",
                color: "#BFAFE0",
                margin: "0",
              }}
            >
              {modelo}
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "8px",
              }}
            >
              <p
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "25px",
                  color: "#CFBFF3",
                  margin: "auto",
                }}
              >
                {tipo}
              </p>
              <p
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  fontSize: "25px",
                  color: "#CFBFF3",
                  margin: "auto",
                }}
              >
                {`${velocidade}/km`}
              </p>
            </div>
            <p
              style={{
                textAlign: "center",
                marginTop: "0px",
                fontWeight: "bold",
                fontSize: "30px",
                color: "#F3BA3E",
              }}
            >
              {preco === "unknown" ? "90.000" : `${preco}`}
            </p>
          </div>
        </div>
      </div>
      <div className="colorLine" id="l1" />
      <div className="colorLine" id="l2" />
      <div className="colorLine" id="l3" />
    </div>
  );
};
export default ElementoAutomovel;
