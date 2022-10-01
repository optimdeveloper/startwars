export const SET_SESSION_FIELD = "SET_SESSION_FIELD"

export const setSessionField = (key, value) => {

    return {
        type: SET_SESSION_FIELD,
        payload: {
            key, value
        }
    }
}