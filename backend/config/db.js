const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.m3tqtyv.mongodb.net/groupomania",
    {
      useNewUrlParser: true,
    }
  )

  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to MongoDB", err));
