import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, border: "2px solid black " }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CryptoCurency Tracker
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Typography variant="body1">Made with ⚡ by Prateek Verma</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
        <div className="sidebar">
          <List>
            <ListItem>
              <div className="icons">
                <Link to="/">
                  <Button>
                    <HomeIcon />
                    <Typography style={{ margin: "10px" }}>Home</Typography>
                  </Button>
                </Link>
                <Link to="/cryptocurrencies">
                  <Button>
                    <CurrencyBitcoinIcon />
                    <Typography style={{ margin: "10px" }}>
                      Crypto Currency
                    </Typography>
                  </Button>
                </Link>
                <Link to="/news">
                  <Button>
                    <NewspaperIcon />
                    <Typography style={{ margin: "10px" }}>News</Typography>
                  </Button>
                </Link>
                <Link to="/aboutme">
                  <Button>
                    <EngineeringOutlinedIcon />
                    <Typography style={{ margin: "10px" }}>About Me</Typography>
                  </Button>
                </Link>
              </div>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
