import { Box, Typography } from "@mui/material";
import SubPageLayout from "../components/SubPageLayout";

const VocationalColleges = () => {
  const teamGrid = [
    { size: { xs: 0, sm: 0, md: 0, lg: 0.5 } },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/src/team_images/heilig-1024x1024-190x190.jpeg",
        name: "Gerd Heilig",
        role: "Abteilungsleiter",
        department: "",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/src/team_images/KUT-Kuttler-Jonas-1024x1024-190x190.jpg",
        name: "Jonas Kuttler",
        role: "Abteilungsassistenz Altenpflegehilfe",
        department: "",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/src/team_images/kull-1024x1024-190x190.jpeg",
        name: "Tamara Kull",
        role: "Abteilungsassistenz Sozialpädagogik",
        department: "",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/src/team_images/IMG_6784-1024x1024-190x190.jpeg",
        name: "Simone Diehlmann",
        role: "Abteilungsassistenz Zweijährige Berufsfachschulen",
        department: "",
      },
    },
    { size: { xs: 0, sm: 0, md: 0, lg: 0.5 } },
  ];

  const text = (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Berufskollegs
      </Typography>

      <Typography variant="body1" paragraph>
        Eine komplexere Arbeitswelt und der gesellschaftliche Wandel führen zu
        neuen Ansprüchen und Herausforderungen. Diese nimmt das Berufskolleg in
        einer Verknüpfung von Theorie und Praxis an. Das Profil(-fach) spielt
        dabei eine wesentliche Rolle für eine entsprechende berufliche
        Qualifikation. Gleichzeitig wird eine erweiterte allgemeine Bildung
        vermittelt.
      </Typography>

      <Typography variant="body1" paragraph>
        Neben der Fachhochschulreife kann in jedem Profil ein Assistent
        (beispielsweise „Staatlich geprüfter Assistent“ bzw. „Staatlich geprüfte
        Assistentin“) erworben werden.
      </Typography>

      <Typography variant="h6">Fachhochschulreife</Typography>
      <Typography variant="body2">
        Die Fachhochschulreife kann als zusätzliche Qualifikation erworben
        werden.
      </Typography>

      <Typography variant="h6">Assistentenqualifikation</Typography>
      <Typography variant="body2">
        In jedem Profil kann auch ein Abschluss als "Staatlich geprüfter
        Assistent" erreicht werden.
      </Typography>
    </Box>
  );

  return (
    <div>
      <SubPageLayout
        teamGrid={teamGrid}
        text={text}
        boxColor="#90be6d"
        imagePath="/Innenhof_02-1-scaled.jpg"
        imageText="Berufskolleg"
      />
    </div>
  );
};

export default VocationalColleges;
