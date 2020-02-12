const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();
const db = require("./models");

//What does this do?
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

db.Workout.create({ "Workout List" })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });

//Create a new workout
app.post("/createNew"), (req, res) => {
    db.Workout.create(body)
}

//Continue with last workout
//Fix the IDGOES HERE on 35
app.get("/continue", (req, res) => {
    db.Workout.find({_id[`IDGOESHERE`]})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

//Updates an existing workout plan
app.put("/updateExisting", ({body}, res) => {
    db.Workout.create(body)
        .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

//Adds new workouts to a new plan
app.put("/AddToNew"), (req, res) => {
    db.Workout.update
}


app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});