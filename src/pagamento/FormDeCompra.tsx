import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useState } from "react";
import InfoCompradorForm from "./InfoCompradorForm";
import EnderecoForm from "./EnderecoForm";
import Pagamento from "./Pagamento";
import { observer } from "mobx-react";
import controlerForm from "../Controlers/ControlerForm";
import { set } from "mobx";
import EstrelasNavigator from "../components/EstrelasNavigator";
const FormDeCompra = () => {
  const [pagina, setPagina] = useState(0);
  return (
    <>
      <div
        className={pagina < 3 ? "container" : ""}
        style={{
          paddingTop: "30px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {
          <EstrelasNavigator  pagina={pagina} />
        }

        {renderPagina(pagina, setPagina)}
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
        {/* botão para a página do carro */}
        </>
      );
  }
}
export default FormDeCompra;
