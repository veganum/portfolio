import { Grid, GridItem } from "@chakra-ui/react";
import { Navbar } from "../components/navbar/Navbar";
import { Title } from "../components/title/Title";
import { About } from "./about/About";
import { Curriculum } from "./curriculum/Curriculum";
import { Proyects } from "./proyects/Proyects";

export const Home = () => {
  return (
    <Grid>
      <GridItem bgGradient="linear(to-l, #7928CA, #FF0080,orangered)">
        <Navbar />
      </GridItem>
      <GridItem>
        <Title />
        <img src="" alt="" />
      </GridItem>
      <GridItem style={{ height: "100vh" }}>
        <hr />
        <About />
      </GridItem>
      <GridItem style={{ height: "100vh" }}>
        <hr />
        <Curriculum />
      </GridItem>
      <GridItem style={{ height: "100vh" }}>
        <hr />
        <Proyects />
      </GridItem>
      <GridItem style={{ height: "100vh" }}>
        <hr />
        Footbar
      </GridItem>
    </Grid>
  );
};
