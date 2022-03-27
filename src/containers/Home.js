// Init
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Services from "../components/Services";
import Icon7 from "../assets/images/icon7.jpg";
import Icon8 from "../assets/images/icon8.jpg";
import Icon9 from "../assets/images/icon9.jpg";
import Arrow from "../assets/images/arrow.svg";
import Footerimg from "../assets/images/Sport.svg";

// Importing Components
import Header from "../components/Header";

// Home Component
export default function Home() {
  let data = [
    {
      text: "Watch all the top tier cricket from around the world in High Definition on our website, now available from your local Television provider all around the globe.Our website is the only 24x7 live cricket channel in the USA, with several hundred days of live cricket covered annually. Willow has exclusive agreements to be the official broadcaster of The International Cricket Council (ICC), Indian Premier League (IPL), England Cricket Board, Cricket Australia, Cricket South Africa, West Indies Cricket Board, Sri Lanka Cricket, Bangladesh Cricket Board, Pakistan Cricket Board, Zimbabwe Cricket, Pakistan Super League and others.The channel is available on most Satellite and Cable Networks for a simple monthly subscription fee or as part of Sports Packages or South Asian packages.",
    },
    // {
    //   icon: Icon2,
    //   heading: "Textes prérédigés à forte valeur ajoutée",
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius justo et scelerisque varius. Nullam mollis augue et facilisis blandit. Morbi sollicitudin",
    // },
    // {
    //   icon: Icon3,
    //   heading: "Adaptation des textes suivant les spécificités ",
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius justo et scelerisque varius. Nullam mollis augue et facilisis blandit. Morbi sollicitudin",
    // },
    // {
    //   icon: Icon4,
    //   heading: "Génération automatique des documents",
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius justo et scelerisque varius. Nullam mollis augue et facilisis blandit. Morbi sollicitudin",
    // },
    // {
    //   icon: Icon5,
    //   heading: "Sélection de fabricants avec lien vers leur site",
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius justo et scelerisque varius. Nullam mollis augue et facilisis blandit. Morbi sollicitudin",
    // },
    // {
    //   icon: Icon6,
    //   heading: "Prix très compétitifs",
    //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius justo et scelerisque varius. Nullam mollis augue et facilisis blandit. Morbi sollicitudin",
    // },
  ];
  let cardData = [
    {
      icon: Icon7,
    },
    {
      icon: Icon8,
    },
    {
      icon: Icon9,
    },
  ];
  return (
    <>
      <Header />
      <div>
        <div className="home_heading">
          <Typography className="home_heading_typo">
            Watch live cricket from all around the Globe
          </Typography>
        </div>

        <Grid container spacing={1} className="grid">
          {data.map((items) => (
            <>
              <Grid xs={12} sm={12} md={12} className="homegrid">
                <img src={items.icon}></img>
                <Typography className="grid_heading">
                  {items.heading}
                </Typography>
                <Typography className="grid_para">{items.text}</Typography>
              </Grid>
            </>
          ))}
        </Grid>
        <div className="btn_div">
          <Button className="home_btn">Watch live</Button>
        </div>
        <Divider
          variant="middle"
          sx={{ background: "#DCD6D1", margin: "0 10% 0 10%" }}
        />
      </div>
      <div>
        <div className="home_heading">
          <Typography className="home_heading_typo" sx={{ marginBottom: "5%" }}>
            Test Cricket{" "}
          </Typography>
        </div>
        <Grid container spacing={1} className="grid_btm">
          {cardData.map((items) => (
            <>
              <Grid xs={12} sm={12} md={4} className="">
                <img
                  src={items.icon}
                  style={{ width: "400px", height: "300px" }}
                ></img>
              </Grid>
            </>
          ))}
        </Grid>
      </div>
      <div className="servicesdiv">
        <div>
          <Typography className="carouselheading">
            Watch live IPL 2022
          </Typography>
        </div>
        <Services />
      </div>
      <div>
        <div style={{ paddingLeft: "6%" }}>
          <Divider
            variant="middle"
            sx={{
              background: "#DBDBDB",
              borderWidth: "1px",
              width: "50% !Important",
              borderRadius: "20px",
              marginTop: "1% !Important",
              marginBottom: "2%",
            }}
          />
        </div>
        <Grid container spacing={1} sx={{ padding: "0 8% 0 8%" }}>
          <Grid xs={12} sm={12} md={6}>
            <img
              src={Footerimg}
              style={{ width: "100%" }}
              className="footer_img"
            ></img>
          </Grid>
          <Grid xs={12} sm={12} md={6} className="fottergrid">
            <Typography className="footertypo">
              Watch live cricket from all around the Globe
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
