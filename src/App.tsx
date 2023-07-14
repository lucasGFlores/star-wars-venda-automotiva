import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Forms from "./components/Forms";
import InfoCompradorForm from "./pagamento/InfoCompradorForm";
// import './Form.css'
function App() {
  return (
    <>
     
        <BrowserRouter>
         <div className="app">
          <Routes>
            <Route path="/" Component={InfoCompradorForm} />
            <Route path="/forms" Component={Forms} />
          </Routes>
      </div>

        </BrowserRouter>
    </>
  );
}

export default App;
