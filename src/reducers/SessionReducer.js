import { SET_SESSION_FIELD } from "../actions/SessionActions"

const INIT_STATE = {


    workoutSet: [{
        muscle_id: "",
        workoutId: "",
        sets: [],
        totalWeight: 0
    }],
    workouts: [{
        name: "",
        id: "",
        totalWeight: 0,
        status: 0,
        workoutSet: [{
            workout_set_id: "",
            workoutId: "",
            sets: [],
            totalWeight: 0
        }]
    }],
    country: {
        callingCode: ["1"]
    },
    lastWorkout: {}
}


export default (state = INIT_STATE, action) => {

    switch (action.type) {

        case SET_SESSION_FIELD:
            return { ...state, [action.payload.key]: action.payload.value }
    }

    return state

}