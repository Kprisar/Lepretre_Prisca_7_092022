const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://groupomania:Socialsite2022@cluster0.m3tqtyv.mongodb.net/groupomania",
    {
      useNewUrlParser: true,
    }
  )

  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to MongoDB", err));
