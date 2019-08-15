import React, { Component } from 'react';
import Popup from './Popup';
import Client from './Client';

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            input: [""],
            select: ["name"],
            page: 1,
            popup: false,
            popupClient: {}
        }
    }

    pagePlusChange = () => {
        let page = this.state.page + 1
        this.setState({ page })
    }
    pageMinusChange = () => {
        let page = this.state.page - 1
        if (page > 0) {
            this.setState({ page })
        }
    }

    changeInput = (e) => {
        let input = e.target.value
        this.setState({ input: [input] })
    }

    selectChange = (e) => {
        let select = e.target.value
        this.setState({ select: [select] })
    }

    popupChange = () => {
        if (this.state.popup) {
            this.setState({ popup: false })
        }
        else { this.setState({ popup: true }) }
    }

    popupIdChange = async (client) => {
        await this.setState({ popupClient: client })
        await this.popupChange()

    }


    render() {
        let select = [...this.state.select]
        let input = [...this.state.input]
        let clients = [...this.props.clients]
        return (
            <div id="clientspage">
                {this.state.popup ? <Popup Clients={this.props.clients} popupChange={this.popupChange} updateClient={this.props.updateClient} client={this.state.popupClient} /> : <div></div>}
                <div id="clientInput">
                    search:<input placeholder="type the name" type="text" value={this.state.input} onChange={this.changeInput} />

                    
                    <select id="select-input" onChange={this.selectChange} >
                        <option value="name" >Name</option>
                        <option value="country" >country</option>
                        <option value="firstContact" >First Contact</option>
                        <option value="owner" >Owner</option>

                    </select>
                    <span className="oneToTen" onClick={this.pageMinusChange} >{"<"}{(this.state.page * 10) - 10} </span>
                    <span className="oneToTen" onClick={this.pagePlusChange} >{this.state.page * 10}{">"} </span>
                </div>
                <table id="clientTable">
                    <tr id="clientHeader">
                        <th className="text">Name</th>
                        <th className="text">Surname</th>
                        <th className="text">Country</th>
                        <th className="text">First-Contact</th>
                        <th className="text">Email type</th>
                        <th className="text">Sold</th>
                        <th className="text">Owner</th>
                    </tr>
                    {clients.filter(f => f[select[0]].toLowerCase().includes(input[0].toLowerCase())).slice((this.state.page * 10) - 10, (this.state.page * 10)).map(c => {
                        return <Client client={c} popupID={this.popupIdChange} popupChange={this.popupChange} />
                    }
                    )}
                </table>
            </div>
        )
    }
}

export default Clients