import SubPageLayout from "../components/SubPageLayout";
import { Box, Typography } from "@mui/material";

const VocationalHighSchools = () => {
  const teamGrid = [
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/team_images/neu-1024x1024-190x190.jpeg",
        name: "Andrea Neumann",
        role: "Abteilungsleiter",
        department: "",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/team_images/rol-1024x1024-190x190.jpeg",
        name: "Frank Roll",
        role: "Stellvertretender Abteilungsleiter, Oberstufenberater",
        department: "",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/team_images/hel-1024x1024-190x190.jpeg",
        name: "Dr. Janina Hellmann",
        role: "Abteilungsassistentin",
        department: "",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/team_images/luz-1024x1024-190x190.jpeg",
        name: "Lena Lutz",
        role: "Abteilungsassistentin",
        department: "",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/team_images/LPH-1024x1024-190x190.jpeg",
        name: "Stephanie Lampoltshammer",
        role: "Abteilungsassistentin",
        department: "",
      },
    },
  ];

  const text = (
    <Box>
      <Typography variant="h4" gutterBottom color="#43aa8b">Berufliches Gymnasium</Typography>
      <Typography variant="body1" paragraph>
        Das berufliche Gymnasium der dreijährigen Aufbauform wird an den
        Beruflichen Schulen Bretten als Technisches Gymnasium mit den
        Fachrichtungen Informationstechnik, Technik und Management, Gestaltungs-
        und Medientechnik und als Sozial- und gesundheitswissenschaftliches
        Gymnasium mit der Fachrichtung Gesundheit und Biologie angeboten. Das
        Berufliche Gymnasium bereitet naturwissenschaftlich-technisch,
        informationstechnisch und sozial- und gesundheitswissenschaftlich
        interessierte junge Menschen sowohl auf das Studium an einer Hochschule
        als auch in besonderer Weise auf die Berufswelt vor.{" "}
      </Typography>
    </Box>
  );

  return (
    <div>
      <SubPageLayout
        teamGrid={teamGrid}
        text={text}
        boxColor="#43aa8b"
        imagePath="/Neubau_01.jpg"
        imageText="Berufliches Gymnasium"
      />
    </div>
  );
};

export default VocationalHighSchools;
