import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Segment, Header, Button, Card} from 'semantic-ui-react';

class DepartmentView extends React.Component {
  state = {items: {}};

  // componentDidMount() {
  //   axios.get(`/api/departments/${this.props.match.params.id}`)
  //   .then( res => {
  //     debugger
  //     // this.setState({items: res.data});
  //   })
  //   .catch( err => {
  //     debugger
  //     // console.log(err);
  //   })
  // }

  // renderDepartmentsItems = () => {
  //   const {items} = this.state;

  //   if (items.length <= 0)
  //     return <h2>No Items</h2>
  //   return items.map( item => (
  //     <Card as={Link} to={`/api/departments/${item.department_id}/items`}>
  //       <Card.Content>
  //         <Card.Header>{item.name}</Card.Header>
  //       </Card.Content>
  //     </Card>
  //   ))
  // }

  render() {
    // const {id, name, description, department, price} = this.state.items;
    return (
      <div> howdy
      {/* //   <Segment>
      //     <Header as='h1'>{name}</Header>
      //     <Header as='h3'>{department}</Header>
      //     <Header as='h5' color='grey'>${price}</Header>
      //     <p>{description}</p>
      //   </Segment>
      //   <br />
      //   <Button onClick={this.props.history.goBack} color='black'>Go Back</Button>
      //   <Button color='blue' as={Link} to={`/departments/${id}/edit`}>Edit</Button> */}
      </div>
    );
  };
};

export default DepartmentView;