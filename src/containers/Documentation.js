import React from "react";
import Appbar from "../components/Appbar";
import Typography from "@mui/material/Typography";
import Quadralogo from "../assets/images/Quadralogo2.svg";
import CollapseDocumentation from "../components/CollapseDocumentation";
import Grid from "@mui/material/Grid";

const Documentation = () => {
  return (
    <>
      <div className="supportheaderdiv_noborder">
        <Appbar logo={Quadralogo}></Appbar>
        <div className="">
          <Typography className="suppportHeroheading">
            Documentation
          </Typography>
        </div>
      </div>

      <div>
        <Grid
          container
          spacing={1}
          sx={{ paddingTop: "4%", paddingBottom: "4%" }}
        >
          <CollapseDocumentation />
        </Grid>
      </div>
    </>
  );
};

export default Documentation;
