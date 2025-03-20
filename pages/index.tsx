import { useState } from "react";
import { Grid, Text } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/global.module.css';
import Portfolio from "../components/Portfolio";

const Home = () => {
  const [hiddenText, setHiddenText] = useState(true);
  return (
    <>
      <div className={styles.navbar}>
        <Link href="/" className={styles.logoContainer}>
          <Image src="/arc_logo.png" alt="Logo" width={24} height={24} />
          <span className={styles.siteName}>Arciniega.dev</span>
        </Link>
      </div>
      <Grid.Container gap={2} justify="center" className={styles.container}>
        <Grid xs={12} direction="column" className={styles.content}>
          <div className={styles.headingWrapper}>
            <Text h1 className={styles.gradientText}>
              Software Engineer
            </Text>
            <Text h1 className={styles.whiteText}>
              Passionate about building exceptional software
            </Text>
          </div>
          <Text className={styles.subheading}>
            For a decade, I&apos;ve dedicated my career to software engineering,
            honing a deep skill for problem-solving and crafting efficient
            solutions.
            <br />
            My commitment to detail guarantees exceptional software products.
          </Text>
          <div className={styles.buttonContainer}>
            <Link
              href="https://www.linkedin.com/in/jesusarciniega/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text className={styles.primaryButton}>LinkedIn</Text>
            </Link>
            <Link
              href="https://github.com/chubuntuarc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text className={styles.secondaryButton}>GitHub</Text>
            </Link>
          </div>
        </Grid>
        <Grid xs={12}>
          <Portfolio />
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Home;
