import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import LaptopChromebookRoundedIcon from "@mui/icons-material/LaptopChromebookRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import { Card, Grid2, Grow, styled, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const BSB_Tiles = () => {
  const Item = styled(Card)(({ theme }) => ({
    backgroundColor: "#fff",
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#fff",
    display: "flex",
    height: "240px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    cursor: "pointer",
    userSelect: "none",
  }));

  const tileData = [
    {
      text: "Gewerbliche Berufsschule",
      bgColor: "#0077b6",
      icon: <LaptopChromebookRoundedIcon fontSize="large" sx={{ mb: 2 }} />,
      route: "/abt/1",
    },
    {
      text: "Kaufmännische Berufsschule",
      bgColor: "#0077b6",
      icon: <MenuBookRoundedIcon fontSize="large" sx={{ mb: 2 }} />,
      route: "/abt/2",
    },
    {
      text: "Übergang Schule & Beruf",
      bgColor: "#d90429",
      icon: <WorkRoundedIcon fontSize="large" sx={{ mb: 2 }} />,
      route: "/abt/3",
    },
    {
      text: "Hauswirtschaftlich-\nsozialwissenschaftliche Schule",
      bgColor: "#f77f00",
      icon: <ApartmentRoundedIcon fontSize="large" sx={{ mb: 2 }} />,
      route: "/abt/4",
    },
    {
      text: "Berufskollegs",
      bgColor: "#90be6d",
      icon: <TrendingUpRoundedIcon fontSize="large" sx={{ mb: 2 }} />,
      route: "/abt/5",
    },
    {
      text: "Berufliche Gymnasien",
      bgColor: "#43aa8b",
      icon: <SchoolRoundedIcon fontSize="large" sx={{ mb: 2 }} />,
      route: "/abt/6",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  const [hoverIndex, setHoverIndex] = useState(-1);

  const navigateTo = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
      ref={containerRef}
    >
      <Grid2
        container
        spacing={1}
        sx={{ maxWidth: "1200px" }}
        columns={{ xs: 6, sm: 12, md: 18 }}
      >
        {tileData.map((tile, index) => (
          <Grid2
            key={index}
            size={6}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            <Grow in={isVisible}>
              <Item
                onClick={() => navigateTo(tile.route)}
                style={{
                  backgroundColor:
                    hoverIndex === index ? "#083c7c" : tile.bgColor,
                }}
              >
                {tile.icon}
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  {tile.text}
                </Typography>
              </Item>
            </Grow>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default BSB_Tiles;
