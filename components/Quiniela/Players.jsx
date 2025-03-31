import { Table, Image, Text, User } from '@nextui-org/react';

const PlayersTable = () => {
  const columns = [
    {
      key: "rank",
      label: "#",
    },
    {
      key: "name",
      label: "Nombre",
    },
    {
      key: "match_one",
      label: "P1",
    },
    {
      key: "match_two",
      label: "P2",
    },
    {
      key: "match_three",
      label: "P3",
    },
    {
      key: "match_four",
      label: "P4",
    },
    {
      key: "match_five",
      label: "P5",
    },
    {
      key: "match_six",
      label: "P6",
    },
    {
      key: "match_seven",
      label: "P7",
    },
    {
      key: "match_eight",
      label: "P8",
    },
    {
      key: "match_nine",
      label: "P9",
    },
  ];
  const users = [
    {
      rank: 1,
      name: 'Hector',
      team: 767,
      profile_picture: '',
    },
    {
      rank: 2,
      name: 'Jesus',
      team: 767,
      profile_picture: 'https://avatars.githubusercontent.com/u/9604554?v=4',
    },
    {
      rank: 3,
      name: 'Juan',
      team: 765,
      profile_picture: '',
    },
    {
      rank: 4,
      name: 'Luis',
      team: 769,
      profile_picture: '',
    }
  ]

  return (
    <>
      <Table
        aria-label="Participantes"
        css={{
          height: "auto",
          minWidth: "100%",
          padding: 0,
          '.win': {
            backgroundColor: '#2eff2e',
            borderRadius: '50%',
            display: 'block',
            height: 10,
            width: 10
          },
          '.draw': {
            backgroundColor: 'yellow',
            borderRadius: '50%',
            display: 'block',
            height: 10,
            width: 10
          },
          '.lost': {
            backgroundColor: 'red',
            borderRadius: '50%',
            display: 'block',
            height: 10,
            width: 10
          },
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
        <Table.Body items={users}>
          {
            Object.entries(users)?.map(([key, { rank, name, profile_picture, team }]) => {
              console.log(name)
              const profilePicture = profile_picture ? profile_picture : `/teams/${team}.png`
              return (
                <Table.Row key={key}>
                  <Table.Cell>{rank}</Table.Cell>
                  <Table.Cell>
                    <User bordered src={profilePicture} name={name} css={{ p: 0 }}></User>
                  </Table.Cell>
                  <Table.Cell><span className="win"></span></Table.Cell>
                  <Table.Cell><span className="draw"></span></Table.Cell>
                  <Table.Cell><span className="lost"></span></Table.Cell>
                  <Table.Cell><span className="win"></span></Table.Cell>
                  <Table.Cell><span className="draw"></span></Table.Cell>
                  <Table.Cell><span className="lost"></span></Table.Cell>
                  <Table.Cell><span className="win"></span></Table.Cell>
                  <Table.Cell><span className="draw"></span></Table.Cell>
                  <Table.Cell><span className="lost"></span></Table.Cell>
                </Table.Row>
              )
            })
          }
        </Table.Body>
      </Table>
    </>
  )
}

export default PlayersTable;
