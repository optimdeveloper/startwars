import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import { appConfig, logger } from '..';
import { setSessionField } from '../../actions/SessionActions';
import { store } from '../../App';
import { AlertDialog } from '../../components/common';
import { Utils } from '../../constants';
import { reset } from '../../navigation/RootNavigation';
import { HOME_LOGOUT } from '../../reducers/types';
import { IS_LOGGED_IN, KEY_TOKEN } from '../data/PrefKeys';
import { clearSession, getUserFromStore } from '../data/PrefUtils';

export const METHOD = {

    POST: "post",
    GET: "get",
    PUT: "put",
    DELETE: "delete",
    PATCH: "patch"

}

export default async (endpoint, params = {}, onSuccess, onFailure, method = METHOD.POST) => {

    const token = store.getState().session[KEY_TOKEN]
    

    // params.language = 'en'
    logger(appConfig.BASE_URL + endpoint + '\n------------------Params-------------------')
    logger("Token", token);


    const isConnected = await NetInfo.fetch()
    logger("Internet connection", isConnected);

    if (!isConnected.isConnected)
        onFailure('Please check your internet connection.')
    else {

        //  params.language_id = lang;

        if (params._path != undefined) {
            endpoint = `${endpoint}/${params._path}`
            delete params._path;
        }

        // params = { ...params, ...store.getState().common.deviceInfo }
        let headers = {
            Authorization: token || "",
          //  "Accept": 'application/json',
          'Content-Type': 'application/json'
        }
        // logger("Header API key : ", headers.apiKey)
        if (params._parts) {
            headers = {
                ...headers,
                'Content-Type': 'multipart/form-data'
            }
        }

       // logger(JSON.stringify(params));
        logger('---------------------------------------------')

        let paramsData = new FormData()

        for (const property in params) {
            if (params[property] != undefined)
                paramsData.append(property, params[property])
        }

        if (paramsData._parts.length)
            params = paramsData
        logger(params);

        // else
        //     params.company_id = getUserFromStore().company_id || appConfig.COMPANY_ID;


        //params = stringify(params)
        const config = {
            baseURL: appConfig.BASE_URL,
            params,
            timeout: 60000,
            headers: headers,
        }
       // logger("Config", config);
        let request = {}


        switch (method) {

            case METHOD.POST:
                request = axios.post(endpoint, params, config)
                break;
            case METHOD.GET:
                request = axios.get(endpoint, config)
                break;
            case METHOD.DELETE:
                request = axios.delete(endpoint, config)
                break;
            case METHOD.PUT:
                request = axios.put(endpoint, params, config)
                break;
            case METHOD.PATCH:
                request = axios.patch(endpoint, params, config)
                break;
        }

        //  logger("state", store.getState())
        request.then((response) => {
            logger('------------------ Response-------------------')
        //   logger(endpoint + '\n Response', JSON.stringify(response));
            logger('---------------------------------------------')
             
            if (response) {
             
                if (response.data ) {
                        
                            onSuccess(response.data)

                     } else {

                        onFailure('Something went wrong')

                }
            } else {
                onFailure('Something went wrong')
            }
        }).catch(error => {
            logger('Error well', error);
            onFailure('Something went wrong')
        })
    }

}

