import { observer } from "mobx-react";
import {BiSearchAlt} from "react-icons/bi"
import store from "../Controlers/ControlerForm";
const CampoDeBusca = observer(() => {
  return (
    <div className="campo-de-busca">
      <input
        className="busca"
        type="text"
        value={store.filtro}
        
        onChange={(e) => store.filtro = (e.target.value)}
        placeholder="O que você está procurando?"
      />
      <BiSearchAlt size={35} />
    </div>
  );
})
export default CampoDeBusca;