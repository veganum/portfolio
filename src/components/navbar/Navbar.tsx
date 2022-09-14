import { Grid, GridItem } from "@chakra-ui/react";
import { DarkMode } from "./../darkMode/DarkMode";

export const Navbar = () => {
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} p={5}>
        <GridItem>Icon</GridItem>
        <GridItem>Navbar</GridItem>
        <GridItem>
          <DarkMode />
        </GridItem>
      </Grid>
    </>
  );
};
