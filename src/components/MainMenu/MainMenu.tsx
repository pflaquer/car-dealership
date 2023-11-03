import {
  Call,
  Facebook,
  Google,
  LinkedIn,
  Mail,
  Twitter,
  Menu,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Link,
} from "@mui/material";
import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CountrySelect from "./CountrySelect";
import cmc from "./logo_.webp";
import { NavLink } from "react-router-dom";
import { bgcolor } from "@mui/system";

function MainMenu() {
  return (
    <>
      <AppBar
        elevation={0}
        sx={{ bgcolor: "#000000", display: { xs: "none", md: "block" } }}
      >
        <>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                height: "2rem",
                flexGrow:{md: 3.4, lg: 2},
                bgcolor: "#000000",
                clipPath: "polygon(0 0, 100% 0, 96% 100%, 0% 100%)",
                mr: {md: 0, lg: -5},
                px: 4,
              }}
            />
            <Box
              sx={{
                height: "2rem",
                bgcolor: "#282a3e",
                clipPath: "polygon(4% 0, 100% 0, 95% 100%, 0 100%)",
                px: 4,
                pr: 8,
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexGrow: 1.5,
              }}
            >
              <Link
                href="tel:4257870811"
                sx={{
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                <Call sx={{ color: "#ea1f1f", fontSize: "1.2rem" }} />
                425 787 0811
              </Link>
              <Link
                href="mailto:sales@autoreconcollision.com"
                sx={{
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                <Mail sx={{ color: "#ea1f1f", fontSize: "1rem" }} />{" "}
                autoreconcollision.com
              </Link>
            </Box>
            <Box
              sx={{
                height: "2rem",
                bgcolor: "#e11d1d",
                clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
                //   py: 0.5,
                px: 4,
                display: "flex",
                alignItems: "center",
                gap: 2,
                ml: -31,
                flexGrow: 1 / 2,
                justifyContent: "flex-end",
              }}
            >
              <Link
                href="https://facebook.com"
                sx={{
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                <Facebook sx={{ color: "#fff", fontSize: "1.2rem" }} />
              </Link>
              <Link
                href="https://twitter.com"
                sx={{
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                {" "}
                <Twitter sx={{ color: "#fff", fontSize: "1.2rem" }} />
              </Link>

              <Link
                href="https://google.com"
                sx={{
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                {" "}
                <Google sx={{ color: "#fff", fontSize: "1.2rem" }} />
              </Link>

              <Link
                href="https://linkedin.com"
                sx={{
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                {" "}
                <LinkedIn sx={{ color: "#fff", fontSize: "1.2rem" }} />
              </Link>
            </Box>
          </Box>

          <Box sx={{ 
        display: "flex", 
        pb: 2, 
        bgcolor: "#000000" 
      }}>
            <Box
              sx={{
                height: "2rem",
                clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
                py: 1.2,
                px: 4,
                pr: 8,
                display: "flex",
                alignItems: "center",
                gap: 0,
                flexGrow:{md: 3.4, lg: 2},
                justifyContent: "flex-start",
                overflow: "visible",
                bgcolor: "#000000",
              }}
            >

              <NavLink to="/" style={{ backgroundColor: "#000000" }}>
                <img
                  src={cmc}
                  className="autologo"
                  
                  
                />
              </NavLink>

    
        </Box>


            
            <Box
              sx={{
                bgcolor: "#000000",
                width: "100%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                gap: 1,
                pr: 1
              }}
            >
              
              <NavLink
                to="/used-cars"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#ed1f1f" : "initial",
                })}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: { xs: "auto", lg: "15vw" },
                    textTransform: "capitalize",
                    color: "#bdbdbd",
                    ":hover": {
                      color: "#ed1f1f",
                    },
                    border: "1px solid #bdbdbd",
                  }}
                >
                  Used Autos
                </Button>
              </NavLink>
              <NavLink
                to="/repair" target="_blank"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#ed1f1f" : "initial",
                })}
              >
                <Button
                  sx={{
                    width: { xs: "auto", lg: "15vw" },
                    textTransform: "capitalize",
                    color: "#bdbdbd",
                    ":hover": {
                      color: "#ed1f1f",
                    },
                    border: "1px solid #bdbdbd",
                  }}
                >
                  Auto Repair Services
                </Button>
              </NavLink>
              <NavLink
                to="/admin"
                style={({ isActive }) => ({
                  backgroundColor: isActive ? "#ed1f1f" : "initial",
                })}
              >
                <Button
                  variant="outlined"
                  sx={{
                    width: { xs: "auto", lg: "15vw" },
                    textTransform: "capitalize",
                    color: "#bdbdbd",
                    ":hover": {
                      color: "#ed1f1f",
                    },
                    border: "1px solid #bdbdbd",
                  }}
                >
                  Admin Login
                </Button>
              </NavLink>
            </Box>
          </Box>
        </>
      </AppBar>
      <AppBar sx={{ bgcolor: "#fff", display: { md: "none" } }}>
        <MenuDrawer />
      </AppBar>
    </>
  );
}


type Anchor = "left";

function MenuDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      // sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "10rem",
        }}
      >
        <Button sx={{ width: "100%" }}>
          <NavLink
            to="/"
            style={{ width: "100%" }}
          >
            <img
              src={cmc}
              width={128}
              height={128}
              
            />
          </NavLink>
        </Button>
      </Box>
      <List>
        {[
          "Used Vehicles",
          "Repairs",
          "About Us",
          "Contact Us",
        ].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              ":hover": {
                color: "#ed1f1f",
              },
            }}
          >
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                height: { sx: "1.5rem", md: "2rem" },
                bgcolor: "#282a3e",
                clipPath: "polygon(0 0, 100% 0, 93% 100%, 0 100%)",
                px: 1.5,
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexGrow: 1,
              }}
            >
              <Link
                href="tel:4257870811"
                sx={{
                  fontSize: "0.65rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                <Call sx={{ color: "#ea1f1f", fontSize: "0.7rem" }} />
                (425)-787-0811
              </Link>
              <Link
                href="tel:4257870811"
                sx={{
                  fontSize: "0.65rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                <Mail sx={{ color: "#ea1f1f", fontSize: "0.6rem" }} />
                dealer.autoreconcollision.com
              </Link>
            </Box>

            <Box
              sx={{
                height: { sx: "1.5rem", md: "2rem" },
                bgcolor: "#e11d1d",
                clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
                px: 1.5,
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexGrow: 1 / 3,
                ml: -10,
                justifyContent: "flex-end",
              }}
            >
              <Link
                href="https://facebook.com"
                sx={{
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                <Facebook sx={{ color: "#fff", fontSize: "0.9rem" }} />
              </Link>
              <Link
                href="https://twitter.com"
                sx={{
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                {" "}
                <Twitter sx={{ color: "#fff", fontSize: "0.9rem" }} />
              </Link>

              <Link
                href="https://google.com"
                sx={{
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                {" "}
                <Google sx={{ color: "#fff", fontSize: "0.9rem" }} />
              </Link>

              <Link
                href="https://linkedin.com"
                sx={{
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  textDecoration: "none",
                  color: "#fff",
                  ":hover": {
                    color: "#ea1f1f",
                  },
                }}
              >
                <LinkedIn sx={{ color: "#fff", fontSize: "0.9rem" }} />
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: 'center',
              px: 2,
              py:0.1
            }}
          >
            <Button >
              <NavLink to="/">
                <img
                  src={cmc}
                  width={96}
                  className="autologo"
                />
              </NavLink>
            </Button>
            <Button onClick={toggleDrawer(anchor, true)} >
              <Menu sx={{ color: "#e91f1f" }} />
            </Button>
          </Box>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default MainMenu;
