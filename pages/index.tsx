import { useState } from "react";
import { Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import Portfolio from "../components/Portfolio";

const Home = () => {
  const [hiddenText, setHiddenText] = useState(true);
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} alignItems="center">
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
            padding: "1rem 3rem",
          }}
          weight="bold"
        >
          Jesus Arciniega
        </Text>
      </Grid>
      <Grid sm={8} xs={12} css={{ padding: "1rem 4rem" }}>
        <Text size={20} weight="bold">
          Hi! I'm Jesus, and I love to do software solutions, my focus is
          frontend using NextJS/ReactJS and CSS/SCSS looking for a good job
          paying attention to detail.
          <br />
          <br />I started coding in 2015 with PHP and C# applications, creating
          some custom software for small clients and my intern job, but
          officially I started doing software for bigger clients in 2016 where I
          worked with Pearl for the backend and Bootstrap and JQuery for the
          frontend, I learned the basics of coding.
          {!hiddenText && (
            <>
              <br />
              <br />
              By 2018 I start working with Visual Basic and SQL Server using
              store procedures, a very particular way to code, but I go back to
              web development when I start as a freelancer in my free time,
              working with Firebase, more PHP, and a lot of vanilla JS.
              <br />
              <br />I started in remote work and Shopify in 2019 with an agency
              where our main goal was to fix a lot of issues for the clients, I
              learned a lot about the platform, the basics like liquid, and the
              very fun custom apps development.
              <br />
              <br />
              In 2020 I move to a new job and learned a lot more about Shopify,
              and I started with React and Next (I understood React thanks to
              nextJS :swea:, here the goal was to migrate from Shopify to
              headless commerce, using Contenfult, a cool experience, a lot of
              learning.
              <br />
              <br />I continue working with Shopify with a personal client from
              Spain, where I did lot of fixes and updates, and we started with a
              new custom app connected to the Shopify API.
              <br />
              <br /> My latest job was focused on the front end, ReactJS sites,
              and applications, where I learned more about reading requirements
              and organizing my work.
              <br />
              <br />
              And that's me, always looking for new stuff to learn and cool
              projects to be involved.
              <br />
              <br />
              Thanks for reading :)
            </>
          )}
        </Text>
      </Grid>
      <Grid sm={4} xs={12} css={{ padding: "1rem 4rem" }}>
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
          <Link
            href="https://www.linkedin.com/in/jesusarciniega/"
            target="_blank"
          >
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
      <Grid xs={12} css={{ padding: "1rem 4rem" }}>
        <Text
          onClick={() => setHiddenText(!hiddenText)}
          css={{
            cursor: "pointer",
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
          }}
        >
          {hiddenText ? "Read more" : "Read less"}
        </Text>
      </Grid>
      <Grid xs={12}>
        <Portfolio />
      </Grid>
    </Grid.Container>
  );
};

export default Home;
