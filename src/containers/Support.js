import React from "react";
import Appbar from "../components/Appbar";
import Typography from "@mui/material/Typography";
import Quadralogo from "../assets/images/Quadralogo2.svg";
import Collapse from "../components/Collapse";
import Grid from "@mui/material/Grid";

const Support = () => {
  return (
    <>
      <div className="supportheaderdiv">
        <Appbar logo={Quadralogo}></Appbar>
        <div className="">
          <Typography className="suppportHeroheading">
            LES SUPPORTS PEDAGOGIQUES
          </Typography>
        </div>
      </div>

      <div>
        <Grid
          container
          spacing={1}
          sx={{ paddingTop: "4%", paddingBottom: "4%" }}
        >
          <Collapse></Collapse>
        </Grid>
      </div>
    </>
  );
};

export default Support;
