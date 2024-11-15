import {
  Box,
  Container,
  Divider,
  Grid2,
  Link,
  Typography,
} from "@mui/material";
const BSB_Imprint = () => {
  return (
    <Container>
      <Grid2
        container
        spacing={2}
        justifyContent="space-between"
        columns={{ xs: 12, sm: 12 }}
        mb={4}
      >
        <Grid2 columns={{ xs: 12, sm: 4 }} textAlign="center">
          <Typography sx={{ fontSize: 25, mb: 2 }}>
            <strong>BSB</strong>
          </Typography>
          <img
            src="/bsb-logo.png"
            alt="BSB Logo"
            style={{ width: 150, userSelect: "none" }}
            draggable={false}
          />
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 4 }} textAlign={"center"}>
          <Typography sx={{ fontSize: 20 }}>
            <strong>Kontakt</strong>
          </Typography>
          <Typography>Wilhelmstraße 22</Typography>
          <Typography>75015 Bretten</Typography>
          <Typography>Telefon: 0721 936-61600</Typography>
          <Typography>Fax: 0721 936-61789</Typography>
          <Typography>
            E-Mail:{" "}
            <Link href="#" underline="hover">
              sekretariat@bsb-bretten.de
            </Link>
          </Typography>

          <Box sx={{ mt: 5 }}>
            <Typography sx={{ fontSize: 20 }}>
              <strong>Info</strong>
            </Typography>
            <Typography>
              <Link href="#" underline="none">
                AGB
              </Link>
            </Typography>
            <Typography>
              <Link href="#" underline="none">
                Impressum
              </Link>
            </Typography>
            <Typography>
              <Link href="#" underline="none">
                Datenschutzerklärung
              </Link>
            </Typography>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 4 }} textAlign={"center"}>
          <Typography sx={{ fontSize: 20 }}>
            <strong>Abteilungen</strong>
          </Typography>
          <Typography>
            <Link href="#" underline="none">
              Gewerbliche Schule
            </Link>
          </Typography>
          <Typography>
            <Link href="#" underline="none">
              Kaufmännische Berufsschule
            </Link>
          </Typography>
          <Typography>
            <Link href="#" underline="none">
              Übergang Schule & Beruf
            </Link>
          </Typography>
          <Typography>
            <Link href="#" underline="none">
              Hauswirtschaftlich-sozialwissenschaftliche Schule
            </Link>
          </Typography>
          <Typography>
            <Link href="#" underline="none">
              Berufskollegs
            </Link>
          </Typography>
          <Typography>
            <Link href="#" underline="none">
              Berufliche Gymnasien
            </Link>
          </Typography>
        </Grid2>
      </Grid2>

      <Divider sx={{ width: "100%", backgroundColor: "black", my: 2 }} />

      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography>© Die bessere Webagentur haha</Typography>
      </Box>
    </Container>
  );
};

export default BSB_Imprint;
