import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
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
