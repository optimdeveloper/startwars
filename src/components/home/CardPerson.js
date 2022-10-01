import React from "react";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, Fonts, Images } from "../../constants";
import { Clickable, ImageButton, MyFlatList } from "../common";
import {navigate, push, reset} from "../../navigation/RootNavigation";

export default function CardPerson({ data,loadMore,loading }) {

  const [refreshing, setRefreshing] = useState(false)
  
  return (
  <View style={{flex: 1}}>
   <MyFlatList
                    
                    showsVerticalScrollIndicator={true}
                    loading={loading}
                    data={data}
                    refreshing={refreshing}
                    onRefresh={() => setRefreshing(true)}
                    onLoadMore={loadMore}
                    renderItem={({ item }) => (
                      <Clickable onPress={() => {
                        navigate("Measurement",{data:item})
                    }}>
                      <View style={styles.container}>
                        <View style={styles.viewTop}>
                          <View style={styles.viewF}>
                            <Text style={styles.labelT}>{item.name}</Text>
                            <Text style={styles.labelB}>{item.name_planet}</Text>
                          </View>
                        </View>
          
                        <View style={styles.viewL}>
                          <ImageButton source={Images.ic_right}/>
                        </View>
                      </View>
                    </Clickable>
                      
                  )}
                />
      
   </View>
  );
}
const styles = StyleSheet.create({
  touch: {
    flexDirection: "row",
    flex: 3,
  },
  containerTop: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 5,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth:1,
    borderBottomColor:Colors.grayColor,
    paddingBottom:20
  },
  label: {
    fontSize: Fonts.size._12px,
  },
  viewTop: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  viewF: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  labelT: {
    color: Colors.black_real,
    fontWeight: "bold",
    fontSize: Fonts.size._14px,
  },
  labelB: {
    color: Colors.grayColor,
    fontSize: Fonts.size._12px,
    fontWeight:"800"
  },
  viewL: {
    flex: 1,
    alignItems: "flex-end",
    marginBottom: 15,
    marginRight:15
  },
});
