import { Grid, Text } from "@nextui-org/react";
import PortfolioCard from "./PortfolioCard";

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
        <PortfolioCard company="SWF" />
      </Grid>
      <Grid sm={6}>
        <PortfolioCard company="Eddi" />
      </Grid>
      <Grid sm={6} xs={12}>
        <PortfolioCard company="Flex" />
      </Grid>
      <Grid sm={6}>
        <PortfolioCard company="FITB" />
      </Grid>
      <Grid sm={6}>
        <PortfolioCard company="WFR" />
      </Grid>
    </Grid.Container>
  );
}

export default Portfolio
