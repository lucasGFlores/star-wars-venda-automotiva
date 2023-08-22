import t16 from "../../autImages/T-16_skyhopper_-_SW_20.webp";
import tbomber from "../../autImages/TIE_Bomber.webp";
import sandCrawler from "../../autImages/Sand Crawler.jpeg";
import "../../styles/cardElement.css";
import credito from "../../image/credito.png";
import store, { Automovel } from "../../Controlers/ControlerForm";
import { Link } from "react-router-dom";
import { formatpreco } from "../../Resources/Resources";
const ElementoAutomovel = ({
  automovel,

  style,
  className,
}: {
  automovel: Automovel;
  style?: React.CSSProperties;
  className?: string;
}) => {
  const imageList: any = {
    "Sand Crawler": sandCrawler,
    "T-16 skyhopper": t16,
    "X-34 landspeeder":
      "https://www.motortrend.com/uploads/sites/21/2020/04/007-Junkyard-Empire-Replica-Star-Wars-X-34-Landspeeder.jpg",

    "TIE/LN starfighter":
      "https://images-cdn.fantasyflightgames.com/filer_public/b6/3a/b63a70fa-2175-48d5-9145-90fb0edb1f5d/swz14_preview1.jpg",

    Snowspeeder:
      "https://imtoys.com.br/wp-content/uploads/2021/09/AMT_Snowspeeder_13.jpg",

    "TIE bomber": tbomber,
    "AT-AT":
      "https://cdna.artstation.com/p/assets/images/images/005/705/920/large/ismael-marquez-atat.jpg",
    "AT-ST":
      "https://static.wikia.nocookie.net/starwars/images/2/22/AT-ST-TCGbyAdamLane.jpg",

    "Storm IV Twin-Pod cloud car":
      "https://swrpggm.com/wp-content/uploads/2021/10/CloudCar_FE.png",

    "Sail barge":
      "https://cdn.thisiswhyimbroke.com/images/vintage-star-wars-jabba-sail-barge-640x533.jpg",
  };
  const {
    fabricante,
    nome,
    modelo,
    preco,
  }: { fabricante: string; nome: string; modelo: string; preco: string } =
    (automovel);



  return (
    <Link to={"/descricao"}>
      <div
        onClick={() => {
          console.log(automovel);
          store.setAutomovelSelecionado({
            ...automovel,
          });
        }}
        className={`card ${className ? className : ""}`}
        style={{
          position: "relative",
          padding: "0",
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
              style={{
                marginTop: "20px",
                borderRadius: "15px",
                marginLeft: "65px",
              }}
              src={imageList[nome]}
              width={"270px"}
              height={"155px"}
            />
            <div
              style={{ width: "290px", marginTop: "15px", marginLeft: "45px" }}
            >
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
                  fontSize: `${nome.length > 23 ? "24px" : "30px"}`,
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
                  fontSize: "20px",
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
           
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "-20px",
                }}
              >
                <img src={credito} height={"40px"}></img>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "50px",
                    color: "#F3BA3E",
                  }}
                >
                  {preco === "unknown" ? "90.000" : `${formatpreco(preco)}`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="colorLine" id="l1" />
        <div className="colorLine" id="l2" />
        <div className="colorLine" id="l3" />
      </div>
    </Link>
  );
};
export default ElementoAutomovel;
