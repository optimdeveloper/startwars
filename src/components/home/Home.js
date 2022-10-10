
import React, {useEffect, useState} from "react";
import {
    MainContainer,
    MyFlatList,
} from "../common";
import styles from './styles'

import { WrappedComponent } from "../CommonComponents";
import CardPerson from "./CardPerson";
import {  Text, View,ActivityIndicator } from 'react-native';
import {getPeople} from '../../actions/HomeActions'
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [page,setPage]=useState(1)
  const isListEnd = useSelector((state) => state.common.isListEnd);
  const loading = useSelector((state) => state.common.loading);
  const moreLoading = useSelector((state) => state.common.loadMore);
  const data = useSelector((state) => state.common.people);
  const err = useSelector((state) => state.common.error);

  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false)
  const renderFooter = () => (
    <View style={styles.footerText}>
        {moreLoading && <ActivityIndicator />}
        {isListEnd && <Text>No hay mas datos que cargar</Text>}
    </View>
)
useEffect(() => {
  getData(page)
}, [page]);

const renderEndReached = () => {
  if (!isListEnd && !moreLoading) {
    setPage(page + 1)

  }
}
const getData=()=>{
  dispatch(getPeople(page))
}
  
    return (
        <MainContainer header={{ title: "People Of Star Wars",noLeft:true}}>
          <View style={{flex: 1}}>
            <MyFlatList
                          footerComponent={renderFooter}
                          showsVerticalScrollIndicator={true}
                          loading={loading}
                          data={data}
                          noDataMsg={err}
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

