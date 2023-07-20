import { Card, Col, Row, Button, Text } from "@nextui-org/react";

const Eddi = () => {
  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="/eddi.png"
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Eddi card"
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
                  Eddi
                </Text>
                <Text color="#d1d1d1" size={16} css={{ width: "120%" }}>
                  Frontend development with NextJS
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
                onClick={() => window.open("https://www.edditheapp.com/")}
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

export default Eddi;
