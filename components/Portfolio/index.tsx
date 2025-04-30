import { Grid, Text } from "@nextui-org/react";
import PortfolioCard from "./PortfolioCard";
import styles from './portfolio.module.css';

const Portfolio = () => {
  return (
    <Grid.Container gap={2} justify="center" className={styles.container}>
      <Grid xs={12}>
        <Text
          h1
          className={styles.title}
        >
          My work
        </Text>
      </Grid>
      <Grid sm={6}>
        <PortfolioCard company="SWF" />
      </Grid>
      <Grid sm={6}>
        <PortfolioCard company="NEC" />
      </Grid>
      <Grid sm={6}>
        <PortfolioCard company="Gladiator" />
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
      <Grid sm={6}>
        <PortfolioCard company="MM" />
      </Grid>
    </Grid.Container>
  );
}

export default Portfolio
