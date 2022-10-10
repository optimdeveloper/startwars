
import React, {useEffect, useState} from "react";
import {
    MainContainer,
    MyFlatList,
    ScrollContainer,
} from "../common";
import styles from './styles'
import { homeApi } from "./HomeApi";

import { store } from '../../App'
import { setPeople } from "../../actions/HomeActions";
import { WrappedComponent } from "../CommonComponents";
import { useDispatch } from "react-redux";
import CardPerson from "./CardPerson";
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator, Button } from 'react-native';
let page=1
const Home = () => {
  const [ivisible,setVisible]=useState(false)
  const [isListEnd,setIsListEnd]=useState(false)
  const [moreLoading,setMoreLoading]=useState(false)

  const dispatch = useDispatch();
  const [data,setData]=useState([])
  const [refreshing, setRefreshing] = useState(false)
  const renderFooter = () => (
    <View style={styles.footerText}>
        {moreLoading && <ActivityIndicator />}
        {isListEnd && <Text>No more data at the moment</Text>}
    </View>
)
const renderEndReached = () => {
  if (!isListEnd && !moreLoading) {
    //setPage(page + 1)
    page=page+1
    getData()
  }
}
    useEffect(() => {
       getData()
    }, []);

    const getData = async () => {
      page==1 ? setVisible(true) :setMoreLoading(true)
        homeApi.getDashboardData(page,async(res) => {
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
           setMoreLoading(false)
           dispatch(setPeople(people))
           
           
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
           
          <View style={{flex: 1}}>
            <MyFlatList
                          footerComponent={renderFooter}
                          showsVerticalScrollIndicator={true}
                          loading={ivisible}
                          data={data}
                          refreshing={refreshing}
                          onRefresh={() => setRefreshing(true)}
                       
                          onEndReached={renderEndReached}
                          renderItem={({ item }) => (
                          <CardPerson item={item}></CardPerson>
                            
                        )}
                      />
            
            </View>
           
        </MainContainer>
    );
};

export default WrappedComponent(Home)

