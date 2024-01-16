import { Table, Image, Text } from '@nextui-org/react';

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
      label: "JJ",
    },
    {
      key: "won",
      label: "JG",
    },
    {
      key: "drawn",
      label: "JE",
    },
    {
      key: "lost",
      label: "JP",
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
      label: "PS",
    },
  ];

  return (
    <>
      <Table
        aria-label="Liga MX Standings"
        css={{
          height: "auto",
          minWidth: "100%",
          padding: 0,
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
                  <Table.Cell><Text css={{ fontSize: 12 }} className={parseInt(rank) < 5 ? "clasified" : parseInt(rank) < 13 ? "playin" : ""}>{rank}</Text></Table.Cell>
                  <Table.Cell>
                    <Image
                      src={logoURL}
                      alt="Default Image"
                      width={20}
                    />
                  </Table.Cell>
                  <Table.Cell><Text css={{ fontSize: 14, fontWeight: "bold" }}>{name}</Text></Table.Cell>
                  <Table.Cell><Text css={{ fontSize: 12 }}>{matches}</Text></Table.Cell>
                  <Table.Cell><Text css={{ fontSize: 12 }}>{won}</Text></Table.Cell>
                  <Table.Cell><Text css={{ fontSize: 12 }}>{drawn}</Text></Table.Cell>
                  <Table.Cell><Text css={{ fontSize: 12 }}>{lost}</Text></Table.Cell>
                  <Table.Cell><Text css={{ fontSize: 12 }}>{goals_scored}</Text></Table.Cell>
                  <Table.Cell><Text css={{ fontSize: 12 }}>{goals_conceded}</Text></Table.Cell>
                  <Table.Cell><Text css={{ fontSize: 12 }}>{goal_diff}</Text></Table.Cell>
                  <Table.Cell><Text css={{ fontSize: 14, fontWeight: "bold" }}>{points}</Text></Table.Cell>
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
