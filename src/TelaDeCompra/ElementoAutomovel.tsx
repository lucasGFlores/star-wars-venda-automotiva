const ElementoAutomovel = (
  {fabricante, nome, modelo, tipo, velocidade, preco}:
{  fabricante: string,
  nome: string,
  modelo: string,
  tipo: string,
  velocidade: string,
  preco: string}
) => {
  return (
    <div
      style={{
        flexShrink: 0,
        borderRadius: "17px",
        backgroundColor: "#F0EBF4",
        height: "400px",
        width: "350px",
        marginRight: "20px",
        textAlign: "center",
        paddingLeft: "0",
      }}
    >
      <p
        style={{
          wordBreak: "break-all",
          color: "#534B62",
          fontWeight: "bold",
          
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

      <div style={{ display: "flex", flexDirection:"column", marginTop: "30px" }}>
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
