export function CardInsa() {
  return (
    <div
      style={{
        width: "350px",
        height: "400px",
        backgroundColor: "red",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "#28232C",
          width: "80%",
          height: "150px",
          right: "0",
        }}
      ></div>
      <div
        style={{
            borderBottom:"25px",
            borderColor:"yellow",
          position: "absolute",
          backgroundColor: "#28232C",
          height: "0",
          width: "20%",
          left: "0",
        }}
      />
    </div>
  );
}
