import React from "react";
import { Button,Badge } from "react-bootstrap";

export default function MyBadge(props) {
  return (
    <Button variant="primary">
      {props.title} <Badge bg={props.color}>1000</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}
