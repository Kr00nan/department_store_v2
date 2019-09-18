import React from 'react';
import axios from 'axios';
import {Card, Header} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Departments extends React.Component {
  state = {departments: []};

  componentDidMount() {
    // make a get request with axios
    axios.get('/api/departments')
    .then( res => {
      this.setState({departments: res.data});
    })
    .catch(err => {
      console.log(err);
    })
    // update state
  }

  renderDepartments = () => {
    const {departments} = this.state;

    if (departments.length <= 0)
      return <h2>No Departments</h2>
    return departments.map( department => (
      <Card as={Link} to={`/api/departments/${department.id}/items`} key={department.id}>
        <Card.Content>
          <Card.Header>{department.name}</Card.Header>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Header as='h1'>Departments</Header>
        <br />
        <Card.Group>
          {this.renderDepartments()}
        </Card.Group>
      </div>
    );
  };
};

export default Departments;