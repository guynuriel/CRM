import React, { Component } from 'react'


class Badges extends Component {
    newclients() {
        let date = new Date()
        let num = this.props.clients.filter(d => parseInt(d.firstContact.split('-', 3)[0], 10) === date.getFullYear() && parseInt(d.firstContact.split('-', 3)[1], 10) === date.getMonth() + 1)
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        return [num.length, months[date.getMonth()]]
    }
    emailsent() {
        let num = this.props.clients.filter(e => e.emailType !== null)
        return num.length
    }
    notsold() {
        let num = this.props.clients.filter(s => s.sold === false)
        return num.length
    }
    hotcountry() {
        let hotest = { name: '', num: 0 }
        let countrys = this.props.clients.map(c => c.country)
        for (let c of countrys) {
            let num = this.props.clients.filter(d => d.country === c && d.sold === true)
            if (num.length > hotest.num) {
                hotest.name = c
                hotest.num = num.length
            }
        }
        return hotest
    }
    render() {
        return (
            <div>
                <div className="badges" > <i class="fas fa-chart-line"></i> new clients in {this.newclients()[1]} :  {this.newclients()[0]}</div>
                <div className="badges"> <i class="fas fa-envelope"></i> Emails Sent : {this.emailsent()}</div>
                <div className="badges"> <i class="fas fa-user-circle"></i> Outstanding Clients : {this.notsold()} </div>
                <div className="badges"> <i class="fas fa-globe-americas"></i>  Hottest Country : {this.hotcountry().name},{this.hotcountry().num} sales  </div>
            </div>
        )
    }
}

export default Badges