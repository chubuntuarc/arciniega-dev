// pages/index.js
import { useEffect, useState } from "react";
import MatchesTable from "../../components/Quiniela/MatchesTable";
import StangingsTable from "../../components/Quiniela/Standings";

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
    <div>
      <h1>Jornada {round} - Liga MX</h1>
      {matches && <MatchesTable matches={matches} />}
      <h2>Tabla general</h2>
      {standings && <StangingsTable standings={standings} />}
    </div>
  );
}

export default Quiniela;
