import { Grid, Text } from "@nextui-org/react";
import Flexfits from './Flexfits'
import FITB from "./FITB";
import Eddi from "./Eddi";
import WFR from "./WFR";

const Portfolio = () => {
  return (
    <Grid.Container gap={2} justify="center" css={{ padding: "1rem 4rem" }}>
      <Grid xs={12}>
        <Text
          h1
          size={40}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold"
        >
          My work
        </Text>
      </Grid>
      <Grid sm={6}>
        <Eddi />
      </Grid>
      <Grid sm={6} xs={12}>
        <Flexfits />
      </Grid>
      <Grid sm={6}>
        <FITB />
      </Grid>
      <Grid sm={6}>
        <WFR />
      </Grid>
    </Grid.Container>
  );
}

export default Portfolio
