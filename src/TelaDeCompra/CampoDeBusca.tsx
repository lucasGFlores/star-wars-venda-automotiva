import { observer } from "mobx-react";
import { BiSearchAlt } from "react-icons/bi";
import store from "../Controlers/ControlerForm";
import "../styles/CampoDeBusca.css";
import { CSSProperties } from "react";
interface CampoDeBuscaProps {
  style?: CSSProperties; //para conseguir definir o style do container
  styleInput?: CSSProperties; //para conseguir definir o style do espaço entre os elementos filhos
  className?: String;
  classNameInput?: String;
}
const CampoDeBusca = observer(({ style, styleInput,className,classNameInput }: CampoDeBuscaProps) => {
  return (
    <div
      className={`campo-de-busca ${className ? className : ""}`}
      style={style}
    >
      <input
        className={`busca ${classNameInput ? classNameInput : ""}`}
        style={styleInput}
        type="text"
        value={store.filtro}
        onChange={(e) => (store.filtro = e.target.value)}
        placeholder="O que você está procurando?"
      />
      <BiSearchAlt size={35} />
    </div>
  );
});
export default CampoDeBusca;
