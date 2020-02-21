const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(require ("./routes/html-routes"));
app.use(require("./routes/api-routes"));

//app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Looks inside the public folder for static files
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology:true });


app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});