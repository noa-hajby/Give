import React from "react";
import { Table } from "semantic-ui-react";

const ListMy = ({ volunteerings }) => (
  <Table
    celled
    compact
    definition
    style={{ width: "90%", margin: "auto", marginBottom: "100px" }}
  >
    <Table.Header fullWidth>
      <Table.Row>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Volunteering</Table.HeaderCell>
        <Table.HeaderCell>Detailes</Table.HeaderCell>
        <Table.HeaderCell>City</Table.HeaderCell>
        <Table.HeaderCell>Number days of week</Table.HeaderCell>
        <Table.HeaderCell>Day of week</Table.HeaderCell>
        <Table.HeaderCell>Duration time</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {volunteerings.length &&
        volunteerings.map((item) => (
          <Table.Row>
            <Table.Cell>{item.status}</Table.Cell>
            <Table.Cell>{item.volunteering}</Table.Cell>
            <Table.Cell>{item.detail}</Table.Cell>
            <Table.Cell>{item.cityvolunteering}</Table.Cell>
            <Table.Cell>{item.numDayOfWeek}</Table.Cell>
            <Table.Cell>{item.dayOfWeekFevorite}</Table.Cell>
            <Table.Cell>{item.duringTime}</Table.Cell>
          </Table.Row>
        ))}
    </Table.Body>
  </Table>
);

export default ListMy;
