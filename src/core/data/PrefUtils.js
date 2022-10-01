import AsyncStorage from '@react-native-community/async-storage';
import {
    API_TOKEN,
    KEY_FIRST_NAME,
    KEY_LAST_NAME,
    KEY_AVERAGE_RATINGS,
    KEY_POINTS,
    KEY_EMAIL,
    KEY_DOB,
    KEY_USER_ID,
    USER,
    IS_LOGGED_IN,
    CONFIG,
    COMPANY_DETAILS,
    KEY_USER_DATA
} from './PrefKeys';
import {store} from '../../App'
import {COMMON_SET_USER, COMMON_SET_COMPANY_DETAILS} from '../../reducers/types';
import {setConfiguration as setConfigInStore} from '../../actions/CommonActions'

export const setItem = async (key, value = "") => {

    await AsyncStorage.setItem(key, value ? value.toString() : "")

}

export const removeItem = async (key) => {

    await AsyncStorage.removeItem(key)

}

export const setBoolean = async (key, boolean = false) => {

    await AsyncStorage.setItem(key, boolean !== undefined ? boolean.toString() : "false")

}

export const getBoolean = async (key) => {

    const value = await AsyncStorage.getItem(key)

    return value == true
}


export const getItem = async (key, defaultValue = "") => {

    const value = await AsyncStorage.getItem(key)

    return value || defaultValue;

}


export const setToken = async (value) => {

    await AsyncStorage.setItem(API_TOKEN, value)

}


export const getToken = async () => {

    const token = await AsyncStorage.getItem(API_TOKEN)

    return token;

}

export const setSession = async (response) => {

    await setToken(`${response.token_detail.type} ${response.token_detail.token}`)

    const {user, company_details} = response
    store.dispatch({
        type: COMMON_SET_USER,
        payload: user
    })

    store.dispatch({
        type: COMMON_SET_COMPANY_DETAILS,
        payload: company_details
    })
    await AsyncStorage.setItem(USER, JSON.stringify(user))
    await AsyncStorage.setItem(COMPANY_DETAILS, JSON.stringify(company_details))

}

export const getUser = async () => {

    const user = await AsyncStorage.getItem(USER)


    return user ? JSON.parse(user) : {};

}

export const setConfiguration = (config) => {

    if (config)
        AsyncStorage.setItem(CONFIG, JSON.stringify(config))

    store.dispatch(setConfigInStore(config))
}

export const getConfiguration = async () => {

    const config = await AsyncStorage.getItem(CONFIG)


    return config ? JSON.parse(config) : {};

}

export const setFavLocations = (key, data) => {
    if (data)
        return AsyncStorage.setItem(key, JSON.stringify(data))
}

export const getFavLocations = async (key) => {
    const favLocation = await AsyncStorage.getItem(key)

    return favLocation ? JSON.parse(favLocation) : {};

}

export const clearSession = async () => {

    await AsyncStorage.setItem(USER, '{}')
    await AsyncStorage.setItem(IS_LOGGED_IN, '0')
    await setToken("")


}

export const getLastUpdateTimstamp = () => {

    const {config} = store.getState().common

    return config.last_updated_configuration || "0"
}

/**
 *      "auth_type": "N",
 "multi_language": "Y",
 "passenger_document_enabled": "Y",
 "passenger_extra_fields_enabled": "Y",
 "bank_details_enabled": "N",
 "submit_location_on_register": "N"
 */
export const getSignUpConfig = () => {

    const {config} = store.getState().common

    return config.signup_config || {}
}

/**
 *      "draw_trip_path": "N",
 "scheduled_ride": "N",
 "destination_optional": "N",
 "realtime_estimation": "N",
 "book_for_other": "N"
 */
export const getTripConfig = () => {

    const {config} = store.getState().common

    return config.trip_config || {}
}
/**
 *      "shuttle_enabled": "Y",
 "request_location_bound": "N",
 "passenger_wallet_enabled": "Y",
 "outstation_enabled": "Y",
 "reward_enabled": "Y",
 "referral_enabled": "Y",
 "rental_enabled": "Y",
 "operational_area_enabled": "N"
 */
export const getModuleConfig = () => {

    const {config} = store.getState().common

    return config.module_config || {}
}

/**
 *      "transfer_money_enabled": "N",
 "receiver_transaction_charges": "N",
 "minimum_transfer_amount": "N",
 "withdraw_money_enabled": "N",
 "sender_transaction_charges": "N"
 */
