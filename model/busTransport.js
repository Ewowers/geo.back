const { Schema, model } = require("mongoose");
const schema = new Schema({
  title: String,
});
module.exports = model("busTransport", schema);
