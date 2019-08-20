import React, { Component } from 'react';

class LandingPage extends Component {
    constructor() {
        super()
        this.state = {
        }
        this.loadingClientsRoot()
    }

    loadingClientsRoot =async () => {
        // var url = "http://localhost:3000/clients"
        // window.location = url
       await setTimeout(window.location.replace("http://localhost:3000/clients"),12000)
    }

    render() {

        return (
            <div>
                <h1 id="landingH" >WELCOME!</h1>
                <p id="landingP" >C R M System</p>
            </div>
        )
    }
}

export default LandingPage