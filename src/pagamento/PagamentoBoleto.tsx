import qrcode from "../image/qrcode.png";
 interface pagamentoBoletoProps {
   setPagina: React.Dispatch<React.SetStateAction<number>>;
 }
const PagamentoBoleto = ({setPagina} : pagamentoBoletoProps) => {
    return (
      <div style={{ width: "447px", height: "408", margin: "30px" }}>
        <div
          className="select"
          style={{
            width: "220px",
            height: "220px",
            marginBottom: "25px",
            margin: "auto",
          }}
        >
          <img style={{ margin: "10px" }} src={qrcode} width={200}></img>
        </div>
        <button
        onClick={() => setPagina((pagina) => pagina+1)}
          style={{ width: "160px", height: "40px", padding: "5px" }}
          className="select"
        >
          Próximo
        </button>
      </div>
    );
}
export default PagamentoBoleto;