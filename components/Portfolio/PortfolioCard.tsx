import { Card, Col, Row, Button, Text } from "@nextui-org/react";

interface Props {
  company: string;
}

const companiesData = {
  Eddi: {
    altText: "Eddi card",
    description: "Frontend development with NextJS",
    name: "Eddi",
    thumbnail: "/eddi.png",
    url: "https://www.edditheapp.com/",
  },
  FITB: {
    altText: "Food in the box card",
    description: "Shopify store managment / custom app development.",
    name: "Food in the Box",
    thumbnail: "/fitb.png",
    url: "https://www.foodinthebox.com/",
  },
  Flex: {
    altText: "Flex card",
    description: "Migration from Shopify store to a headless ecommerce.",
    name: "Flex",
    thumbnail: "/flex.png",
    url: "https://www.flexfits.com/",
  },
  SWF: {
    altText: "SWF card",
    description: "Shopify Development and Managment.",
    name: "Sola Wood Flowers",
    thumbnail: "/swf.png",
    url: "https://solawoodflowers.com/",
  },
  WFR: {
    altText: "WFR card",
    description: "Shopify store frontend development.",
    name: "We feed raw",
    thumbnail: "/wfr.png",
    url: "https://www.wefeedraw.com/",
  },
  NEC: {
    altText: "New Era Caps card",
    description: "Shopify store frontend development.",
    name: "New Era Caps",
    thumbnail: "/nec.png",
    url: "https://www.neweracap.com/",
  },
  Gladiator: {
    altText: "Gladiator by Whirlpool card",
    description: "Shopify store frontend development.",
    name: "Gladiator by Whirlpool",
    thumbnail: "/gladiator.png",
    url: "https://www.gladiatorgarageworks.com/",
  },
  MM: {
    altText: "MM card",
    description: "JavaScript Products Catalog",
    name: "MM",
    thumbnail: "/mym.png",
    url: "/portfolio/mm",
  },
};

const PortfolioCard = ({company}: Props) => {
  const Company = companiesData[company as keyof typeof companiesData];
  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={Company.thumbnail}
          objectFit="cover"
          width="100%"
          height="100%"
          alt={Company.altText}
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col>
                <Text color="#d1d1d1" size={20}>
                  {Company.name}
                </Text>
                <Text color="#d1d1d1" size={16} css={{ width: "120%" }}>
                  {Company.description}
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                css={{ color: "#94f9f0", bg: "#94f9f026" }}
                onClick={() => window.open(Company.url)}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  View
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default PortfolioCard;
