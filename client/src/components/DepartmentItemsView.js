import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Segment, Header, Button } from 'semantic-ui-react';

class DepartmentItemsView extends React.Component {
  state = { items: {} };

  componentDidMount() {
    debugger
    axios.get(`/api/departments/${this.props.match.params.id}/items`)
      .then(res => {
        debugger
        this.setState({ items: res.data });
      })
      .catch(err => {
        debugger
        console.log(err);
      })
  }

  render() {
    const { id, name } = this.state.items;

    return (
      <div>
        <Button onClick={this.props.history.goBack} color='black'>Go Back</Button>
      </div>
    );
  };
};

export default DepartmentItemsView;