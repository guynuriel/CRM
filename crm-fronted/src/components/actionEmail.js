import React, { Component } from 'react';

class actionEmail extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
        }
    }

    stateEmailChanger = (e) => {
        let type = e.target.value
        this.setState({ email: type })
    }

    changerEmailTypeFunction = () => {
        let client = this.props.clients.find(c => c.name.toLowerCase() === this.props.clientName.toLowerCase())
        if (this.state.email !== "" && client) {
            this.props.updateClient("email", this.state.email, client._id)
            alert("email is changed")
        }
        else { alert("email type input or client name input is undefined") }
    }


    render() {

        return (
            <div>Email:
                <div  >
                    <input type="text" placeholder="type client's Email" onChange={this.stateEmailChanger}/>
                    <a onClick={this.changerEmailTypeFunction} class="waves-effect waves-light btn">send</a>
                </div>
            </div>
        )
    }
}

export default actionEmail