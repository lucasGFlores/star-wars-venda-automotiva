import PagamentoCartao from "./PagamentoCartao";
import PagamentoBoleto from "./PagamentoBoleto";
import boleto from "../image/boleto.png"
import cartao from "../image/cartao.png";
import { useState } from "react";

interface EnderecoFormProps {
  pagina: number;
  setPagina: React.Dispatch<React.SetStateAction<number>>;
}

const Pagamento = ({pagina,setPagina} : EnderecoFormProps) => {
 const [view, setView] = useState("cartao");
    return (
      <>
        <nav style={{ marginTop: "25px" }}>
          <button
            onClick={() => setView("boleto")}
            className={`select ${view === "boleto" ? "selected" : ""}`}
            style={{
              padding: 0,
              margin: 0,
              width: "100px",
              height: "80px",
              marginRight: "110px",
            }}
          >
            <img width={70} src={boleto} />
          </button>
          <button
            style={{
              padding: 0,
              margin: 0,
              width: "110px",
              height: "80px",
            }}
            className={`select ${view === "cartao" ? "selected" : ""}`}
            onClick={() => setView("cartao")}
          >
            <div style={{ padding: "10px" }}>
              <img width={80} src={cartao} />
            </div>
          </button>
        </nav>

        {view === "boleto" ? (
          <PagamentoBoleto />
        ) : (
          <div style={{ margin: "8px 40px" }}>
            <PagamentoCartao pagina={pagina} setPagina={setPagina} />
          </div>
        )}
      </>
    );
}

export default Pagamento;