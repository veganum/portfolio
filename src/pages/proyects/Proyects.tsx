import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export const Proyects = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={3}>
      <GridItem colSpan={12} mt="1vh">
        <div className="sub-title">Proyects</div>
      </GridItem>
      <GridItem w="100%" h="70vh">
        ddd
      </GridItem>
    </Grid>
  );
};
