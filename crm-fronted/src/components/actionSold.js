import React, { Component } from 'react';

class actionSold extends Component {

    constructor() {
        super()
        this.state = {
        }
    }

    soldChanger = () => {
        let client = this.props.clients.find(c => c.name.toLowerCase() === this.props.clientName.toLowerCase())
        if (client) {
            this.props.updateClient("sold", true, client._id)
            alert("sold status complited")
        }
        else { alert("Client name input is undefined") }
    }


    render() {

        return (
            <div>
                <span>Declare sale</span>
                <button onClick={this.soldChanger} >Declare</button>
            </div>
        )
    }
}

export default actionSold