export const getWalletConfig = () => {

    const {config} = store.getState().common

    return config.wallet_config || {}
}

/**
 *       "google_config": {
          "place_api_key": [
            "AIzaSyByO_eAFeSs-gYG99E-urH8DmtMxN4Mj2w"
          ],
          "direction_api_key": []
        },
 "place_api_char_hit": "2",
 "direction_api_hit_interval": "30",
 "direction_api_from": "N",
 "place_api_from": "N"
 */
export const getMapConfig = () => {

    const {config} = store.getState().common

    return config.map_config || {}
}

export const getUserFromStore = () => {

    const user = store.getState().session[KEY_USER_DATA]

    return user || {}
}
// export const clearSession = async () => {
//     // boolean shownHomeFabPrompt = getDataByKey(KEY_IS_FAB_PROMPT_SHOWN_HOME, false);
//     // boolean shownAddressFabPrompt = getDataByKey(KEY_IS_FAB_PROMPT_SHOWN_ADDRESS, false);
//     // String language = getDataByKey(KEY_LANGUAGE, "English");
//     // String languageId = getDataByKey(KEY_LANGUAGE_ID, "1");
//     // boolean isLanguageEnabled = getDataByKey(KEY_IS_LANGUAGE_ENABLE, false);
//     // String languageKeyword = getDataByKey(KEY_LANGUAGE_KEYWORD, "en");
//     // //        boolean isPaymentEnabled = getDataByKey(KEY_IS_PAYMENT_ENABLE, false);
//     // //        boolean isSocialLoginEnabled = getDataByKey(KEY_IS_SOCIAL_LOGIN, false);
//     // //        int managePaymentFrom = getDataByKey(KEY_MANAGE_PAYMENT_FROM, Utils.MANAGE_PAYMENT_FROM_SERVER_SIDE);

//     // pref.clear();
//     // pref.commit();

//     // prefUser.clear();
//     // prefUser.commit();

//     // prefVehicle.clear();
//     // prefVehicle.commit();

//     // prefToken.clear();
//     // prefToken.commit();

//     // storeDataByKey(KEY_IS_FAB_PROMPT_SHOWN_HOME, shownHomeFabPrompt);
//     // storeDataByKey(KEY_IS_FAB_PROMPT_SHOWN_ADDRESS, shownAddressFabPrompt);
//     // storeDataByKey(KEY_LANGUAGE, language);
//     // storeDataByKey(KEY_LANGUAGE_ID, languageId);
//     // storeDataByKey(KEY_IS_LANGUAGE_ENABLE, isLanguageEnabled);
//     // storeDataByKey(KEY_LANGUAGE_KEYWORD, languageKeyword);
//     // /* storeDataByKey(KEY_IS_PAYMENT_ENABLE, isPaymentEnabled);
//     //  storeDataByKey(KEY_IS_SOCIAL_LOGIN, isSocialLoginEnabled);
//     //  storeDataByKey(KEY_MANAGE_PAYMENT_FROM, managePaymentFrom);*/
// }

// export const saveDriverId = (driverId) => {
//     setItem("driver_id", driverId);

// }

// export const getDriverId = () => {
//     return prefTrip.getString("driver_id", "");
// }

// export const saveRetryTimeStamp = (timeStamp) => {
//     setItem("retry_time_stamp", timeStamp);

// }

// export const getRetryTimeStamp = async () => {
//     return getItem("retry_time_stamp", "0");
// }

// export const saveTripId = (s) => {
//     setItem("trip_id", s);

//     // Added by Mushahid
//     //        setDefaultCompanyId();
// }

// export const getTripId = () => {
//     return prefTrip.getString("trip_id", "-1");
// }

// export const setIsOnPaymentScreen = (isOnPaymentScreen) => {
//     prefTrip.putBoolean("isOnPaymentScreen", isOnPaymentScreen);

// }

// export const isOnPaymentScreen = () => {
//     return prefTrip.getBoolean("isOnPaymentScreen", false);

// }

// export const setIsOnRide = (boolean isOnRide)=> {
//     prefTrip.putBoolean("isOnRide", isOnRide);

// }

// export const isOnRide = () => {
//     return prefTrip.getBoolean("isOnRide", false);
// }

// export const setIsDriverArriving = (boolean isDriverArriving)=> {
//     prefTrip.putBoolean("isDriverArriving", isDriverArriving);

// }

//     public boolean isDriverArriving = () => {
//     return prefTrip.getBoolean("isDriverArriving", false);
// }

