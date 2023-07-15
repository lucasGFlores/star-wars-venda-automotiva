import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Forms from "./components/Forms";
import InfoCompradorForm from "./pagamento/InfoCompradorForm";
import EnderecoForm from "./pagamento/EnderecoForm";
// import './Form.css'
function App() {
  return (
    <>
     
        <BrowserRouter>
         <div className="app">
          <Routes>
            <Route path="/" Component={EnderecoForm} />
            <Route path="/forms" Component={InfoCompradorForm} />
          </Routes>
      </div>

        </BrowserRouter>
    </>
  );
}

export default App;
