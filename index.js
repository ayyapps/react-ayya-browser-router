import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
const HomeComponent=(props)=>
{
  return <div>Home</div>;
}
const TestComponent=(props)=>
{
  return <div>Test</div>;
}
const CheckComponent=(props)=>
{
  return <div>Check</div>;
}
const NoMatch=(props)=>
{
  return <div>No Match</div>;
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <BrowserRouter>
       <div>Welcome
       <Switch>
       <Route exact path='/' component={HomeComponent}></Route>
       <Route path='/test' component={TestComponent}></Route>
       <Route path='/check' component={CheckComponent}></Route>
       <Route component={NoMatch}></Route>
       </Switch>
       </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
