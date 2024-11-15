import { Container, Divider, Typography } from "@mui/material";

const BSB_Map = () => {
  return (
    <Container>
      <Typography sx={{ fontSize: 25 }}>
        <strong>Wie findet man uns?</strong>
      </Typography>
      <Divider sx={{ bgcolor: "#bdcddd", width: "50%", mb: 5, mt: 2 }} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.7101270622015!2d8.700804977308723!3d49.035119971356686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47977580f9fbad67%3A0x50be0ea39fcbef52!2sBerufliche%20Schulen%20Bretten!5e0!3m2!1sde!2sde!4v1731595200164!5m2!1sde!2sde"
        width="100%"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};

export default BSB_Map;
