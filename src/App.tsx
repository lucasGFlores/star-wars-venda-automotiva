import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Forms from "./components/Forms";
import InfoCompradorForm from "./pagamento/InfoCompradorForm";
import EnderecoForm from "./pagamento/EnderecoForm";

import Pagamento from "./pagamento/Pagamento";
function App() {
  return (
    <>
     
        <BrowserRouter>
         <div className="app">
          <Routes>
            <Route path="/" Component={EnderecoForm} />
            <Route path="/forms" Component={InfoCompradorForm} />
            <Route path="/pagamento" Component={Pagamento} />
          </Routes>
      </div>

        </BrowserRouter>
    </>
  );
}

export default App;
