import { Box, Typography } from "@mui/material";
import SubPageLayout from "../components/SubPageLayout";

const HomeEconSocialSciences = () => {
  const teamGrid = [
    { size: { xs: 0, sm: 0, md: 0, lg: 0.5 } },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/src/team_images/odw-1024x1024-190x190.jpeg",
        name: "Christian Odenwald",
        role: "Abteilungsleiter",
        department: "",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/src/team_images/Elke_Henn-190x190.jpg",
        name: "Elke Henn",
        role: "Abteilungsassistenz Altenpflegehilfe",
        department: "",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/src/team_images/Gerd_Geweniger-190x190.jpg",
        name: "Gerd Geweniger",
        role: "Abteilungsassistenz Sozialpädagogik",
        department: "",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/src/team_images/MLR-Mueller-Dominik-1024x1024-190x190.jpeg",
        name: "Dominik Müller",
        role: "Abteilungsassistenz Zweijährige Berufsfachschulen",
        department: "",
      },
    },
    { size: { xs: 0, sm: 0, md: 0, lg: 0.5 } },
  ];

  const text = (
    <Box maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Hauswirtschaftlich – sozialwissenschaftliche Schule
      </Typography>

      <Typography variant="body1" paragraph>
        Die Hauswirtschaftlich – sozialwissenschaftlichen Schulen an den
        Beruflichen Schulen Bretten stehen für Vielfalt, Weiterbildung und ein
        Vorankommen im persönlichen Lebenslauf. In allen Schulbereichen steht
        eine enge Verknüpfung von Theorie und Praxis der jeweiligen beruflichen
        Profile im Vordergrund.
      </Typography>

      <Typography variant="h6" paragraph>
        Wir legen Wert auf Lernen mit Kopf, Herz und Hand!
      </Typography>

      <Typography variant="body1" paragraph>
        Die Zweijährigen Berufsfachschulen mit ihren Profilen Hauswirtschaft und
        Ernährung, Gesundheit und Pflege, Wirtschaft, Elektrotechnik und
        Metalltechnik bieten die Möglichkeit eines mittleren Bildungsabschlusses
        mit beruflicher Grundbildung und vertiefter Allgemeinbildung!
      </Typography>

      <Typography variant="body1" paragraph>
        Die Zweijährigen Berufsfachschulen zur beruflichen Aus- und
        Weiterbildung gliedern sich in drei Schularten:
      </Typography>

      <Typography variant="h6" gutterBottom>
        Zweijährige Berufsfachschule sozialpädagogische Assistenz
      </Typography>
      <Typography variant="body2" paragraph>
        (ehem. „Kinderpflege“) mit anschließendem Anerkennungsjahr führt zur
        staatlichen Anerkennung und befähigt als Zweitkraft in Einrichtungen
        öffentlicher und freier Trägerschaft bei der Erziehung, Bildung, Pflege
        und Betreuung von Kindern eingesetzt zu werden.
      </Typography>
      <Typography variant="body2">
        Dies gilt ebenso für die dreijährige praxisintegrierte Ausbildung zur
        staatlich anerkannten sozialpädagogischen Assistenz (PIA).
      </Typography>

      <Typography variant="h6" gutterBottom>
        Zweijährige Berufsfachschule für Altenpflegehilfe für Migrant*innen
      </Typography>
      <Typography variant="body2" paragraph>
        Führt zu einer staatlichen Anerkennung in der Pflege und Betreuung von
        unterstützungsbedürftigen Menschen unter Anleitung einer Fachkraft.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Berufsfachschule zum Erwerb von Zusatzqualifikationen
      </Typography>
      <Typography variant="body2" paragraph>
        Schwerpunkt Vorbereitung Erzieher*innenabschluss führt zum Einsatz als
        Erstkraft in sozialpädagogischen Einrichtungen öffentlicher und freier
        Trägerschaft.
      </Typography>
    </Box>
  );

  return (
    <div>
      <SubPageLayout
        teamGrid={teamGrid}
        text={text}
        boxColor="#f77f00"
        imagePath="/Werkstatt_01-scaled.jpg"
        imageText="Hauswirtschaftlich-sozialwissenschaftliche Schule"
      />
    </div>
  );
};

export default HomeEconSocialSciences;
