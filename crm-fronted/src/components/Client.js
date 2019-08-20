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
            <tr onClick={this.popupChange} >
                <td className="center-align">{c.name.split(" ", 2)[0]}</td>
                <td className="center-align">{c.name.split(" ", 2)[1]}</td>
                <td className="center-align">{c.country}</td>
                <td className="center-align">{c.firstContact.slice(0, 10)}</td>
                <td className="center-align">{c.email}</td>
                <td className="center-align">{c.sold ? "Y" : "N"}</td>
                <td className="center-align">{c.owner}</td>
            </tr>
        )
    }
}

export default Client