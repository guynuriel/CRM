import React, { Component } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {
  LineChart, Line
} from 'recharts';

import Pie from './pie'

class Charts extends Component {
  constructor() {
    super()
    this.state = {
      search: 'country'

    }

  }
  search = (event) => {
    const target = event.target
    const name = target.name
    const value = target.value
    this.setState({
      [name]: value

    })
  }
  topemployees() {
    let arr = []
    let hotest = {}
    let owners = this.props.data.map(c => c.owner)
    for (let o of owners) {
      let num = this.props.data.filter(d => d.owner === o && d.sold === true)

      hotest[o] = { name: o, sold: num.length }

    }

    for (let i in hotest) {
      arr.push(hotest[i])
    }
    arr.sort(function (a, b) { return b.sold - a.sold })

    return arr.splice(0, 3)

  }
  salesperx(x) {
    if (x === 'month') {
      let arr = []
      for (let i = 1; i <= 12; i++) {
        let num = this.props.data.filter(d => parseInt(d.firstContact.split('-', 3)[1], 10) === i && d.sold === true)
        arr.push(num.length)
      }
      let newarr = []
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      for (let i = 0; i < 12; i++) {
        newarr.push({ name: months[i], sold: arr[i] })
      }
      return newarr
    }
    let arr = []
    let hotest = {}
    let countrys = this.props.data.map(c => c[x])
    for (let c of countrys) {
      let num = this.props.data.filter(d => d[x] === c && d.sold === true)
      if (c !== undefined && c !== null) {
        hotest[c] = { name: c, sold: num.length }
      }
    }

    for (let i in hotest) {
      arr.push(hotest[i])
    }

    return arr
  }
  saleslast30days() {

    let priorDate = new Date();
    priorDate.setDate(priorDate.getDate() - 356)
    let arr = []
    let obj = {}
    let dates = this.props.data.filter(d => d.firstContact.split('T', 2)[0] > priorDate.toISOString().split('T')[0])

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    for (let d of dates) {
      let num = this.props.data.filter(a => a.firstContact.split('T', 2)[0] === d.firstContact.split('T', 2)[0] && a.sold === true)
      obj[d.firstContact.split('T', 2)[0]] = { date: d.firstContact.split('T', 2)[0], sales: num.length }
    }
    for (let i in obj) {
      arr.push(obj[i])
    }

    return [arr, months[priorDate.getMonth()], priorDate.getDay()]
  }

  render() {
    return (
      <div>
        <h3> Top Employees </h3>
        <BarChart
          width={500}
          height={300}
          data={this.topemployees()}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sold" fill="#82ca9d" />
        </BarChart>
        <h3>Sales By</h3>  <div className='input'>
          <select className="browser-default col s2" name='search' type='select-one' onChange={this.search} value={this.state.search}>
            <option value='country'>country</option>
            <option value='emailType'>emailType</option>
            <option value='owner'>owner</option>
            <option value='month'>month</option>
          </select>
        </div>

        <BarChart
          width={1000}
          height={300}
          data={this.salesperx(this.state.search)}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sold" fill="red" />
        </BarChart>

        <h3>sales since {this.saleslast30days()[1]} {this.saleslast30days()[2]}</h3>
        <LineChart
          width={800}
          height={300}
          data={this.saleslast30days()[0]}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey='sales' stroke="#8884d8" activeDot={{ r: 8 }} />

        </LineChart>
        <h3>Client Acquisition</h3>
        <div className='pie'>
          <Pie data={this.props.data} />
        </div>
      </div>
    )
  }
}

export default Charts