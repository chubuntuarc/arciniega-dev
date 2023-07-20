import * as React from "react";
import { Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} alignItems="center">
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
          }}
          weight="bold"
        >
          Arciniega.dev
        </Text>
      </Grid>
      {/* <Grid xs={12} css={{ marginTop: '-40px' }}>
        <Text size={12}>Open.ai key: [your key here]</Text>
      </Grid> */}
      <Grid sm={8} xs={12}>
        <Text
          h1
          size={40}
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
          }}
          weight="bold"
        >
          Software Engineer
        </Text>
      </Grid>
      <Grid sm={4} xs={12}>
        <Text
          h1
          size={20}
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
          }}
          weight="bold"
        >
          Social links.
          <br />
          <Link href="https://www.linkedin.com/in/jesusarciniega/" target="_blank">
            <Image
              src="/new_linkedin_logo.png"
              width={50}
              height={50}
              alt="Linkedin profile image"
            />
          </Link>
          <Link href="https://github.com/chubuntuarc/" target="_blank">
            <Image
              src="/github_logo.png"
              width={50}
              height={50}
              alt="Github profile image"
            />
          </Link>
        </Text>
      </Grid>
    </Grid.Container>
  );
};

export default Home;
