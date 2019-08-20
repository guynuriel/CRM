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
            <div>Transfer ownership to :
                <div>
                    <input  placeholder="Owner Name" type="text" value={this.state.transferOwner} onChange={this.transferOwnerChanger} />
                    <a onClick={this.tranfer} class="waves-effect waves-light btn">Transfer</a>                   
                </div>
            </div>
        )
    }
}

export default actionTransfer