// export const setIsRideCancelEnable(boolean isRideCancelEnable)=> {
//     prefTrip.putBoolean("isRideCancelEnable", isRideCancelEnable);

// }

//     public boolean isRideCancelEnable = () => {
//     return prefTrip.getBoolean("isRideCancelEnable", false);
// }

// export const setIsPoolRequest = (boolean isPoolRequest)=> {
//     prefTrip.putBoolean("isPoolRequest", isPoolRequest);

// }

//     public boolean isPoolRequest = () => {
//     return prefTrip.getBoolean("isPoolRequest", false);
// }

// export const setIsRequestOnGoing = (isRequestOnGoing) => {
//     prefTrip.putBoolean("isRequestOnGoing", isRequestOnGoing);

// }


//     public boolean isRequestOnGoing = () => {
//     return prefTrip.getBoolean("isRequestOnGoing", false);
// }

// export const savePickupLocation = (String location) => {
//     setItem("pickup_location", location);

// }

// export const saveDropOffLocation = (String location) => {
//     setItem("drop_off_location", location);

// }

// export const getPickupLocation = () => {
//     return prefTrip.getString("pickup_location", "");
// }

// export const getDropOffLocation = () => {
//     return prefTrip.getString("drop_off_location", "");
// }

// export const setIsNotificationOn = (boolean isNotificationOn) => {
//     prefUser.putBoolean("isNotificationOn", isNotificationOn);
//     prefUser.commit();
// }

//     public boolean isNotificationOn = () => {
//     return prefUser.getBoolean("isNotificationOn", true);
// }

//     /*export const setIsOnRide(boolean isOnRide){
//         prefTrip.putBoolean("isOnRide",isOnRide);

//     }

//     public boolean isOnRide(){
//         return prefTrip.getBoolean("isOnRide",false);

//     }*/

//     public boolean isUserLoggedIn = () => {
//     return !TextUtils.isEmpty(getValueFromKey(KEY_TOKEN, ""));
// }

// export const setDriverFirstName = (String firstName) => {
//     setItem("d_first_name", firstName);

// }

// export const getDriverFirstName = () => {
//     return prefTrip.getString("d_first_name", "");
// }

// export const setDriverLastName = (String lastName) => {
//     setItem("d_last_name", lastName);

// }

// export const getDriverLastName = () => {
//     return prefTrip.getString("d_last_name", "");
// }

// export const setIsOnChatScreen = (boolean isOnChatScreen) => {
//     prefUser.putBoolean("isOnChatScreen", isOnChatScreen);
//     prefUser.commit();
// }

//     public boolean isOnChatScreen = () => {
//     return prefUser.getBoolean("isOnChatScreen", false);
// }

// export const setIsRentalRequest = (boolean isRentalRequest) => {
//     prefTrip.putBoolean("isRentalRequest", isRentalRequest);

// }

//     public boolean isRentalRequest = () => {
//     return prefTrip.getBoolean("isRentalRequest", false);
// }

// export const setIsOutstationRequest = (boolean isOutstationRequest) => {
//     prefTrip.putBoolean("isOutstationRequest", isOutstationRequest);

// }

//     public boolean isOutstationRequest = () => {
//     return prefTrip.getBoolean("isOutstationRequest", false);
// }

// export const setIsCorporateRequest = (boolean isOutstationRequest)=> {
//     prefTrip.putBoolean("isCorporateRequest", isOutstationRequest);

// }

//     public boolean isCorporateRequest = () => {
//     return prefTrip.getBoolean("isCorporateRequest", false);
// }

// export const setDefaultCompanyId = () => {
//     setItem("company_id", Utils.COMMON_COMPANY_ID);
// }

// /**
//  * method to save user data in session
//  */
// export const saveSessionOnLogin = (LoginRegisterAPIModel model)=> {
//     HashMap < String, String > data = new HashMap<>();
//     data.put(KEY_TOKEN, String.valueOf(model.getToken().getToken()));
//     data.put(KEY_TOKEN_TYPE, String.valueOf(model.getToken().getType()));
//     storeUserData(data);
// }

