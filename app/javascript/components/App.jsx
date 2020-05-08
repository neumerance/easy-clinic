import React from "react"
import { Navbar, Nav } from 'react-bootstrap';
import Dashboard from './Dashboard';
import { Provider } from 'react-redux';
import store from '../store';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Easy Clinic</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Dashboard</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#pricing">Log Out</Nav.Link>
          </Nav>
        </Navbar>
        <Dashboard />
      </Provider>
    );
  }
}


export default App;
