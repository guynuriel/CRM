const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const clientSchema = new Schema({
   name:String,
   email:String,
   emailType:String,
   sold:Boolean,
   country:String,
   firstContact:Date,
   owner:String,

})


const Client = mongoose.model("Client", clientSchema)
module.exports = Client