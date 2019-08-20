import React, { Component } from 'react';

class Popup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            surname: "",
            country: ""
        }
    }

    popupChange=()=>{
        this.props.popupChange()
    }
    
    nameInput = (e) => {
        let input = e.target.value
        this.setState({ name: input })
    }
    surNameInput = (e) => {
        let input = e.target.value
        this.setState({ surname: input })
    }
    countryInput = (e) => {
        let input = e.target.value
        this.setState({ country: input })
    }

    updateClient = () => {
        let client = this.props.client
        let name = client.name.split(" ", 2)[0]
        let surname = client.name.split(" ", 2)[1]
        let country = client.country
        if (this.state.name !== "") {
            name = this.state.name[0].toUpperCase() + this.state.name.slice(1).toLowerCase()
        }
        if (this.state.surname !== "") {
            surname = this.state.surname[0].toUpperCase() + this.state.surname.slice(1).toLowerCase()
        }
        let fullname = name + " " + surname
        this.props.updateClient("name", fullname, client._id)
        if (this.state.country !== "") {
            country = this.state.country[0].toUpperCase() + this.state.country.slice(1).toLowerCase()
        }
        this.props.updateClient("country", country, client._id)
        this.props.popupChange()
    }


    render() {
        let client = this.props.client
        return (
            <div id="popup">
                <button onClick={this.popupChange} className="x">x</button>
                <span > Name: </span>      <input className="popupText" type="text" className="popupInput" placeholder={client.name.split(" ", 2)[0]} value={this.state.name} onChange={this.nameInput} />
                <br></br>
                <span >SurName:</span>    <input className="popupText" type="text" className="popupInput" placeholder={client.name.split(" ", 2)[1]} value={this.state.surname} onChange={this.surNameInput} />
                <br></br>
                <span >Country:</span>    <input className="popupText" type="text" className="popupInput" placeholder={client.country} value={this.state.country} onChange={this.countryInput} />
                <br></br>
                <button id="popupclick" onClick={this.updateClient} >UPDATE</button>
            </div>
        )

    }
}

export default Popup