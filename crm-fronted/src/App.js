import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import React, { Component } from 'react';
import axios from "axios";
import LandingPage from './components/LandingPage';
import Clients from './components/Clients';
import Analytics from './components/Analytics';
import Action from './components/Actions';

class App extends Component {
  constructor() {
    super()
    this.gettingClients()
    this.state = {
      clients: []
    }
  }

  gettingClients = async () => {
    let DBclients = await axios.get("http://localhost:3030/clients")
    await this.setState({ clients: DBclients.data })
  }

  addingClient = async (client) => {
    await axios.post("http://localhost:3030/client", client)
    await this.gettingClients()
  }

  deleteClient = async (id) => {
    await axios.delete(`http://localhost:3030/client/${id}`)
    await this.gettingClients()
  }

  updateClient = async (key, value, id) => {
    let update = { [key]: value }
    await axios.put(`http://localhost:3030/client/${id}`, update)
    await this.gettingClients()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div id="navBar">
            <Link to="/Clients" ><span className="link">Clients</span></Link>
            <Link to="/Actions" ><span className="link" > Actions </span> </Link>
            <Link to="/Analytics" ><span className="link"> Analytics </span></Link>
          </div>
          <br />
          <div id="body" >
            <Route path="/" exact component={LandingPage} />
            <Route path="/Clients" exact render={() => <Clients clients={this.state.clients} updateClient={this.updateClient} />} />
            <Route path="/Actions" exact render={() => <Action updateClient={this.updateClient} deleteClient={this.deleteClient} clients={this.state.clients} addingClient={this.addingClient} />} />
            <Route path="/Analytics" exact render={() => <Analytics clients={this.state.clients}  gettingClients={ this.gettingClients} />} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App

