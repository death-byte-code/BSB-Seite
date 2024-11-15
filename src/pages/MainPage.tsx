import { Box } from "@mui/material";
import BSB_Image from "../components/BSB_Image";
import BSB_Tiles from "../components/BSB_Tiles";
import BSB_About from "../components/BSB_About";
import BSB_Map from "../components/BSB_Map";
import BSB_News from "../components/BSB_News";
import BSB_Team from "../components/BSB_Team";
import BSB_Why from "../components/BSB_Why";
const MainPage = () => {
  const teamGrid = [
    { size: { xs: 0, sm: 0, md: 0, lg: 1.5 } },

    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "src/team_images/rdn-1024x1024-190x190.jpeg",
        name: "Nicole Roeder",
        role: "Schulleiterin",
        department: "-",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "src/team_images/foos-1024x1024-190x190.jpeg",
        name: "Klaus-Martin Foos",
        role: "Stellvertretender Schulleiter",
        department: "-",
      },
    },
    { size: { xs: 0, sm: 0, md: 0, lg: 1.5 } },

    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "src/team_images/kempf-1-1024x1024-190x190.jpeg",
        name: "Matthias Kempf",
        role: "Abteilungsleiter",
        department: "Gewerbliche Schule",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc:
          "src/team_images/84B094DE-C3E2-4F92-85C8-1AD6DE1E4FF7-1024x1024-190x190.jpeg",
        name: "Sven Hölig",
        role: "Abteilungsleiter",
        department: "Kaufmännische Schule und Übergang Schule & Beruf",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "src/team_images/odw-1024x1024-190x190.jpeg",
        name: "Christian Odenwald",
        role: "Abteilungsleiter",
        department: "Hauswirtschaftliche Schule",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "src/team_images/heilig-1024x1024-190x190.jpeg",
        name: "Gerd Heilig",
        role: "Abteilungsleiter",
        department: "Berufskolleg",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "src/team_images/neu-1024x1024-190x190.jpeg",
        name: "Andrea Neumann",
        role: "Abteilungsleiterin",
        department: "Berufliches Gymnasium",
      },
    },
  ];

  return (
    <>
      <Box>
        <BSB_Image />
      </Box>
      <Box sx={{ p: 5 }}>
        <BSB_Tiles />
      </Box>
      <Box sx={{ bgcolor: "#e5ebf1", p: 5 }}>
        <BSB_About />
      </Box>
      <Box sx={{ p: 5 }}>
        <BSB_Why />
      </Box>
      <Box sx={{ bgcolor: "#e5ebf1", p: 5 }}>
        <BSB_Team teamGrid={teamGrid} />
      </Box>
      <Box sx={{ bgcolor: "none", p: 5 }}>
        <BSB_News />
      </Box>
      <Box sx={{ bgcolor: "#e5ebf1", p: 5 }}>
        <BSB_Map />
      </Box>
    </>
  );
};

export default MainPage;
