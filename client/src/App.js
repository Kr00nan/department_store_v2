import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Departments from './components/Departments';
import DepartmentsForm from './components/DepartmentsForm';
import DepartmentView from './components/DepartmentsView';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';
import {Container} from 'semantic-ui-react';

const App = () => (
  <React.Fragment>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/departments' component={Departments} />
        <Route exact path='/departments/new' component={DepartmentsForm} />
        <Route exact path='/departments/:department_id/items' component={DepartmentView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </React.Fragment>
);

export default App;
