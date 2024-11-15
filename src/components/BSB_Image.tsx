const BSB_Image = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "1100px",
        overflow: "hidden",
      }}
    >
      <a href="#">
        <img
          src="Innenhof_02-1-scaled.jpg"
          className="img-fluid"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt="Innenhof"
        />
      </a>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "80px",
          textAlign: "center",
          userSelect: "none",
        }}
      >
        <p>Willkommen an den Beruflichen Schulen Bretten</p>
      </div>
    </div>
  );
};

export default BSB_Image;
