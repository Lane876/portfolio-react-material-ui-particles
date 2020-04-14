import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesStyle: {
    position: "absolute",
    opacity: "0.3",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Header />
      {/* <Particles
        canvasClassName={classes.particlesStyle}
        params={{
          particles: {
            number: {
              value: 45,
              desity: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              // type: "circle",
              strole: {
                width: "1",
                color: "blue",
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 7,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                speed: 1,
                opacity_min: 0.1,
                enable: true,
                sync: true,
              },
            },
          },
        }}
      /> */}
    </>
  );
};

export default Home;
