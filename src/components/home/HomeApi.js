import axios from 'axios'
import { Utils } from '../../constants'
import { apiCall } from '../../core'
import { API_DASHBOARD, API_ADD_SUBSCRIPTION, API_GET_SUBSCRIPTION, API_PEOPLE,API_PLANETS, API_VEHICLES } from '../../core/api/ApiConstants'
import { METHOD } from '../../core/api/ApiService'
import { ProgressDialog } from '../common'


export const homeApi = {

    getDashboardData(id,onData, onError) {

        apiCall(`${API_PEOPLE}/?page=${id}`, {}, (response) => {
            //ProgressDialog.hide()
            if (onData) {
                onData(response)
            }
        },
            (error) => {
                if (onError)
                    onError()
                Utils.showErrorToast(error)
            }, METHOD.GET
        )
    },
   
    getPlanet(id) {

        return new Promise((resolve, reject) => {

            apiCall(`${API_PLANETS}/${id}`, {}, (response) => {

                    resolve(response)

                },
                (error) => {
                    console.log(error);
                    reject(error)
                }, METHOD.GET
            )

        })

    },
    getVehicle(id) {

        return new Promise((resolve, reject) => {

            apiCall(`${API_VEHICLES}/${id}`, {}, (response) => {

                    resolve(response)

                },
                (error) => {
                    console.log(error);
                    reject(error)
                }, METHOD.GET
            )

        })

    },
    getSubscription(onData, onError) {
        apiCall(API_GET_SUBSCRIPTION, {}, (response) => {
            ProgressDialog.hide()

            if (onData) {
                onData(response)
            }

        },
            (error) => {
                if (onError)
                    onError()
                Utils.showErrorToast(error)
            }
        )
    }
}