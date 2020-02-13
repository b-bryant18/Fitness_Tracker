const router = require("express").Router();
const Workout = require("../models/workout.js");

//Create a new workout
router.post("/createNew"), (req, res) => {
    Workout.create(body)
}

//Continue with last workout
//Fix the IDGOES HERE on 35
router.get("/continue/:id", (req, res) => {
    db.Workout.find({_id: mongoose.objectId(id)})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

//Updates an existing workout plan
router.put("/updateExisting", ({body}, res) => {
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
router.put("/AddToNew"), (req, res) => {
    db.Workout.update
}

//router.post, router.put, router.delete just like app.get