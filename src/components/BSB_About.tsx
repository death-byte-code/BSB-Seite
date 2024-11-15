import { Box, Container, Divider, Grid2, Typography } from "@mui/material";

const BSB_About = () => {
  return (
    <Box>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box width={"50%"} mr={5}>
          <Typography
            component="div"
            sx={{
              wordBreak: "break-word",
              whiteSpace: "normal",
            }}
          >
            <Box mb={2}>
              <h2>
                <strong>Über die Beruflichen Schulen Bretten</strong>
              </h2>
              <Divider sx={{ bgcolor: "#bdcddd" }} />
            </Box>

            <Box mb={3}>
              <h4>Willkommen!</h4>
              <p>
                Die Beruflichen Schulen Bretten bieten eine praxisnahe
                Ausbildung in verschiedenen Fachrichtungen, um Schüler optimal
                auf die Arbeitswelt vorzubereiten.
              </p>
            </Box>

            <Box mb={3}>
              <h4>Ausbildungsangebote:</h4>
              <p>Wir bieten Ausbildungsberufe in den Bereichen:</p>
              <ul>
                <li>
                  <strong>Industrie und Handwerk:</strong> Technische Berufe
                </li>
                <li>
                  <strong>Wirtschaft und Verwaltung:</strong> Kaufmännische
                  Berufe
                </li>
                <li>
                  <strong>Gesundheits- und Sozialwesen:</strong> Berufe in der
                  Gesundheitsversorgung
                </li>
              </ul>
            </Box>

            <Box mb={3}>
              <h4>Individuelle Förderung:</h4>
              <p>
                Wir fördern eine persönliche Lernatmosphäre mit individueller
                Unterstützung, Berufsorientierung, Nachhilfe und Workshops.
              </p>
            </Box>

            <Box mb={3}>
              <h4>Gemeinschaft:</h4>
              <p>
                Durch Veranstaltungen stärken wir den Zusammenhalt und die
                persönliche Entfaltung unserer Schüler.
              </p>
            </Box>

            <Box mb={3}>
              <h4>Kontakt:</h4>
              <p>
                Besuchen Sie uns für weitere Informationen! Bei Fragen stehen
                wir Ihnen gerne zur Verfügung.
              </p>
            </Box>
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Grid2
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            columns={{ xs: 6, sm: 6, md: 12 }}
          >
            <Grid2 size={12}>
              <img
                src="JungerUkrainerFSJ.jpeg"
                style={{ width: "100%", height: "100%", userSelect: "none" }}
                draggable={"false"}
              ></img>
            </Grid2>
            <Grid2 size={6}>
              <img
                src="240715_ChemieBach_01-2048x1152.jpg"
                style={{ width: "100%", height: "100%", userSelect: "none" }}
                draggable={"false"}
              ></img>
            </Grid2>
            <Grid2 size={6}>
              <img
                src="240716_Abschlussfeier_02.jpeg"
                style={{ width: "100%", height: "100%", userSelect: "none" }}
                draggable={"false"}
              ></img>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
};

export default BSB_About;
