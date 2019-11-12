import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import List from "./List";
import Filters from "./Filters";

export default function({
  entities,
  error,
  loading,
  filters,
  selectedFilter,
  onSelectFilter
}) {
  function handleSelect(selected) {
    if (selected !== selectedFilter) {
      onSelectFilter(selected);
    }
  }
  return (
    <Container className="pt-2">
      <Row>
        <Col xs="12" md="6" className="m-auto">
          <Card>
            <CardHeader>
              <Filters
                loading={loading}
                selected={selectedFilter}
                filters={filters}
                onSelect={handleSelect}
              />
            </CardHeader>
            <CardBody className="p-0">
              <List items={entities} error={error} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
