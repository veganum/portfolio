import { Grid, GridItem } from "@chakra-ui/react";
import { Navbar } from "./components/navbar/Navbar";
import { Title } from "./components/title/Title";

function App() {
  return (
    <>
      <Grid>
        <GridItem bgGradient="linear(to-l, #7928CA, #FF0080,orangered)">
          <Navbar />
        </GridItem>
        <GridItem>
          <Title />
          <img src="" alt="" />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
