import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Slide from "@mui/material/Slide";
import {
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface Props {
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export default function Navbar(props: Props) {
  const navItems = [
    {
      label: "Unsere Schule",
      submenu: [
        "Schularten",
        "Wir über uns",
        "Kollegium",
        "Schulleitung",
        "Sekretariat",
        "Hausmeisterteam",
      ],
    },
    { label: "Aktuelles" },
    {
      label: "Anmeldung",
      submenu: [
        "Berufsschulen",
        "Einjährige Berufsfachschule - Metall",
        "Fachschule für Technik",
        "AVDUAL/VABO",
        "Zweijährige Berufsfachschulen - Mittlere Reife",
        "Berufsfachschulen zur Aus- und Weiterbildung",
        "Aufbaukurs Gruppenleitung",
        "BKFH",
        "Anmeldung BG & BK",
      ],
    },
    {
      label: "Service",
      submenu: [
        "Flyer",
        "Downloads",
        "Pausenzeiten",
        "Orientierungspraktikum",
        "Schulpraktikum",
        "Verbesserungsmanagement",
        "Beschwerdemanagement",
      ],
    },
    {
      label: "BSB-Intern",
      submenu: [
        "Webuntis",
        "PAEDML",
        "Schülermoodle",
        "Auslandsaktivitäten an den BSB",
      ],
    },
    { label: "Speiseplan" },
    { label: "Kontakt", submenu: ["Impressum", "Datenschutzerklärung"] },
  ];
  const drawerWidth = 240;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [openIndex, setOpenIndex] = useState(null);

  const handleDrawerClick = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (isLargeScreen) {
      setMobileOpen(false);
    }
  }, [isLargeScreen]);

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, userSelect: "none" }}>
        Berufliche Schulen Bretten
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <div key={item.label}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleDrawerClick(index)}
                sx={{
                  "&:hover": {
                    backgroundColor: "#1565c0",
                  },
                }}
              >
                <ListItemText primary={item.label} />
                {item.submenu ? (
                  openIndex === index ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : null}
              </ListItemButton>
            </ListItem>
            {/* Collapse für Subitems */}
            {item.submenu && (
              <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.submenu.map((subitem) => (
                    <ListItemButton
                      key={subitem}
                      sx={{
                        pl: 4,
                        "&:hover": {
                          backgroundColor: "#1565c0",
                        },
                      }}
                    >
                      <ListItemText primary={subitem} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [anchorEl, setAnchorEl] = useState(null);
  const [submenuItems, setSubmenuItems] = useState([]);

  const handleClick = (event: any, submenu: any) => {
    setAnchorEl(event.currentTarget);
    setSubmenuItems(submenu || []);
  };

  const handleClose = () => {
    console.log("clsoe");
    setAnchorEl(null);
  };

  const navigateTo = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HideOnScroll>
        <AppBar component="nav">
          <Toolbar sx={{ bgcolor: "#003d7a", userSelect: "none" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: "none" } }}
            >
              <MenuRoundedIcon />
            </IconButton>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "none", lg: "block" },
                bgcolor: "none",
              }}
            >
              <img
                src="/bsb-logo-white.png"
                width={48}
                height={48}
                onClick={() => navigateTo("/")}
                style={{ display: "flex" }}
              ></img>
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "none", md: "none", lg: "block" },
                ml: 2,
              }}
            >
              Berufliche Schulen Bretten
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "none", lg: "flex" },
              }}
            >
              {navItems.map((item) => (
                <div key={item.label}>
                  <Button
                    sx={{
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#1565c0",
                      },
                    }}
                    onClick={(event) =>
                      item.submenu ? handleClick(event, item.submenu) : null
                    }
                  >
                    {item.label}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                      sx: { backgroundColor: "#003d7a" },
                    }}
                  >
                    {submenuItems.map((subitem) => (
                      <MenuItem
                        key={subitem}
                        onClick={handleClose}
                        sx={{
                          whiteSpace: "normal",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "#1565c0",
                          },
                        }}
                      >
                        {subitem}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={(_, reason) =>
            reason === "backdropClick" && setMobileOpen(false)
          }
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#003d7a",
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
