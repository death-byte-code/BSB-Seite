type ImageProps = {
  imagePath: string;
  imageText: string;
};

const BSB_DepartmentImage: React.FC<ImageProps> = ({
  imagePath,
  imageText,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "650px",
        overflow: "hidden",
      }}
    >
      <a href="#">
        <img
          src={imagePath}
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
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "80px",
          textAlign: "center",
          userSelect: "none",
        }}
      >
        <p>{imageText}</p>
      </div>
    </div>
  );
};

export default BSB_DepartmentImage;
