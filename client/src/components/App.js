import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import TextEditor from "../TextEditor"
import { v4 as uuidV4 } from "uuid"
import Navbar from "./Navbar"

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}> 
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
          <Navbar bg="light" expand="sm"/>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute exact path="/">
              <Redirect to={`/documents/${uuidV4()}`} />
              </PrivateRoute>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/documents/:id" component={TextEditor} />
              <TextEditor />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
