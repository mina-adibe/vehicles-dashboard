import React from "react";

import { Icon, Menu, Table } from "semantic-ui-react";

import edit from "../../assets/images/edit.svg";
import del from "../../assets/images/delete.svg";
//import styles from "./fuelData.module.scss";
import { deleteUser } from "../../redux/action";

import { useDispatch, useSelector } from "react-redux";

const FuelData = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.items);
  console.log("dataaaa-fuel:", data);

  // delete item

  return (
    <>
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Vehicle</Table.HeaderCell>
            <Table.HeaderCell>Time</Table.HeaderCell>
            <Table.HeaderCell>Total Km</Table.HeaderCell>
            <Table.HeaderCell>Volume</Table.HeaderCell>
            <Table.HeaderCell>Cost</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name} </Table.Cell>
              <Table.Cell>{item.time} </Table.Cell>
              <Table.Cell>{item.Total_km}</Table.Cell>
              <Table.Cell>{item.volume}</Table.Cell>
              <Table.Cell>{item.cost}</Table.Cell>
              <Table.Cell>
                <i>
                  <img alt="edit item" src={edit} />{" "}
                </i>
                <i onClick={() => dispatch(deleteUser(item.id))}>
                  <img alt="delete item" src={del} />
                </i>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </>
  );
};

export default FuelData;
