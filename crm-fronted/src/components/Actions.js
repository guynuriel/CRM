import React, { Component } from 'react';
import ActionTransfer from './actionsTransfer';
import ActionEmail from './actionEmail';
import ActionSold from './actionSold';
import ActionAddClient from './actionAddClient';

class Actions extends Component {
    constructor() {
        super()
        this.state = {
            clientName: "",
        }
    }

    clientNameChanger = (e) => {
        let name = e.target.value
        this.setState({ clientName: name })
    }

    deleteClient = () => {
        let client = this.props.clients.find(c => c.name.toLowerCase() === this.state.clientName.toLowerCase())
        if (client) {
            this.props.deleteClient(client._id)
            alert(`${client.name} is deleted `)

        }
        else { alert("client name input is undefined") }
    }

    render() {

        return (
            <div>
                <div id="update">
                    <h1>UPDATE</h1>
                    Client :
                    <input type="text" value={this.state.clientName} list="clientsOption" onChange={this.clientNameChanger} placeholder="Client name" />
                    <datalist id="clientsOption">
                        {this.props.clients.map(c => {
                            return <option value={c.name} />
                        })}
                    </datalist>
                    <button onClick={this.deleteClient} >delete</button>
                    <br />
                    <ActionTransfer clients={this.props.clients} clientName={this.state.clientName} updateClient={this.props.updateClient} />
                    <br />
                    <ActionEmail clients={this.props.clients} clientName={this.state.clientName} updateClient={this.props.updateClient} />
                    <br />
                    <ActionSold clients={this.props.clients} clientName={this.state.clientName} updateClient={this.props.updateClient} />
                </div>
                <hr></hr>
                <div id="addClient">
                    <ActionAddClient addingClient={this.props.addingClient} />
                </div>
            </div>
        )
    }
}

export default Actions