// export const saveSession = (LoginRegisterAPIModel model) => {
//     HashMap < String, String > data = new HashMap<>();
//     data.put(KEY_FIRST_NAME, model.getUser().getFirstName());
//     data.put(KEY_LAST_NAME, model.getUser().getLastName());
//     data.put(KEY_AVERAGE_RATINGS, String.valueOf(model.getUser().getAvg_rating()));
//     data.put(KEY_POINTS, String.valueOf(model.getUser().getPoints()));
//     data.put(KEY_EMAIL, model.getUser().getEmail());
//     data.put(KEY_DOB, model.getUser().getDob());
//     data.put(KEY_GENDER, model.getUser().getGender());
//     data.put(KEY_USER_ID, String.valueOf(model.getUser().getId()));
//     data.put(KEY_USER_IMAGE, model.getUser().getImage());
//     data.put(KEY_CITY, model.getUser().getCity());
//     data.put(KEY_DIAL_CODE, model.getUser().getDialCode());
//     data.put(KEY_PHONE_NUMBER, model.getUser().getPhoneNo());
//     data.put(KEY_PHONE_VERIFIED, model.getUser().getPhoneVerified());
//     data.put(KEY_COMPANY_NAME, String.valueOf(model.getUser().getCompany().getName()));
//     data.put(KEY_COMPANY_COUNTRY, String.valueOf(model.getUser().getCompany().getCountry()));
//     data.put(KEY_TOKEN, String.valueOf(model.getToken().getToken()));
//     data.put(KEY_TOKEN_TYPE, String.valueOf(model.getToken().getType()));
//     data.put(KEY_LANGUAGE, String.valueOf(model.getUser().getLanguage_name()));
//     data.put(KEY_LANGUAGE_ID, String.valueOf(model.getUser().getLanguage()));
//     data.put(KEY_COMPANY_CURRENCY, String.valueOf(model.getUser().getCompany().getCurrency()));
//     data.put(KEY_COMPANY_CURRENCY_SYMBOL, String.valueOf(model.getUser().getCompany().getCurrencySymbol()));
//     data.put(KEY_IS_RIDE_LATER, String.valueOf(model.getUser().getIsRideLater()));
//     data.put(KEY_IS_EMPLOYEE, String.valueOf(model.getUser().getIsEmployee()));
//     data.put(KEY_CORPORATE_ID, String.valueOf(model.getUser().getCorporateId()));
//     data.put(KEY_IS_RENTAL, String.valueOf(model.getUser().getIsRental()));
//     data.put(KEY_IS_SHUTTLE, String.valueOf(model.getUser().getIsShuttle()));
//     data.put(KEY_BOOK_FOR_OTHERS, String.valueOf(model.getUser().getBookForOthers()));
//     data.put(KEY_IS_OUTSTATION, String.valueOf(model.getUser().getIsOutstation()));
//     data.put(KEY_IS_REWARD_ENABLE, String.valueOf(model.getUser().getIsReward()));
//     data.put(KEY_IS_WALLET_ENABLE, String.valueOf(model.getUser().getPassengerWalletEnabled()));
//     data.put(KEY_IS_ASK_USER_FOR_LUGGAGE, String.valueOf(model.getUser().getTripLuggageInApp()));
//     if ("Y".equals(getDataByKey(KEY_IS_REFER_A_FRIEND_ENABLE, RetrofitApp.KEY_DEFAULT_REFER_ENABLE_VALUE))) {
//         data.put(KEY_REFERRAL_AMOUNT, String.valueOf(model.getUser().getReferralAmount()));
//         data.put(KEY_REFERENCE_AMOUNT, String.valueOf(model.getUser().getReferenceAmount()));
//         data.put(KEY_REFERRAL_CODE, String.valueOf(model.getUser().getReferralCode()));
//     }
//     storeUserData(data);

//     //Set Configurations here
//     //        storeDataByKey(KEY_IS_PAYMENT_ENABLE, true); // false is default value in app
//     //        storeDataByKey(KEY_MANAGE_PAYMENT_FROM, Utils.MANAGE_PAYMENT_FROM_USER_SIDE); // server side is default value in app
//     //        storeDataByKey(KEY_IS_ROUNDED_FARE, true); // false is default value in app
//     //        storeDataByKey(KEY_WALLET_ADD_MONEY_ENABLE, true); // false is default value in app
//     //        storeDataByKey(KEY_SHOW_EST_FARE_LABEL, true);    // false is default value in app
//     //        storeDataByKey(KEY_DRAW_PATH_ON_RIDE_ENABLE, true);    // false is default value in app
// }

// export const saveSessionForSocialLogin = (model) => {
//     storeDataByKey(KEY_IS_SOCIAL, true);
//     saveSessionOnLogin(model);
//     saveSession(model);
// }
