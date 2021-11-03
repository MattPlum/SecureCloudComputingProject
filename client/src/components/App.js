import TextEditor from "../TextEditor"
import React, {Component} from 'react';
import Navbar from './google-drive/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"

class App extends Component {
  render() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="light" expand="sm"/>
        <Switch>
          {/* Home page */}
          <Route path="/" exact> 
            <Redirect to={`/documents/${uuidV4()}`} />
          </Route>
          {/* TextEditor */}
          <Route path="/documents/:id" component={TextEditor}> 
            <TextEditor />
          </Route>
        </Switch>
        </div>
    </Router>
  )
  }
}



export default App
