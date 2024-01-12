const StangingsTable = (data) => {
  console.log('From standings table: ', data.standings)
  const standings = data?.standings ? Object.entries(data.standings.slice(0, 17)) : null;

  return (
    <table>
      <thead>
        <th></th>
        <th>Equipo</th>
        <th>Jugados</th>
        <th>Ganados</th>
        <th>Empatados</th>
        <th>Perdidos</th>
        <th>Goles a Favor</th>
        <th>Goles en Contra</th>
        <th>Diferencia de Goles</th>
        <th>Puntos</th>
      </thead>
      <tbody>
        {
          standings?.map(([key, { rank, name, matches, won, drawn, lost, goals_scored, goals_conceded, goal_diff, points }]) => (
            <tr key={key}>
              <td>{rank}</td>
              <td>{name}</td>
              <td>{matches}</td>
              <td>{won}</td>
              <td>{drawn}</td>
              <td>{lost}</td>
              <td>{goals_scored}</td>
              <td>{goals_conceded}</td>
              <td>{goal_diff}</td>
              <td>{points}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default StangingsTable;
