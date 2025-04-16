const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define Schema
const userSchema = new Schema({
 firstName: String,
 lastName: String,
 email: String,
 phoneNumber: Number,
 age: Number,
 country: String,
 gender: String,
}, {timestamps: true});
// Create a model based on the schema
const User = mongoose.model("customer", userSchema);

// export model
module.exports = User;
