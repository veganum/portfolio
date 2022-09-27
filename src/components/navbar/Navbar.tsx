import { Grid, GridItem } from "@chakra-ui/react";
import { DarkMode } from "./../darkMode/DarkMode";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} p={5}>
        <GridItem>Icon</GridItem>
        <GridItem>
          <div className="header">
            <Link activeClass="active" to="1" spy={true} smooth={true}>
              Home
            </Link>
            <Link to="about" spy={true} smooth={true}>
              About
            </Link>
            <Link to="curriculum" spy={true} smooth={true}>
              Curriculum
            </Link>
            <Link to="proyects" spy={true} smooth={true}>
              Proyects
            </Link>
            <Link to="footer" spy={true} smooth={true}>
              Footer
            </Link>
          </div>
        </GridItem>
        <GridItem>
          <DarkMode />
        </GridItem>
      </Grid>
    </>
  );
};
