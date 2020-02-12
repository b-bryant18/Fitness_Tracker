const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter an exercise type" //cardio or strength
            },
            

            name: {  
                type: String,
                trim: true,
                required: "Enter an exercise" //More specific to the exercise
            },

            weight: {
                type: Number
            },

            sets: {
                type: Number
            },

            reps: {
                type: Number
            },

            duration: {
                type: Number
            },

            distance: {
                type: Number
            }

        }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
