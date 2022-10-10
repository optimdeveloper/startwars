import { homeApi } from "../components/home/HomeApi";
import { COMMON_SET_ERROR, COMMON_SET_LOADING, COMMON_SET_PEOPLE } from "../reducers/types"

export const setPeople = (people) => {
    return {
        type: COMMON_SET_PEOPLE,
        payload: people
    }
}
export const setLoading = (page) => {
    return {
        type: COMMON_SET_LOADING,
        payload: {page}
    }
}
export const setError = (err) => {
    return {
        type: COMMON_SET_ERROR, 
        payload:err 
    }
}

export const getPeople = (page) => {

     return async (dispatch) => {
     dispatch(setLoading(page))
      try {

        homeApi.getDashboardData(page,async(res) => {
        let people=[]
            for (let i = 0; res.results.length > i; i++) {
           const planet=await homeApi.getPlanet(res.results[i].homeworld.split('/')[5])
                 
                     let vehicles=[]
                     for (let j = 0; res.results[i].vehicles.length > j; j++) {
                         const vehicleO=await homeApi.getVehicle(res.results[i].vehicles[j].split('/')[5])
                           vehicles.push(vehicleO.name)
                          }
                          let person = {
                             ...res.results[i],
                             vehicles,
                             name_planet: res.results[i].gender!='n/a' ? 'Human from'+ planet.name : 'Droid from' + planet.name
                         }
                          
             people.push(person)
            }
            dispatch(setPeople(people))
            
         }, (err) => {
            dispatch(setError(err));
           
         })
      } catch (err) {
          
          dispatch(setError(err));
      }
  
    };
}