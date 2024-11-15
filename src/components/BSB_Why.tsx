import {
  Box,
  Container,
  Divider,
  Grow,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

const BSB_Why = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <Box>
      <Container
        sx={{ display: "flex", flexDirection: "column" }}
        ref={containerRef}
      >
        <Typography sx={{ fontSize: 25 }}>
          <strong>Was zeichnet die BSB aus?</strong>
        </Typography>
        <Divider sx={{ bgcolor: "#bdcddd", width: "50%", mb: 5, mt: 2 }} />
        <Box
          sx={{
            alignSelf: "start",
            width: "50%",
            mb: 5,
            wordBreak: "break-word",
            whiteSpace: "normal",
          }}
        >
          <Grow in={isVisible}>
            <Paper sx={{ p: 2, borderRadius: 6, bgcolor: "#ddbddd" }}>
              <strong>Vielfältiges Bildungsangebot:</strong> Die BSB Bretten
              bietet ein breites Spektrum an Bildungsgängen, darunter allgemeine
              Hochschulreife, Fachhochschulreife und berufliche Bildung. So
              können Schüler entsprechend ihren Interessen und Stärken den
              passenden Weg wählen und optimal auf ihre zukünftigen
              Herausforderungen vorbereitet werden.
            </Paper>
          </Grow>
        </Box>
        <Box
          sx={{
            alignSelf: "center",
            width: "50%",
            mb: 5,
            wordBreak: "break-word",
            whiteSpace: "normal",
          }}
        >
          <Grow in={isVisible} timeout={1000}>
            <Paper sx={{ p: 2, borderRadius: 6, bgcolor: "#ddcdbd" }}>
              <strong>Moderne Ausstattung und engagierte Lehrkräfte:</strong>{" "}
              Die Schule verfügt über moderne Lehrmittel und eine gut
              ausgestattete Infrastruktur, die das Lernen fördert. Engagierte
              Lehrkräfte unterstützen die Schüler nicht nur fachlich, sondern
              auch persönlich, um eine positive Lernumgebung zu schaffen.
            </Paper>
          </Grow>
        </Box>
        <Box
          sx={{
            alignSelf: "end",
            width: "50%",
            mb: 5,
            wordBreak: "break-word",
            whiteSpace: "normal",
          }}
        >
          <Grow in={isVisible} timeout={2000}>
            <Paper sx={{ p: 2, borderRadius: 6, bgcolor: "#bdddbd" }}>
              <strong>
                Starke Gemeinschaft und zahlreiche Freizeitangebote:{" "}
              </strong>
              Die BSB Bretten legt großen Wert auf ein gutes Miteinander und
              bietet zahlreiche außerunterrichtliche Aktivitäten, wie Sport,
              Musik und kulturelle Veranstaltungen. Dies fördert nicht nur den
              sozialen Zusammenhalt, sondern auch die persönliche Entwicklung
              der Schüler .
            </Paper>
          </Grow>
        </Box>
      </Container>
    </Box>
  );
};

export default BSB_Why;
