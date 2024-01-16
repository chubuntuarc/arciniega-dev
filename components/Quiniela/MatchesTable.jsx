import { Table, Image, Text } from '@nextui-org/react';

const MatchesTable = (data) => {
  const matches = data?.matches ? Object.entries(data?.matches.slice(0, 9)).filter(match => match[1].round === data?.round) : null;
  const columns = [
    {
      key: "home_id",
      label: "",
    },
    {
      key: "home_name",
      label: "Local",
    },
    {
      key: "datetime",
      label: "Fecha y Hora",
    },
    {
      key: "away_name",
      label: "Visitante",
    },
    {
      key: "away_id",
      label: "",
    },
  ];
  
  return (
    <>
      <Table
        aria-label="Liga MX Matches"
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
        <Table.Body items={matches}>
          {
            matches?.map(([key, { home_id, home_name, away_id, away_name, date, time, location }]) => {
              const homeLogo = `/teams/${home_id}.png`
              const awayLogo = `/teams/${away_id}.png`
              const dateObj = new Date(date);
              const formattedDate = dateObj.toLocaleString("en-US", {
                weekday: "short",
                day: "2-digit",
                hour: "numeric",
                hour12: true,  // Use 12-hour format
                minute: "2-digit",
                // Customize weekday and month names
                timeZone: "America/New_York"
              });
              const datetime = `${formattedDate.toString()}`
              return (
                <Table.Row key={key}>
                  <Table.Cell>
                    <Image
                      src={homeLogo}
                      alt="Default Image"
                      width={30}
                      height={30}
                    />
                  </Table.Cell>
                  <Table.Cell>{home_name}</Table.Cell>
                  <Table.Cell>
                    <div>
                      <Text css={{ fontSize: 14 }}>{datetime}</Text>
                      <Text css={{ fontSize: 10 }}>{location}</Text>
                    </div>
                  </Table.Cell>
                  <Table.Cell>{away_name}</Table.Cell>
                  <Table.Cell>
                    <Image
                      src={awayLogo}
                      alt="Default Image"
                      width={30}
                      height={30}
                    />
                  </Table.Cell>
                </Table.Row>
              )
            })
          }
        </Table.Body>
      </Table>
    </>
    
  )
}

export default MatchesTable;
