
import React, {useEffect, useState} from "react";
import {
    MainContainer,
    ScrollContainer,
} from "../common";
import styles from './styles'
import { homeApi } from "./HomeApi";
import CardPerson from "./CardPerson";
import { store } from '../../App'
import { setPeople } from "../../actions/HomeActions";
import { WrappedComponent } from "../CommonComponents";

let page=1
const Home = () => {
  const [ivisible,setVisible]=useState(false)

  const [data,setData]=useState([])
    useEffect(() => {
       getData()
    }, []);

    const getData = async () => {
  
        homeApi.getDashboardData(page,async(res) => {
            setVisible(true)
           let people=store.getState().common.people
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
          
           setData(people)
           setVisible(false)
           store.dispatch(setPeople(people))
           
           
        }, () => {
           setVisible(false)
          
        })
    }
  const loadMoreData=()=>{
   page=page+1
   if(!ivisible) {
    getData()
}
   
  }
    return (
        <MainContainer header={{ title: "People Of Star Wars",noLeft:true}}>
           
           <CardPerson data={data} loadMore={loadMoreData} loading={ivisible} />
           
        </MainContainer>
    );
};

export default WrappedComponent(Home)
