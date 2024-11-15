import {
  Box,
  Container,
  Divider,
  Grid2,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const BSB_News = () => {
  return (
    <Box>
      <Container>
        <Typography sx={{ fontSize: 25 }}>
          <strong>News</strong>
        </Typography>
        <Divider sx={{ bgcolor: "#bdcddd", width: "50%", mb: 5, mt: 2 }} />
        <Grid2 container sx={{ justifyContent: "left" }}>
          <Grid2 sx={{ width: "100%" }}>
            <List>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "150px",
                  mb: 1,
                }}
              >
                <img
                  draggable="false"
                  src="/Horizontal-Placeholder-Image.jpg"
                  style={{
                    width: "30%",
                    height: "100%",
                    objectFit: "cover",
                    marginRight: "30px",
                  }}
                />
                <ListItemText
                  primary={
                    <Link underline="none" sx={{ cursor: "pointer" }}>
                      <strong>Überschrift 2024</strong>
                    </Link>
                  }
                  secondary="„Hier könnte Ihre Werbung stehen“"
                />
              </ListItem>
              <Divider sx={{ mb: 1 }}></Divider>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "150px",
                  mb: 1,
                }}
              >
                <img
                  draggable={"false"}
                  src="/Horizontal-Placeholder-Image.jpg"
                  style={{
                    width: "30%",
                    height: "100%",
                    objectFit: "cover",
                    marginRight: "30px",
                  }}
                />
                <ListItemText
                  primary={
                    <Link underline={"none"} sx={{ cursor: "pointer" }}>
                      <strong>Überschrift 2025</strong>
                    </Link>
                  }
                  secondary="„Hier könnte Ihre Werbung stehen“"
                />
              </ListItem>
              <Divider sx={{ mb: 1 }}></Divider>
              <ListItem
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "150px",
                }}
              >
                <img
                  draggable={"false"}
                  src="/Horizontal-Placeholder-Image.jpg"
                  style={{
                    width: "30%",
                    height: "100%",
                    objectFit: "cover",
                    marginRight: "30px",
                  }}
                />
                <ListItemText
                  primary={
                    <Link underline={"none"} sx={{ cursor: "pointer" }}>
                      <strong>Überschrift 2026</strong>
                    </Link>
                  }
                  secondary="„Hier könnte Ihre Werbung stehen“"
                />
              </ListItem>
            </List>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default BSB_News;
