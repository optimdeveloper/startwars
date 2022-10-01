export const logger = (message, optionalParams) => {

    // if (__DEV__) {

    //     if (optionalParams !== undefined)
    //         console.log(message, optionalParams)
    //     else
    //         console.log(message)

    // }

    if (optionalParams !== undefined)
        console.log(message, optionalParams)
    else
        console.log(message)
}