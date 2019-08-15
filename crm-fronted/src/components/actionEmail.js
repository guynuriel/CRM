import React, { Component } from 'react';

class actionEmail extends Component {
    constructor() {
        super()
        this.state = {
            emailType: "A",
        }
    }

    stateEmailTypeChanger = (e) => {
        let type = e.target.value
        this.setState({ emailType: type })
    }

    changerEmailTypeFunction = () => {
        let client = this.props.clients.find(c => c.name.toLowerCase() === this.props.clientName.toLowerCase())
        if (this.state.emailType !== "" && client) {
            this.props.updateClient("emailType", this.state.emailType, client._id)
            alert("email type is changed")
        }
        else { alert("email type input or client name input is undefined") }
    }


    render() {

        return (
            <div>
                send email : <select onChange={this.stateEmailTypeChanger} >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select> <button onClick={this.changerEmailTypeFunction}  >send</button>

            </div>
        )
    }
}

export default actionEmail