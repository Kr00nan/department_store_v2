import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Segment, Header, Button} from 'semantic-ui-react';

class ItemView extends React.Component {
  state = {item: {}};

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.department_id}/items/${this.props.match.params.id}`)
    .then( res => {
      this.setState({item: res.data});
    })
    .catch( err => {
      console.log(err);
    })
  }

  render() {
    const {id, name, description, price} = this.state.item;
    return (
      <div>
        <Segment>
          <Header as='h1'>{name}</Header>
          <Header as='h5' color='grey'>${price}</Header>
          <p>{description}</p>
        </Segment>
        <br />
        <Button onClick={this.props.history.goBack} color='black'>Go Back</Button>
        <Button color='blue' as={Link} to={`/products/${id}/edit`}>Edit</Button>
      </div>
    );
  };
};

export default ItemView;