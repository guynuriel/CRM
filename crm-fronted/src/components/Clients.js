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
        this.setState({ input: [input], page: 1 })
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
            <div>
                {this.state.popup ? <Popup Clients={this.props.clients} popupChange={this.popupChange} updateClient={this.props.updateClient} client={this.state.popupClient} /> : <div></div>}
                <div className="row" >
                    <div className="col s6">
                        <input placeholder="Search" type="text" value={this.state.input} onChange={this.changeInput} />
                    </div>
                    <div className="input col s4 ">
                        <select className="browser-default  #ffcc80 orange lighten-3 " type='select-one' onChange={this.selectChange} defaultValue="name" >
                            <option value="name" >Name</option>
                            <option value="country" >country</option>
                            <option value="firstContact" >First Contact</option>
                            <option value="owner" >Owner</option>
                        </select>
                    </div>
                    <div className="col s1" onClick={this.pageMinusChange} ><i class="fas fa-arrow-left"></i>{(this.state.page * 10) - 10} </div>
                    <div className="col s1" onClick={this.pagePlusChange} >{this.state.page * 10}<i class="fas fa-arrow-right"></i> </div>
                </div>
                <table>
                    <thead>
                        <tr className="center-align #ff9800 orange">
                            <th className="center-align">Name</th>
                            <th className="center-align">Surname</th>
                            <th className="center-align">Country</th>
                            <th className="center-align">First-Contact</th>
                            <th className="center-align">Email</th>
                            <th className="center-align">Sold</th>
                            <th className="center-align">Owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.filter(f => f[select[0]].toLowerCase().includes(input[0].toLowerCase())).slice((this.state.page * 10) - 10, (this.state.page * 10)).map(c => {
                            return <Client client={c} popupID={this.popupIdChange} popupChange={this.popupChange} />
                        }
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Clients