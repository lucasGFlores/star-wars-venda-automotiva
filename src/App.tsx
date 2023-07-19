import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import espaco from "./image/espaco.png";
import InfoCompradorForm from "./pagamento/InfoCompradorForm";
import EnderecoForm from "./pagamento/EnderecoForm";
import "./styles/Forms.css"
import Pagamento from "./pagamento/Pagamento";
import FormDeCompra from "./pagamento/FormDeCompra";
import TelaMain from "./TelaDeCompra/TelaMain";
function App() {
  
  // ReactDOM.render(<img src={espaco} width={"100%"}></img>, document.body);
  return (
    <BrowserRouter>
      {/* <div className="backgroud" style={{width:"1200"}}> */}
    
        <div className="app">
          <Routes>

            <Route path="/" Component={TelaMain} />
            <Route path="/tudo" Component={FormDeCompra} />
          </Routes>
        {/* </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
