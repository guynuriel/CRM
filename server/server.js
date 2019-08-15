const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const client = require("./clientSchema")
// const request = require("request")
// const data = require("./clients")


// loaddata=()=>{
//     data.map(d=>{
//         const c = new client(d)
//         c.save()})
// }
// loaddata()

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})



app.get("/clients", function (req, res) {
    client.find({}, function (err, clients) {
        res.send(clients)
    })
})

app.post("/client", function (req, res) {
    const clientData = req.body
    const c1 = new client(clientData)
    c1.save()
    res.end()
})

app.put("/client/:clientid", function (req, res) {
    let id = req.params.clientid
    let update = req.body
    client.findOneAndUpdate({ "_id": id }, update).then(function () {
    })
    res.end()
})


app.delete("/client/:clientID", function (req, res) {
    let id = req.params.clientID
    client.findOneAndDelete({ "_id": id }).then(function () {
    })
    res.end()
})


port = 3030
mongoose.connect('mongodb://localhost/Clients', { useNewUrlParser: true }).then(() => {
    app.listen(port, () => console.log(`Running server on port` + port))
})
