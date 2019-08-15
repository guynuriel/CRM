import React, { Component } from 'react';

class actionTransfer extends Component {
    constructor() {
        super()
        this.state = {
            transferOwner: "",
        }
    }

    transferOwnerChanger = (e) => {
        let owner = e.target.value
        this.setState({ transferOwner: owner })
    }


    tranfer = () => {
        let client = this.props.clients.find(c => c.name.toLowerCase() === this.props.clientName.toLowerCase())
        if (this.state.transferOwner !== "" && client) {
            this.props.updateClient("owner", this.state.transferOwner, client._id)
            alert("transfer complited")
        }
        else { alert("trasfer ownership input or client name input is undefined") }
    }
    render() {

        return (
            <div>
                Transfer ownership to :
                    <input type="text" value={this.state.transferOwner} onChange={this.transferOwnerChanger} />
                <button onClick={this.tranfer} >Transfer</button>
            </div>
        )
    }
}

export default actionTransfer