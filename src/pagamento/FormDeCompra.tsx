import { useState } from "react";
import InfoCompradorForm from "./InfoCompradorForm";
import EnderecoForm from "./EnderecoForm";
import Pagamento from "./Pagamento";
import EstrelasNavigator from "../components/EstrelasNavigator";
import store from "../Controlers/ControlerForm";
import "../styles/Forms.css"; // Importe o arquivo CSS com as animações

const FormDeCompra = () => {
  document.body.classList.add("background-style");
  const [pagina, setPagina] = useState(0);
  const [showPage, setShowPage] = useState(true); // Novo estado para controlar a visibilidade da página

  const handleNextPage = () => {
    setShowPage(false);
    setTimeout(() => {
      setPagina((pagina) => pagina + 1);
      setShowPage(true);
    }, 750); 
  };

  return (
    <>
      <div
        className={`${pagina < 3 ? "container" : ""} ${showPage ? "fadeIn" : "fadeOut"}`} // Aplica a classe de animação conforme a visibilidade da página
        style={{
          paddingTop: "30px",
          paddingLeft: "20px",
          paddingRight: "20px",
          margin: "5px auto",
          overflow: "visible",
        }}
      >
        {<EstrelasNavigator pagina={pagina} />}
        {renderPagina(pagina, handleNextPage)}
      </div>
    </>
  );
};


function renderPagina(
  pagina: number,
  setPagina: React.Dispatch<React.SetStateAction<number>>
) {
  switch (pagina) {
    case 0:
      return <EnderecoForm pagina={pagina} setPagina={setPagina} />;
    case 1:
      return <InfoCompradorForm pagina={pagina} setPagina={setPagina} />;
    case 2:
      return <Pagamento pagina={pagina} setPagina={setPagina} />;
    case 3:
      return (
        <>
          <h1>Compra concluida !!! :D</h1>
          <button className="select" style={{marginBottom:0, backgroundColor:"transparent", width:"180px",height:"47px",whiteSpace:"nowrap"}}>
            voltar para compra
          </button>
        </>
      );
  }
}
export default FormDeCompra;
