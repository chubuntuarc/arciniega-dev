import { Table, Image } from '@nextui-org/react';

const StangingsTable = (data) => {
  const standings = data?.standings ? Object.entries(data.standings.slice(18, 35)) : null;
  const columns = [
    {
      key: "rank",
      label: "#",
    },
    {
      key: "logo",
      label: "",
    },
    {
      key: "name",
      label: "Equipo",
    },
    {
      key: "matches",
      label: "Jugados",
    },
    {
      key: "won",
      label: "Ganados",
    },
    {
      key: "drawn",
      label: "Empatados",
    },
    {
      key: "lost",
      label: "Perdidos",
    },
    {
      key: "goals_scored",
      label: "GF",
    },
    {
      key: "goals_conceded",
      label: "GC",
    },
    {
      key: "goal_diff",
      label: "DG",
    },
    {
      key: "points",
      label: "Puntos",
    },
  ];

  return (
    <>
      <Table
        aria-label="Liga MX Standings"
        css={{
          height: "auto",
          minWidth: "100%",
          '.clasified': {
            color: '#2eff2e'
          },
          '.playin': {
            color: '#dbdba0'
          }
        }}
        selectionMode="none"
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.key}
            >
              {column.label}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={standings}>
          {
            standings?.map(([key, { rank, team_id, name, matches, won, drawn, lost, goals_scored, goals_conceded, goal_diff, points }]) => {
              const logoURL = `/teams/${team_id}.png`
              return (
                <Table.Row key={key}>
                  <Table.Cell><span className={parseInt(rank) < 5 ? "clasified" : parseInt(rank) < 13 ? "playin" : ""}>{rank}</span></Table.Cell>
                  <Table.Cell>
                    <Image
                      src={logoURL}
                      alt="Default Image"
                      width={30}
                      height={30}
                    />
                  </Table.Cell>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{matches}</Table.Cell>
                  <Table.Cell>{won}</Table.Cell>
                  <Table.Cell>{drawn}</Table.Cell>
                  <Table.Cell>{lost}</Table.Cell>
                  <Table.Cell>{goals_scored}</Table.Cell>
                  <Table.Cell>{goals_conceded}</Table.Cell>
                  <Table.Cell>{goal_diff}</Table.Cell>
                  <Table.Cell><b>{points}</b></Table.Cell>
                </Table.Row>
              )
            })
          }
        </Table.Body>
      </Table>
    </>
  )
}

export default StangingsTable;
