import React from "react";
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";

const List = ({ volunteerings, onSelect, onSend, isDisabled, isLoading }) => (
  <Table
    celled
    compact
    definition
    style={{ width: "90%", margin: "auto", marginBottom: "100px" }}
  >
    <Table.Header fullWidth>
      <Table.Row>
        <Table.HeaderCell />
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
            <Table.Cell collapsing>
              <Checkbox onChange={() => onSelect(item._id)} />
            </Table.Cell>
            <Table.Cell>{item.volunteering}</Table.Cell>
            <Table.Cell>{item.detail}</Table.Cell>
            <Table.Cell>{item.cityvolunteering}</Table.Cell>
            <Table.Cell>{item.numDayOfWeek}</Table.Cell>
            <Table.Cell>{item.dayOfWeekFevorite}</Table.Cell>
            <Table.Cell>{item.duringTime}</Table.Cell>
          </Table.Row>
        ))}
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan="6">
          <Button
            floated="right"
            icon
            labelPosition="left"
            secondary
            disabled={isDisabled}
            size="small"
            onClick={() => onSend()}
          >
            <Icon name="send" /> Join to Volunteering
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);

export default List;
