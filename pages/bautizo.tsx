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
          Bautizo Valentina 🩷
        </Text>
      </Grid>
      <Grid xs={12} css={{ padding: "1rem 4rem" }}>
        <Text size={20} weight="bold">
          Los invitamos a acompañarnos en este día tan especial para nosotros,
          el bautizo de nuestra hija Valentina.
        </Text>
      </Grid>
      {/* <Grid sm={4} xs={12} css={{ padding: "1rem 4rem" }}>
        <Text
          h1
          size={20}
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
          }}
          weight="bold"
        >
          Mesa Regalos.
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
      </Grid> */}
      <Grid xs={12}>
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
              Ceremonia
              <Text
                h1
                size={20}
                css={{
                  textGradient: "45deg, $purple600 -20%, $pink600 100%",
                }}
                weight="bold"
              >
                Santuario de Guadalupe
              </Text>
              <Text>04 Noviembre 2023 a las 12:00 hrs.</Text>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.140187016812!2d-106.09063052380263!3d28.625560284395966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea5cca0f33cf1d%3A0xd12594e395f759c4!2sSantuario%20de%20Guadalupe!5e0!3m2!1ses-419!2smx!4v1697083776833!5m2!1ses-419!2smx"
                width="600"
                height="450"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Text>
          </Grid>
        </Grid.Container>
      </Grid>
      <Grid xs={12}>
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
              Comida
              <Text
                h1
                size={20}
                css={{
                  textGradient: "45deg, $purple600 -20%, $pink600 100%",
                }}
                weight="bold"
              >
                Coquette
              </Text>
              <Text>04 Noviembre 2023 a las 17:00 hrs.</Text>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.370644185239!2d-106.14387712380208!3d28.648618783348613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea43649a55fd69%3A0x740bd7cc293df651!2sCOQUETTE!5e0!3m2!1ses-419!2smx!4v1697083936382!5m2!1ses-419!2smx"
                width="600"
                height="450"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Text>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
};

export default Home;
