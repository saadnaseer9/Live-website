// Init
import React from "react";
import Appbar from "../components/Appbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import Quadralogo from "../assets/images/Quadralogo.svg";

// Component
export default function Header() {
  return (
    <div className="headerdiv">
      <Appbar></Appbar>

      <div className="container">
        <Typography className="Heroheading">
          TATA IPL
          <br />
          2022
        </Typography>
        <Typography className="Heropara">
          Watch exculisively live
          <br />
          on our website
          <br />
        </Typography>
        <div className="btndiv">
          <Button className="herobtn1" sx={{ marginRight: "1%" }}>
            Watch Live
          </Button>
        </div>
      </div>
    </div>
  );
}
