const ElementoAutomovel = (
  {fabricante, nome, modelo, tipo, velocidade, preco,style}:
{  fabricante: string,
  nome: string,
  modelo: string,
  tipo: string,
  velocidade: string,
  preco: string
  style?: React.CSSProperties}
) => {
  return (
    <div
      style={{
        flexShrink: 0,
        borderRadius: "17px",
        backgroundColor: "#F0EBF4",
        height: "400px",
        width: "350px",
       
        textAlign: "center",
        paddingLeft: "0",
        ...style
      }}
    >
      <p
        style={{
          width:"80%",
          overflow: "hidden",
          whiteSpace: "pre-wrap",
        marginTop: "10px",
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
          color: "#1B1725",
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
        style={{ display: "flex", flexDirection: "column", marginTop: "30px" }}
      >
        <p
          style={{
            marginTop: "10px",
            fontWeight: "bold",
            fontSize: "25px",
            color: "#534B62",
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
            color: "#534B62",
            margin: "auto",
          }}
        >
          {`${velocidade}/km`}
        </p>
      </div>
      <p
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontWeight: "bold",
          fontSize: "30px",
          color: "#1B1725",
        }}
      >
        {preco}
      </p>
    </div>
  );
};
export default ElementoAutomovel;
