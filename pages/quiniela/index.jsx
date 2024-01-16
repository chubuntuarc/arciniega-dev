// pages/index.js
import { useEffect, useState } from "react";
import { Grid, Card, Col, Text } from "@nextui-org/react";
import MatchesTable from "../../components/Quiniela/MatchesTable";
import StangingsTable from "../../components/Quiniela/Standings";
import PlayersTable from "../../components/Quiniela/Players";

function Quiniela() {
  const [apiMatchesData, setApiMatchesData] = useState();
  const [apiStandingsData, setApiStandingsData] = useState();
  const [round, setRound] = useState();
  const [matches, setMatches] = useState();
  const [standings, setStandings] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const matchesResponse = await fetch("/api/quiniela/matches");
        const standingResponse = await fetch("/api/quiniela/standings");

        const matchesData = await matchesResponse.json();
        const stangingsData = await standingResponse.json();

        setApiMatchesData(matchesData);
        setApiStandingsData(stangingsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  
  useEffect(() => {
    if (apiMatchesData) {
      setRound(apiMatchesData.data.fixtures[0].round);
      setMatches(apiMatchesData.data.fixtures);
      setStandings(apiStandingsData.data.table);
    }
  }, [apiMatchesData, apiStandingsData])
  
  

  return (
    <Grid.Container gap={2}>
      <Grid md={4} xs={12}>
        <Card>
          <Card.Header>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                Liga MX
              </Text>
              <Text h4 color="white">
                Jornada {round}
              </Text>
            </Col>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            {matches && <MatchesTable matches={matches} round={round} />}
          </Card.Body>
        </Card>
      </Grid>
      <Grid md={8} xs={12}>
        <Card>
          <Card.Header>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                Participantes
              </Text>
            </Col>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            {standings && <PlayersTable />}
          </Card.Body>

        </Card>
      </Grid>
      <Grid md={8} xs={12}>
        <Card>
          <Card.Header>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                Tabla General
              </Text>
            </Col>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            {standings && <StangingsTable standings={standings} />}
          </Card.Body>
        
        </Card>
      </Grid>
      
    </Grid.Container>
  );
}

export default Quiniela;
