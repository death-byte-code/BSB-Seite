import SubPageLayout from "../components/SubPageLayout";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const SchoolToWorkTransition = () => {
  const teamGrid = [
    { size: { xs: 0, sm: 0, md: 0, lg: 1 } },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc:
          "/src/team_images/84B094DE-C3E2-4F92-85C8-1AD6DE1E4FF7-1024x1024-190x190.jpeg",
        name: "Sven Hölig",
        role: "Abteilungsleiter",
        department: "",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/src/team_images/btr-1024x1024-190x190.jpeg",
        name: "Erik Böttcher",
        role: "Abteilungsassistenz",
        department: "",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/src/team_images/rue-1024x1024-190x190.jpeg",
        name: "Ann-Katrin Rück",
        role: "Abteilungsassistentin",
        department: "",
      },
    },
    { size: { xs: 0, sm: 0, md: 0, lg: 1 } },
  ];

  const text = (
    <Box>
      <Typography variant="h4" gutterBottom>
        Übergang Schule und Beruf
      </Typography>

      <Typography variant="body1" paragraph>
        Auf dieser Seite finden Sie alle Informationen zu den Schularten:
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary="AVdual – Ausbildungsvorbereitung dual"
            secondary="Ein Programm, das auf die Integration in eine Ausbildung vorbereitet und duale Lernformen fördert."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Schule International – Informationen für zugewanderte Schülerinnen und Schüler (VABO)"
            secondary="Informationen und Programme für Schülerinnen und Schüler, die aus dem Ausland zugewandert sind."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Anmeldeportal für zugewanderte Schülerinnen und Schüler (VABO) des Landkreises Karlsruhe"
            secondary="Das offizielle Anmeldeportal für zugewanderte Schülerinnen und Schüler des Landkreises Karlsruhe."
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <SubPageLayout
        teamGrid={teamGrid}
        text={text}
        boxColor="#d90429"
        imagePath="/Innenhof_02-1-scaled.jpg"
        imageText="Übergang Schule und Beruf"
      />
    </div>
  );
};

export default SchoolToWorkTransition;
