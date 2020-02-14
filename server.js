const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const html = require ("./routes/html-routes")(router);
const api = require("./routes/api-routes")(router);

const PORT = process.env.PORT || 3000;
//This was const app
const router = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Looks inside the public folder for static files
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true, useFindAndModify: false });

app.use(api);
app.use(html);

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});