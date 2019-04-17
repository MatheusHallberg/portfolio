import React from "react";
import Nav from "react-bootstrap/Nav";
import NavStyle from './Nav.module.css';

const nav = () => {
  return (
    <div className={[NavStyle.container].join(' ')}>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home"> Home </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1"> Contato </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2"> Blog </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default nav;
