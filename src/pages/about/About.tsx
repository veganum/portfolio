import { Center, Grid, GridItem, Image } from "@chakra-ui/react";

import Img from "../../assets/img/ego.png";

export const About = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={3}>
      <GridItem colSpan={12} mt="1vh">
        <div className="sub-title">ABOUT ME</div>
      </GridItem>
      <GridItem w="100%" h="70vh">
        <Center h="100%" w="100%">
          <Image
            borderRadius="full"
            boxSize="600px"
            src={Img}
            alt="Dan Abramov"
          />
        </Center>
      </GridItem>
      <GridItem w="100%" h="70vh">
        <Center h="100%" w="100%">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            viverra mauris ac odio auctor, sit amet semper velit commodo. Mauris
            varius diam quam, a euismod odio dapibus eget. Mauris vestibulum
            velit eu erat vestibulum gravida. Pellentesque leo lorem, euismod id
            lectus id, pulvinar tristique dolor. Donec id ante vel est euismod
            pellentesque quis vel purus. Curabitur condimentum at est sed
            fermentum. Donec vitae congue ligula, quis fringilla mi. Phasellus
            vestibulum, est eu mattis luctus, metus massa pharetra ante, quis
            rutrum felis nunc eu elit. Duis non nibh dignissim, mollis ex at,
            imperdiet ex. In eleifend semper felis, ac imperdiet urna fringilla
            sit amet. Praesent tempus convallis lectus. Ut mi nisi, tristique
            imperdiet ipsum ullamcorper, gravida fermentum purus. Ut nisi
            sapien, euismod et orci nec, semper facilisis nunc. Fusce eget elit
            ut tortor viverra facilisis nec non dolor. Praesent ultrices erat
            vel tortor tempor mollis. Integer hendrerit faucibus nisl vitae
            interdum. Quisque et lectus non orci lobortis ornare a sit amet
            erat. Maecenas posuere pulvinar odio, a mattis purus luctus quis. Ut
            id enim tincidunt massa faucibus dictum ut quis sapien. Integer
            dapibus fermentum viverra. Vivamus dictum nisl sit amet nunc
          </p>
        </Center>
      </GridItem>
    </Grid>
  );
};
