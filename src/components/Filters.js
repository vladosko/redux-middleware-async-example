import React from "react";
import { Button, ButtonGroup } from "reactstrap";

export default function Filters(props) {
  const { filters, selected, onSelect, loading } = props;

  function getFilterEl(filter) {
    return (
      <Button
        color="warning"
        disabled={loading}
        onClick={() => onSelect(filter.key)}
        key={filter.key}
        active={filter.key === selected}
      >
        {filter.label}
      </Button>
    );
  }

  return (
    <ButtonGroup className="d-flex">
      {filters && filters.map(filter => getFilterEl(filter))}
    </ButtonGroup>
  );
}
