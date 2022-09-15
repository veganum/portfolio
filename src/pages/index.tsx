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
      <GridItem className="pagesWithoutColor">
        <Title />
        <img src="" alt="" />
      </GridItem>
      <GridItem
        className="pagesColor"
        bgGradient="linear(to-l, #7928CA, #FF0080,orangered)"
      >
        <About />
      </GridItem>
      <GridItem className="pagesWithoutColor">
        <Curriculum />
      </GridItem>
      <GridItem
        className="pagesColor"
        bgGradient="linear(to-l, #7928CA, #FF0080,orangered)"
      >
        <Proyects />
      </GridItem>
      <GridItem className="pagesWithoutColor">Footbar</GridItem>
    </Grid>
  );
};
