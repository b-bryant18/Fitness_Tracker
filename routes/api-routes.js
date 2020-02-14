// const router = require("express").Router();
const db = require("../models");

module.exports = function (app) {
    //Most recent workout

app.get("/api/workouts", function (req, res) {
    db.Workout.find({}).then(dbWorkout  => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    })
})

//Create new workout
app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then(response => {
        res.json(response);
    })
})

//Update workout/ find with ID
app.put("/api/workouts:/_id", (req, res) => {
    console.log(req.body);
    db.Workout.find({_id: req.params._id}).then(response => console.log(response));
    db.Workout.update({_id: req.params._id}, {$push: {exercises: req.body}}).then(function (dbWorkout) {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    })
})

app.get("/api/workouts/range", function (req, res) {
    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    })
})

//end module.exports
}

//Look at api.js for methods 

// module.exports = function (router) {
    //Create new workout/////////////
    // router.post("/api/workouts", (req, res) => {
    //     Workout.create({})
    //         .then(dbWorkout => {
    //             res.json(dbWorkout);
    //         })
    //         .catch(err => {
    //             res.json(err)
    //         });
    // });

    //Get all workouts
    // router.get("/api/workouts", (req, res) => {
    //     Workout.find()
    //     .then(dbWorkout => {res.json(dbWorkout)
    //     }).catch(err => {
    //         res.json(err)
    //     });
    // });

    //Continue from last workout and update ////////////
    // router.put("/api/workouts/:_id", ({body, params}, res) => {
    //     Workout.findOneAndUpdate(params.id, {$push:{exercises:body}}, {new:true, runValidators:true} )
    //         .then(dbWorkout => {
    //             res.json(dbWorkout)
    //         }).catch(err => {
    //             res.json(err)
    //         });
    // });

    //Get data from stats page//////////
    // router.get("/api/workouts/range"), (req, res) => {
    //     Workout.find({}).limit(5).then(dbWorkouts => {
    //         res.json(dbWorkouts)
    //     }).catch(err => {
    //         res.json(err)
    //     });
    // };

// }


