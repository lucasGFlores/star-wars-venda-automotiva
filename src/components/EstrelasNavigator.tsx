import { AiOutlineStar, AiFillStar } from "react-icons/ai";
interface PropsEstrelasNavigator {
    pagina: number;
}
const EstrelasNavigator = ({pagina} : PropsEstrelasNavigator) => {
  let tamanho = pagina < 3 ? 30 : 80;
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        {pagina < 1 ? (
          <AiOutlineStar size={tamanho} color={"#44346D"} />
        ) : (
          <AiFillStar size={tamanho} color={"#DAA5AB"} />
        )}
      </div>

      <div
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          marginTop: "-20px",
        }}
      >
        {pagina < 2 ? (
          <AiOutlineStar size={tamanho} color={"#44346D"} />
        ) : (
          <AiFillStar size={tamanho} color={"#DAA5AB"} />
        )}
      </div>

      <div>
        {" "}
        {pagina < 3 ? (
          <AiOutlineStar size={tamanho} color={"#44346D"}  />
        ) : (
          <AiFillStar size={tamanho} color={"#DAA5AB"} />
        )}
      </div>
    </nav>
  );
};
export default EstrelasNavigator;