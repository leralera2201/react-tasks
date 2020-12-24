import React, { Component } from "react";
import { Container, Jumbotron } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div className="container pt-5">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Fluid jumbotron</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
