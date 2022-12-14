import { Grid, GridItem } from "@chakra-ui/react";
import { Navbar } from "../components/navbar/Navbar";
import { Title } from "../components/title/Title";
import { About } from "./about/About";
import { Curriculum } from "./curriculum/Curriculum";
import { Proyects } from "./proyects/Proyects";
import { animateScroll as scroll } from "react-scroll";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { Footer } from "./footer/Footer";
import { SocialMediaBar } from "./home/SocialMediaBar";

// https://carontestudio.com/blog/como-poner-un-video-de-fondo-en-html/

export const Home = () => {
  const onClickMore = () => {
    scroll.scrollMore(850);
  };

  const onClickDown = () => {
    scroll.scrollToBottom();
  };

  const onClickUp = () => {
    scroll.scrollToTop();
  };

  const onClickMoreDown = () => {
    scroll.scrollMore(850);
  };

  const onClickMoreUp = () => {
    scroll.scrollMore(-950);
  };

  return (
    <Grid>
      <div className="navigationMenu">
        <button className="up" onClick={onClickUp}>
          <BiUpArrow /> {/* Ir Arriba */}
        </button>
        <button className="more-up" onClick={onClickMoreUp}>
          <BiUpArrow />
          +1{/* Subir */}
        </button>
        <button className="more-down" onClick={onClickMoreDown}>
          <BiDownArrow />
          -1{/* Bajar */}
        </button>
        <button className="down" onClick={onClickDown}>
          <BiDownArrow />
          {/* Ir Abajo */}
        </button>
      </div>

      <GridItem bgGradient="linear(to-l, #7928CA, #FF0080,orangered)">
        <Navbar />
      </GridItem>

      <div id="home" className="section">
        <Grid h="91.9vh" templateColumns="repeat(6, 1fr)" gap={4}>
          <GridItem colSpan={1}>
            <SocialMediaBar />
          </GridItem>
          <GridItem
            colSpan={5}
            className="pagesWithoutColor"
            onClick={onClickMore}
          >
            <Title />
            <img src="" alt="" />
          </GridItem>
        </Grid>
      </div>
      <div id="about" className="section" onClick={onClickMore}>
        <GridItem
          className="pagesColor"
          bgGradient="linear(to-l, #7928CA, #FF0080,orangered)"
        >
          <About />
        </GridItem>
      </div>
      <div id="curriculum" className="section" onClick={onClickMore}>
        <GridItem className="pagesWithoutColor">
          <Curriculum />
        </GridItem>
      </div>
      <div id="proyects" className="section" onClick={onClickMore}>
        <GridItem
          className="pagesColor"
          bgGradient="linear(to-l, #7928CA, #FF0080,orangered)"
        >
          <Proyects />
        </GridItem>
      </div>
      <div id="footer" className="section" onClick={onClickMore}>
        <GridItem className="pagesWithoutColor">
          <Footer />
        </GridItem>
      </div>
    </Grid>
  );
};
