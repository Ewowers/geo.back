const { Schema, model } = require("mongoose");
const schema = new Schema({
  title: String,
  address: String,
  contact: String,
  work_time: String,
  description: String,
});
module.exports = model("law_enforcement", schema);
