const mongoose = require("mongoose")

const db = async () => {
    await mongoose.connect("mongodb+srv://dipeshmehta2000:dipesh2000@movie.kym2jrz.mongodb.net/");
    console.log("Data base is connected");
}

module.exports = db;
