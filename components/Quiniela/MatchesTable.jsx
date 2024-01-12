const MatchesTable = (data) => {
  console.log('From matches: ', data.matches)
  const matches = data?.matches ? Object.entries(data.matches.slice(0, 9)) : null;

  return (
    <table>
      <thead>
        <th>Local</th>
        <th>Visitante</th>
        <th>Fecha y Hora</th>
        <th>Lugar</th>
      </thead>
      <tbody>
        {
          matches?.map(([key, { home_name, away_name, date, time, location }]) => (
            <tr key={key}>
              <td>{home_name}</td>
              <td>{away_name}</td>
              <td>{date} {time}</td>
              <td>{location}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default MatchesTable;
