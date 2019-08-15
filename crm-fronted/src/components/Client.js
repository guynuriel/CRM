import React, { Component } from 'react';

class Client extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    popupChange = () => {
        this.props.popupID(this.props.client)
    }


    render() {
        let c = this.props.client
        return (
            <tr onClick={this.popupChange} className="client">
                <td className="text">{c.name.split(" ", 2)[0]}</td>
                <td className="text">{c.name.split(" ", 2)[1]}</td>
                <td className="text">{c.country}</td>
                <td className="text">{c.firstContact.slice(0, 10)}</td>
                <td className="text">{c.emailType}</td>
                <td className="text">{c.sold ? "Y" : "N"}</td>
                <td className="text">{c.owner}</td>
            </tr>
        )
    }
}

export default Client