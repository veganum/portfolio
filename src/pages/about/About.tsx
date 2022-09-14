import {
  Box,
  Center,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

export const About = () => {
  return (
    <>
      <SimpleGrid columns={1} spacingX="40px" spacingY="20px">
        <Center h="100px" color="white">
          <h3>About</h3>
        </Center>
      </SimpleGrid>
      <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
        <Box>
          <Image
            boxSize="200px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Box>
        <Box>
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
            iaculis, et pellentesque libero pharetra. Nulla venenatis auctor
            sodales. Donec consequat ullamcorper orci vitae tempus. Suspendisse
            commodo euismod blandit. Praesent fermentum lectus ut tortor dapibus
            feugiat. Ut feugiat tincidunt tortor ut fermentum. Duis tincidunt
            interdum risus non consectetur. Fusce ac tincidunt lectus, in
            elementum orci. Sed sagittis semper vestibulum. Nulla ut metus dui.
            In id ornare lacus, non ultricies quam. Sed eget turpis ac nibh
            imperdiet aliquam eget nec est. Pellentesque vel dui sit amet ex
            bibendum fringilla at ut eros. Sed convallis a diam ac euismod.
            Fusce mollis venenatis diam, vitae feugiat lorem sollicitudin vitae.
            Morbi sem ante, iaculis id turpis et, pulvinar blandit lorem. Nam ut
            erat lectus. Nullam elementum eros eu orci fermentum, a ultrices
            tortor dapibus. Pellentesque ac sapien in eros rhoncus commodo nec
            id ligula. Integer tellus dolor, ultricies at diam sit amet, mollis
            aliquam justo. Pellentesque quis quam nulla. Integer lacinia ex eget
            pretium condimentum. Quisque iaculis placerat libero non iaculis.
            Maecenas risus massa, lacinia sit amet ultricies vitae, dignissim
            quis eros. Nulla non dui leo. Maecenas ac faucibus nisl. Sed
            tincidunt ullamcorper rhoncus. Nulla eget elit at lorem pellentesque
            malesuada. In laoreet euismod lacus in iaculis. Phasellus eleifend
            sagittis quam in venenatis.
          </p>
        </Box>
      </SimpleGrid>

      {/* <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <h3>About</h3>
        <GridItem>
          <Image
            boxSize="200px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </GridItem>
        <GridItem>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              viverra mauris ac odio auctor, sit amet semper velit commodo.
              Mauris varius diam quam, a euismod odio dapibus eget. Mauris
              vestibulum velit eu erat vestibulum gravida. Pellentesque leo
              lorem, euismod id lectus id, pulvinar tristique dolor. Donec id
              ante vel est euismod pellentesque quis vel purus. Curabitur
              condimentum at est sed fermentum. Donec vitae congue ligula, quis
              fringilla mi. Phasellus vestibulum, est eu mattis luctus, metus
              massa pharetra ante, quis rutrum felis nunc eu elit. Duis non nibh
              dignissim, mollis ex at, imperdiet ex. In eleifend semper felis,
              ac imperdiet urna fringilla sit amet. Praesent tempus convallis
              lectus. Ut mi nisi, tristique imperdiet ipsum ullamcorper, gravida
              fermentum purus. Ut nisi sapien, euismod et orci nec, semper
              facilisis nunc. Fusce eget elit ut tortor viverra facilisis nec
              non dolor. Praesent ultrices erat vel tortor tempor mollis.
              Integer hendrerit faucibus nisl vitae interdum. Quisque et lectus
              non orci lobortis ornare a sit amet erat. Maecenas posuere
              pulvinar odio, a mattis purus luctus quis. Ut id enim tincidunt
              massa faucibus dictum ut quis sapien. Integer dapibus fermentum
              viverra. Vivamus dictum nisl sit amet nunc iaculis, et
              pellentesque libero pharetra. Nulla venenatis auctor sodales.
              Donec consequat ullamcorper orci vitae tempus. Suspendisse commodo
              euismod blandit. Praesent fermentum lectus ut tortor dapibus
              feugiat. Ut feugiat tincidunt tortor ut fermentum. Duis tincidunt
              interdum risus non consectetur. Fusce ac tincidunt lectus, in
              elementum orci. Sed sagittis semper vestibulum. Nulla ut metus
              dui. In id ornare lacus, non ultricies quam. Sed eget turpis ac
              nibh imperdiet aliquam eget nec est. Pellentesque vel dui sit amet
              ex bibendum fringilla at ut eros. Sed convallis a diam ac euismod.
              Fusce mollis venenatis diam, vitae feugiat lorem sollicitudin
              vitae. Morbi sem ante, iaculis id turpis et, pulvinar blandit
              lorem. Nam ut erat lectus. Nullam elementum eros eu orci
              fermentum, a ultrices tortor dapibus. Pellentesque ac sapien in
              eros rhoncus commodo nec id ligula. Integer tellus dolor,
              ultricies at diam sit amet, mollis aliquam justo. Pellentesque
              quis quam nulla. Integer lacinia ex eget pretium condimentum.
              Quisque iaculis placerat libero non iaculis. Maecenas risus massa,
              lacinia sit amet ultricies vitae, dignissim quis eros. Nulla non
              dui leo. Maecenas ac faucibus nisl. Sed tincidunt ullamcorper
              rhoncus. Nulla eget elit at lorem pellentesque malesuada. In
              laoreet euismod lacus in iaculis. Phasellus eleifend sagittis quam
              in venenatis.
            </p>
          </div>
        </GridItem>
      </Grid> */}
    </>
  );
};
