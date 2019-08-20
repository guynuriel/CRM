import React, { Component } from 'react';

class actionAddClient extends Component {
    constructor() {
        super()
        this.state={
            name:"",
            surname:"",
            country:"",
            owner:""
        }
    }
    nameInput=(e)=>{
        let input =e.target.value
        this.setState({name:input})
    }
    surNameInput=(e)=>{
        let input =e.target.value
        this.setState({surname:input})
    }
    countryInput=(e)=>{
        let input =e.target.value
        this.setState({country:input})
    }

    ownerInput=(e)=>{
        let input =e.target.value
        this.setState({owner:input})
    }

    addingClient=()=>{
        if(this.state.name!=="" && this.state.surname!=="" && this.state.country!=="" && this.state.owner!==""){

            let newClient = {
                name : this.state.name[0].toUpperCase() + this.state.name.slice(1).toLowerCase() + " " + this.state.surname[0].toUpperCase() + this.state.surname.slice(1).toLowerCase(),
                country : this.state.country[0].toUpperCase() + this.state.country.slice(1).toLowerCase(),
                owner : this.state.owner[0].toUpperCase() + this.state.owner.slice(1).toLowerCase(),
                firstContact: new Date()
            }
            this.props.addingClient(newClient)
            alert(`${newClient.name} is added to clients list` )
        }
        else{alert("Please fill in all fields")}
    }


    render() {
        
        return(
            <div id="addClientBox" >
                <h1>ADD CLIENT</h1>
                Name <input className="actionAddInout" type="text" onChange={this.nameInput} placeholder="Name"/>
                <br />
                Surname <input className="actionAddInout" type="text" onChange={this.surNameInput}  placeholder="  Sur name"/>
                <br />
               Country <input className="actionAddInout" type="text" onChange={this.countryInput}  placeholder="Country name"/>
                <br />
                Owner <input className="actionAddInout" type="text" onChange={this.ownerInput}  placeholder="Owner name"/>
                <br/>
                <a onClick={this.addingClient} class="waves-effect waves-light btn">Add New Client</a>
            </div>
        )
    }
}

export default actionAddClient