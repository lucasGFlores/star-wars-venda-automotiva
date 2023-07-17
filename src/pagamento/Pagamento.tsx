
import PagamentoCartao from "./pagamentoCartao.tsx";
import { observable, observe, set } from "mobx";
import boleto from "../image/boleto.png"
import { observer } from "mobx-react";
import { useState } from "react";
const Pagamento = () => {
 const [view, setView] = useState("boleto");
    return (
      <div className="container">
        <nav>
          <button
            onClick={() => setView("boleto")}
            className={`select ${view === "boleto" ? "selected" : ""}`}
            style={{ padding: 0, width: "100px", height: "80px" }}
          >
            <img width={70} src={boleto} />
          </button>
          <button
          onClick={() => setView("cartao")}></button>
        </nav>
        {view === "boleto" ? "wip" : <PagamentoCartao />}
      </div>
    );
}

export default Pagamento;