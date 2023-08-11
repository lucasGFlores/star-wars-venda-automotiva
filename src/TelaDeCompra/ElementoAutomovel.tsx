import imagem from "../autImages/Sand Crawler.jpeg";
import tbomber from "../autImages/TIE_Bomber.webp";
import t16 from "../autImages/T-16_skyhopper_-_SW_20.webp";
import simbolo from "../image/simbolo.png";
const ElementoAutomovel = ({
  fabricante,
  nome,
  modelo,
  tipo,
  velocidade,
  preco,
  style,
}: {
  fabricante: string;
  nome: string;
  modelo: string;
  tipo: string;
  velocidade: string;
  preco: string;
  style?: React.CSSProperties;
}) => {
 
  const formatpreco = () => {
    const formatpreco = preco.match(/^(\d{2,3})(\d{3})$/);

    if (formatpreco) {
      console.log(formatpreco);
      const format = formatpreco[1] + "." + formatpreco[2];
      return format;
    }
    return preco
  };
  return (
    <div
      key={nome}
      style={{
        flexShrink: 0,
        borderRadius: "17px",
        backgroundColor: "#110F10",
        height: "400px",
        width: "350px",

        textAlign: "center",
        paddingLeft: "0",
        ...style,
      }}
    >
      <img
        style={{ marginTop: "9px", borderRadius: "15px" }}
        src={imageList[nome]}
        width={"220px"}
        height={"120px"}
      />
      <p
        style={{
          width: "80%",
          overflow: "hidden",
          whiteSpace: "pre-wrap",
          marginTop: "18px",
          wordBreak: "normal",
          color: "#7A7387",
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
          color: "#A48D97",
          fontWeight: "bold",
          fontSize: "25px",
          margin: "0",
        }}
      >
        {nome}
      </p>
      <p
        style={{
          fontWeight: "bold",
          color: "#332E3C",
          margin: "0",
        }}
      >
        {modelo}
      </p>

      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "15px" }}
      >
        <p
          style={{
            marginTop: "10px",
            fontWeight: "bold",
            fontSize: "25px",
            color: "#827894",
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
            color: "#827894",
            margin: "auto",
          }}
        >
          {`${velocidade}/km`}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {preco === "unknown" ? (
          ""
        ) : (
          <img
            src={simbolo}
            height={25}
            style={{ marginBottom: "20px", marginRight: "7px" }}
          />
        )}

        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            fontWeight: "bold",
            fontSize: "30px",
            color: "#A48D97",
          }}
        >
          {formatpreco()}
        </p>
      </div>
    </div>
  );
};
export default ElementoAutomovel;
