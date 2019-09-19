import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Button, Card} from 'semantic-ui-react';

class DepartmentItemsView extends React.Component {
  state = { items: [] };

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.department_id}/items`)
      .then(res => {
        this.setState({ items: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  renderItems = () => {
    const {items} = this.state;

    if (items.length <= 0)
      return <h2>No Items</h2>
    return items.map( item => (
      <Card key={item.id}>
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
          <Card.Meta>${item.price}</Card.Meta>
          <Card.Description>
            {item.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button color='black' as={Link} to={`/departments/${item.department_id}/items/${item.id}`}>View</Button>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <Button onClick={this.props.history.goBack} color='black'>Go Back</Button>
        <br />
        <br />
        <Card.Group>
          {this.renderItems()}
        </Card.Group>
      </div>
    );
  };
};

export default DepartmentItemsView;