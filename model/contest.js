const { Schema, model } = require("mongoose");
const schema = new Schema({
  type: String,
  region: String,
  category: String,
  lot: String,
  location: String,
  description: String,
  targerValue: String,
  date: String,
});
module.exports = model("contest", schema);
