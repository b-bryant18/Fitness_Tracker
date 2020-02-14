const router = require("express").Router();
const Workout = require("../models");

//Look at api.js for methods 

module.exports = function (router) {
    //Create new workout
    router.post("/api/workouts", (req, res) => {
        Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err)
            });
    });

    // router.post("/api/workouts", (req, res) => {
    //     Workout.create(req.body).then(res => {
    //         res.json(res);
    //     })
    // })

    //Get all workouts
    router.get("/api/workouts", (req, res) => {
        Workout.find()
        .then(dbWorkout => {res.json(dbWorkout)
        }).catch(err => {
            res.json(err)
        });
    });

    //Continue from last workout and update 
    router.put("/api/workouts/:_id", ({body, params}, res) => {
        Workout.findOneAndUpdate(params.id, {$push:{exercises:body}}, {new:true, runValidators:true} )
            .then(dbWorkout => {
                res.json(dbWorkout)
            }).catch(err => {
                res.json(err)
            });
    });

    //Get data from stats page
    router.get("/api/workouts/range"), (req, res) => {
        Workout.find({}).limit(5).then(dbWorkouts => {
            res.json(dbWorkouts)
        }).catch(err => {
            res.json(err)
        });
    };

}
