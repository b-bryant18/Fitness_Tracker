const router = require("express").Router();
const Workout = require("../models/workout.js");

///////////INDEX.HTML/////////////////////////

//Create a new workout
router.post("/exercise"), (req, res) => {
    Workout.create(body)
}

//Continue last workout
router.get("/exercise/:id", (req, res) => {
    db.Workout.find({_id: mongoose.objectId(id)})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

/////////EXERCISE.HTML/////////////////////////
//Add Exercise button


//Complete Button



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