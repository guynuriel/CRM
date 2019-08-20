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
            <div>Declare sale
                <div>
                    <a onClick={this.soldChanger} class="waves-effect waves-light btn">Declare</a>   
                </div>
            </div>
        )
    }
}

export default actionSold