import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import s from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          justifyContent: "center",
          position: "fixed",
          top: "0",
          zIndex: "100",
          width: "100%",
          backgroundColor: "#fff",
        }}
      >
        <div className={s.headerContent}>
          <div>
            <Link to="/">
              <Button size="small">Main Page</Button>
            </Link>

            <Link to="/news">
              <Button size="small">News</Button>
            </Link>

            <Link to="/profile">
              <Button size="small">Profile</Button>
            </Link>
          </div>

          <Link to="/login">
            <Button variant="outlined" size="small">
              Login
            </Button>
          </Link>
        </div>
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;
