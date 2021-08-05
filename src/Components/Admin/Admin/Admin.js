import React from "react";
import { Col, Row, Tab } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Sidebar from "../Sidber/Sidbar";
import "./Admin.css";

const Admin = () => {
  return (
    <section className="Admin">
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col className="p-0 m-0 leftSide" sm={2}>
            <div className="text-center">
              <p className="Book-1">Book Shop</p>
            </div>
            <ListGroup variant="flush">
              <ListGroup.Item action href="#link1">
                Add Book
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Manage Book
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Edit Book
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={10} className="p-0 m-0">
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <Sidebar></Sidebar>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <h3>ahmed</h3>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <h3>ahmed</h3>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </section>
  );
};

export default Admin;
