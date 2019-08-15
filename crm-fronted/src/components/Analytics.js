import React, { Component } from 'react';
import Badges from './Badges';
import Charts from './Charts';

class Analytics extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }
    
    render() {
        
        return(
            <div>
                <Badges clients={this.props.clients} />
                <Charts data={this.props.clients} />
            </div>
        )
    }
}

export default Analytics