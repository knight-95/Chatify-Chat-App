const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    // required means that this field is compulsory
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default:
        "https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.theholler.org%2Fhollers%2Flms-pikeville-independent-schools%2F&psig=AOvVaw3-fvp-xH1HGT0U56LBHURG&ust=1665047818344000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLDbyNbgyPoCFQAAAAAdAAAAABAI",
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User",userSchema);
module.exports = User;