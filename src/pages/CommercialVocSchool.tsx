import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import SubPageLayout from "../components/SubPageLayout";

const CommercialVocSchool = () => {
  const text = (
    <Box>
      <Typography variant="h4" gutterBottom color="#0077b6">
        Herzlich Willkommen in der Kaufmännischen Berufsschule
      </Typography>

      <Typography variant="h6" gutterBottom>
        <strong>Entschuldigung oder Freistellung notwendig?</strong>
      </Typography>
      <Typography>
        Nutzen Sie bitte folgende E-Mail-Adresse:{" "}
        <a href="mailto:kbs@bsb-bretten.de">kbs@bsb-bretten.de</a>
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
        <strong>Wann findet der Unterricht im Schuljahr 2024/2025 statt?</strong>
      </Typography>
      <Typography>
        Der Unterricht in der kaufmännischen Berufsschule beginnt – mit Ausnahme
        des Blocks – in der zweiten Schulwoche.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
        Kaufmännische Ausbildungsgänge
      </Typography>

      <List>
        <ListItem>
          <ListItemText
            primary="Einzelhändler/-in / Verkäufer/-in:"
            secondary={
              <Box>
                <Typography variant="body2">
                  1. Ausbildungsjahr (W1KE): Dienstag und Freitag
                </Typography>
                <Typography variant="body2">
                  2. Ausbildungsjahr (W2KE): Montag und Donnerstag
                </Typography>
                <Typography variant="body2">
                  3. Ausbildungsjahr (W3KE): Mittwoch und Freitag
                </Typography>
              </Box>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Industriekaufmann/-frau:"
            secondary={
              <Box>
                <Typography variant="body2">
                  Erstes Ausbildungsjahr: Montag + Freitag
                </Typography>
                <Typography variant="body2">
                  Zweites und drittes Ausbildungsjahr: Blockunterricht
                </Typography>
              </Box>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Kaufleute für IT-Systemmanagement & Kaufleute für Digitalisierungsmanagement:"
            secondary={
              <Box>
                <Typography variant="body2">
                  Erstes Ausbildungsjahr (W1SY/DM): Mittwoch und Dienstag
                  (A-Woche)
                </Typography>
                <Typography variant="body2">
                  Zweites Ausbildungsjahr (W2SY/DM): Donnerstag und Freitag
                  (A-Woche)
                </Typography>
                <Typography variant="body2">
                  Drittes Ausbildungsjahr (W3SY/DM, W3DM): Montag und Dienstag
                  (B-Woche)
                </Typography>
              </Box>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="Gewerbliche Ausbildungsgänge in der kaufm. Abteilung"
            secondary={
              <Box>
                <Typography variant="body2">
                  Fachinformatiker/-in Anwendungsentwicklung:
                </Typography>
                <Typography variant="body2">
                  1. Ausbildungsjahr (E1FA): Mittwoch + Dienstag (B-Woche)
                </Typography>
                <Typography variant="body2">
                  2. Ausbildungsjahr (E2FA): Donnerstag + Freitag (A-Woche)
                </Typography>
                <Typography variant="body2">
                  3. Ausbildungsjahr (E3FA): Montag + Dienstag (A-Woche)
                </Typography>
                <Typography variant="body2">
                  Fachinformatiker Systemintegration:
                </Typography>
                <Typography variant="body2">
                  1. Ausbildungsjahr (E1FS): Mittwoch + Dienstag (A-Woche)
                </Typography>
                <Typography variant="body2">
                  2. Ausbildungsjahr (E2FS): Donnerstag + Freitag (B-Woche)
                </Typography>
                <Typography variant="body2">
                  3. Ausbildungsjahr (E3FS): Montag + Dienstag (A-Woche)
                </Typography>
              </Box>
            }
          />
        </ListItem>
      </List>

      <Divider sx={{ marginY: 3 }} />

      <Typography variant="h6" gutterBottom>
        <strong>Weitere Informationen</strong>
      </Typography>
      <Typography variant="body1">
        Die Ausbildungsgänge Fachinformatiker/in Digitale Vernetzung sowie Daten
        und Prozessanalyse sind in Planung.
      </Typography>

      <Typography variant="h6" sx={{ marginTop: 3 }} gutterBottom>
        <strong>Wann sind Ferien? Was ist eine A- oder B-Woche?</strong>
      </Typography>

      <Typography variant="body1">
        Schulkalender Schuljahr 2024/2025: Erstes Halbjahr, Zweites Halbjahr
      </Typography>

      <Typography variant="h6" sx={{ marginTop: 3 }} gutterBottom>
        <strong>Wie melde ich einen Auszubildenden an?</strong>
      </Typography>
      <Typography variant="body1">
        Hier finden Sie alle Anmeldeformulare zum Download, bitte schicken Sie
        es ausgefüllt an unsere Schule zurück.
      </Typography>

      <Typography variant="h6" sx={{ marginTop: 3 }} gutterBottom>
        <strong>Wann ist eine Aufnahme in der kaufmännischen Berufsschule möglich?</strong>
      </Typography>
      <Typography variant="body1">
        Ihr Ausbildungsbetrieb, bei dem Sie Ihren Ausbildungsvertrag haben,
        meldet Sie an der zuständigen Berufsschule an.
      </Typography>

      <Typography variant="h6" sx={{ marginTop: 3 }} gutterBottom>
        <strong>Wie lange dauert die Ausbildung?</strong>
      </Typography>
      <Typography variant="body1">
        Die Ausbildungsdauer ist abhängig vom Ausbildungsberuf. Im dualen
        Ausbildungssystem ergänzen sich die Lernorte „Betrieb“ und
        „Berufsschule“ in ihren theoretischen und praktischen Lernorten ideal.
      </Typography>

      <Typography variant="h6" sx={{ marginTop: 3 }} gutterBottom>
        <strong>Welche Zusatzqualifikationen und Weiterbildungsmöglichkeiten neben der
          kaufmännischen Berufsschule sind möglich?</strong>
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Hauptschüler"
            secondary="Mittlerer Bildungsabschluss nach der abgeschlossenen Berufsausbildung durch die Zusatzqualifikation „9+3“."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Realschüler"
            secondary="Fachhochschulreife nach der abgeschlossenen Berufsausbildung und Zusatzunterricht mit Zusatzprüfung."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Industriemechaniker"
            secondary="IHK-Zusatzqualifikation als Elektrofachkraft für festgelegte Tätigkeiten."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Wirtschaftsinformatik"
            secondary="Zusatzqualifikation für IT-Systemkaufleute und Informatikkaufleute."
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="KMK Fremdsprachenzertifikat" secondary="" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Handelsassistent" secondary="" />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Zusatzqualifikation Künstliche Intelligenz (Plan) (Anmeldung)"
            secondary=""
          />
        </ListItem>
      </List>

      <Typography variant="h6" sx={{ marginTop: 3 }} gutterBottom>
        <strong>Welche Fächer werden angeboten?</strong>
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Deutsch" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Gemeinschaftskunde" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Berufsbezogene Schwerpunktfächer" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Projektkompetenz" />
        </ListItem>
      </List>
    </Box>
  );

  const teamGrid = [
    { size: { xs: 0, sm: 0, md: 0, lg: 1 } },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc:
          "/team_images/84B094DE-C3E2-4F92-85C8-1AD6DE1E4FF7-1024x1024-190x190.jpeg",
        name: "Sven Hölig",
        role: "Abteilungsleiter",
        department: "",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/team_images/btr-1024x1024-190x190.jpeg",
        name: "Erik Böttcher",
        role: "Abteilungsassistenz",
        department: "",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/team_images/rue-1024x1024-190x190.jpeg",
        name: "Ann-Katrin Rück",
        role: "Abteilungsassistentin",
        department: "",
      },
    },
    { size: { xs: 0, sm: 0, md: 0, lg: 1 } },
  ];

  return (
    <div>
      <SubPageLayout
        teamGrid={teamGrid}
        text={text}
        boxColor="#0069b4"
        imagePath="/B-Bau_01-scaled.jpg"
        imageText="Kaufmännische Schule"
      />
    </div>
  );
};

export default CommercialVocSchool;
