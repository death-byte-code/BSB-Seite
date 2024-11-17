import { Box, Link, Typography } from "@mui/material";
import SubPageLayout from "../components/SubPageLayout";

const VocationalTradeSchool = () => {
  const teamGrid = [
    { size: { xs: 0, sm: 0, md: 0, lg: 1.5 } },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/team_images/kempf-1-1024x1024-190x190.jpeg",
        name: "Matthias Kempf",
        role: "Abteilungsleiter",
        department: "",
      },
    },
    {
      size: { xs: 3, sm: 3, md: 3, lg: 1 },
      member: {
        imageSrc: "/team_images/Knoedler_Amelie-1024x1024-190x194.jpeg",
        name: "Amelie Knödler",
        role: "Abteilungsassistentin",
        department: "",
      },
    },
    { size: { xs: 0, sm: 0, md: 0, lg: 1.5 } },
  ];

  const text = (
    <Box>
      <Typography variant="h4" gutterBottom color={"#0069b4"}>
        Gewerbliche Schule
      </Typography>

      <Typography paragraph>
        Die beruflichen Schulen Bretten begleiten jährlich über hundert
        Schülerinnen und Schüler zu einem der vielen möglichen
        Ausbildungsabschlüsse. Dabei legen wir großen Wert darauf, dass die
        Verzahnung zwischen Ausbildungsbetrieben und Berufsschule mit Leben
        gefüllt ist. Das Zusammenspiel von Theorie und Praxis sowie
        überfachlicher Qualifikation bildet in Kombination mit vertiefter
        Allgemeinbildung den Schlüssel zum Erfolg.
      </Typography>

      <Typography paragraph>
        Die <strong>Fachschule für Technik</strong> bietet für Berufstätige mit
        abgeschlossener Berufsausbildung die Möglichkeit, sich auf eine
        Tätigkeit im mittleren Management vorzubereiten oder sich für die
        berufliche Selbstständigkeit zu qualifizieren. Mit dem Bestehen der
        Abschlussprüfung zum/zur{" "}
        <strong>Staatlich geprüften Techniker/Technikerin</strong> wird die{" "}
        <strong>Fachhochschulreife</strong> erworben.
      </Typography>

      <Typography paragraph>
        Die Beruflichen Schulen Bretten bieten die Fachschule für Technik in der
        Fachrichtung <strong>Maschinentechnik</strong> in Vollzeit an. Die
        Ausbildung dauert zwei Schuljahre.
      </Typography>

      <Typography>
        Für Betriebe im Handwerk oder Unternehmen ohne eine eigene Lehrwerkstatt
        bieten wir die <strong>einjährige Berufsfachschule Metall</strong> an.
        In dieser wird das erste Lehrjahr (Grundstufe) in schulischer Vollzeit
        (Theorie und Praxis) absolviert.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Wichtige Termine:
      </Typography>

      <Typography paragraph>
        <strong>Letzter Schultag der gewerblichen Berufsschule:</strong>{" "}
        Dienstag, den <strong>23.07.2024</strong>
      </Typography>

      <Typography paragraph>
        <strong>Erste Schultage im Schuljahr 24/25:</strong>
        <ul>
          <li>
            Ausbildungsjahr: Montag, den <strong>09.09.2024</strong>, 13:00 Uhr
          </li>
          <li>
            Ausbildungsjahr: Dienstag, den <strong>10.09.2024</strong>, 13:00
            Uhr
          </li>
          <li>
            Ausbildungsjahr: Mittwoch, den <strong>11.09.2024</strong>, 13:00
            Uhr
          </li>
        </ul>
      </Typography>

      <Typography paragraph>
        Über den ersten Schultag der 4. Ausbildungsjahre werden Sie spätestens
        zu Beginn der ersten Schulwoche informiert, da hier die Unterrichtstage
        noch nicht feststehen.
      </Typography>

      <Typography paragraph>
        Sollten Sie noch Azubis für das kommende Schuljahr eingestellt haben,
        die noch nicht an der Berufsschule angemeldet sind, so holen Sie dies
        bitte zeitnah nach. Sie erleichtern uns die (Stunden- und
        Klassen-)Planung dadurch immens.
      </Typography>

      <Typography paragraph>
        Das entsprechende Anmeldeformular finden Sie auf unserer{" "}
        <Link href="http://www.bsb-bretten.de" target="_blank">
          Homepage
        </Link>
        . Das ausgefüllte Formular (inkl. Masernimmunitätsnachweis) können Sie
        uns über folgende Mailadresse zukommen lassen:{" "}
        <strong>sekretariat@bsb-bretten.de</strong>.
      </Typography>
    </Box>
  );

  return (
    <div>
      <SubPageLayout teamGrid={teamGrid} text={text} boxColor="#0069b4" imagePath="/A-Bau_01-scaled.jpg" imageText="Gewerbliche Schule" />
    </div>
  );
};

export default VocationalTradeSchool;
