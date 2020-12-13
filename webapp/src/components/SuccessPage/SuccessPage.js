import React, {Component} from 'react';
import { Grid,Row,Col } from 'react-bootstrap';

class SuccessPage extends Component {

  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col md={12}>
            <h2>Operation Successful</h2>
          </Col>
        </Row>
      </Grid>)
  }
}


export default
