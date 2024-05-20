const {Schema, model} = require("mongoose")

const customerSchema = new Schema({
  name: {type:String, reguired: false},
  email:{ type: String, reguired: true},
  phone: { type: Number, reguired: true},
  location: { type: String, reguired: true},
  acct: { type: Number, reguired: true},
  grade:{ type: String, reguired: true},
  manager:{ type: String, reguired: true}
});

const customer = new model ("customer", customerSchema)



module.exports = customer

