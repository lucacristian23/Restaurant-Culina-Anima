function ContactElement({
  imagePath,
  title,
  mainContent,
  secondContent,
  backgroundColor,
}) {
  return (
    <div
      style={{
        minHeight: "20vh",
        width: "40vw",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: backgroundColor,
      }}
    >
      <img
        src={imagePath}
        alt=""
        style={{ height: "10vh", border: "1px solid black" }}
      />
      <h3>{title}</h3>
      <div
        style={{
          height: "10vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h5>{mainContent}</h5>
        <h5 style={{ visibility: secondContent ? "visible" : "hidden" }}>
          {secondContent}
        </h5>
      </div>
    </div>
  );
}

export default ContactElement;
