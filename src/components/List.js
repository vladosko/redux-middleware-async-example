import React from "react";
import { ListGroup, ListGroupItem, Card, CardBody, CardTitle, CardText } from "reactstrap";

export default function({ items, error }) {
  console.log(error)
  if (error) {
    
    return (
      <Card body inverse color="error" className="border-0">
        {JSON.stringify(error)}
      </Card>
    )
  }

  if (!items) {
    return;
  }

  return (
    <ListGroup flush>
      {items.map(item => {
        return (
          <ListGroupItem key={item.id} className="p-0">
            <Card className="border-0">
              <CardBody >
                <CardTitle>{item.title}</CardTitle>
                <blockquote className="blockquote">
                  <footer className="blockquote-footer">{item.author}</footer>
                </blockquote>
                <CardText></CardText>
              </CardBody>
            </Card>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}
