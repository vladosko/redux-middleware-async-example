import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default class extends Component {
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand className="text-warning" href="/">
          Subreddits
        </NavbarBrand>
      </Navbar>
    );
  }
}
