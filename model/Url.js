const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let urlSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      unique: true,
    },
    shortenedUrl: {
      type: String,
      required: true,
      unique: true,
    },
    isListed: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

let Url = mongoose.model("url", urlSchema);

module.exports = Url;
