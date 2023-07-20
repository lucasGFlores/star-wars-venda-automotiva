import CampoDeBusca from "./CampoDeBusca";
import "../styles/CampoDeBusca.css";
import SlidingContainer from "../components/SlidingContainer";

const TelaMain = () => {
  return (
    <>
      <CampoDeBusca />

      <div
        style={{
          width: "100%",
          overflowX: "auto",
          whiteSpace: "nowrap",
          marginTop: "200px",
        }}
      >
        <SlidingContainer>
          {/* Aqui você pode colocar o conteúdo que deseja deslizar */}
          <div
            style={{
              flexShrink: 0,
              width: "300px",
              height: "200px",
              marginRight: "10px",
              backgroundColor: "red",
            }}
          >
            Item 1
          </div>
          <div
            style={{
              flexShrink: 0,
              width: "300px",
              height: "200px",
              marginRight: "10px",
              backgroundColor: "blue",
            }}
          >
            Item 2
          </div>
          <div
            style={{
              flexShrink: 0,
              width: "300px",
              height: "200px",
              marginRight: "10px",
              backgroundColor: "green",
            }}
          >
            Item 3
          </div>

          <div
            style={{
              flexShrink: 0,
              width: "300px",
              height: "200px",
              marginRight: "10px",
              backgroundColor: "red",
            }}
          >
            Item 1
          </div>
          <div
            style={{
              flexShrink: 0,
              width: "300px",
              height: "200px",
              marginRight: "10px",
              backgroundColor: "blue",
            }}
          >
            Item 2
          </div>
          <div
            style={{
              flexShrink: 0,
              width: "300px",
              height: "200px",
              marginRight: "10px",
              backgroundColor: "green",
            }}
          >
            Item 3
          </div>
          <div
            style={{
              flexShrink: 0,
              width: "300px",
              height: "200px",
              marginRight: "10px",
              backgroundColor: "red",
            }}
          >
            Item 1
          </div>
          <div
            style={{
              flexShrink: 0,
              width: "300px",
              height: "200px",
              marginRight: "10px",
              backgroundColor: "blue",
            }}
          >
            Item 2
          </div>
          <div
            style={{
              flexShrink: 0,
              width: "300px",
              height: "200px",
              marginRight: "10px",
              backgroundColor: "green",
            }}
          >
            Item 3
          </div>
          <div
            style={{
              flexShrink: 0,
              width: "300px",
              height: "200px",
              marginRight: "10px",
              backgroundColor: "red",
            }}
          >
            Item 1
          </div>
          <div
            style={{
              flexShrink: 0,
              width: "300px",
              height: "200px",
              marginRight: "10px",
              backgroundColor: "blue",
            }}
          >
            Item 2
          </div>
          <div
            style={{
              flexShrink: 0,
              width: "300px",
              height: "200px",
              marginRight: "10px",
              backgroundColor: "green",
            }}
          >
            Item 3
          </div>

          {/* E assim por diante */}
        </SlidingContainer>
      </div>
    </>
  );
};

export default TelaMain;
