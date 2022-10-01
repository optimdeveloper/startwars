import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Image } from "react-native";
import { Colors, Images } from "../../constants";
import AddNoteHistory from "../history/AddNoteHistory";
import History from "../history/History";
import NoteHistory from "../history/NoteHistory";
import SavedWorkouts from "../history/SavedWorkouts";
import Profile from "../profile/Profile";
import AddWeightIn from "../weightIn/AddWeightIn";
import WeightInList from "../weightIn/WeightInList";
import InProgressWorkout from "../workout/InProgressWorkout";
import Timer from "../workout/Timer";
import Home from "./Home";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function getTabBarVisible(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "Settings";

  if (routeName === "SubcriptionsSettings") {
    return false;
  }
  return true;
}

export default HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = Images.ic_home;
          } else if (route.name === "Workout") {
            iconName = Images.ic_add;
          } else if (route.name === "History") {
            iconName = Images.ic_document;
          } else if (route.name === "Calendar") {
            iconName = Images.ic_calendar;
          } else if (route.name === "Settings") {
            iconName = Images.ic_setting;
          }

          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{
                tintColor: route.name === "Workout" ? undefined : color,
              }}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.white,
        inactiveTintColor: "#909090",
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          backgroundColor: Colors.backgroundColor,
          borderTopWidth: 0,
          height: 65,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Calendar" component={CalendarStack} />
      <Tab.Screen name="Workout" component={WorkoutStack} />
      <Tab.Screen name="History" component={HistoryStack} />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisible(route),
        })}
      />
      
    </Tab.Navigator>
  );
};

const HomeStack = () => (
  <Stack.Navigator initialRouteName={"Home"} headerMode="none">
    <Stack.Screen component={Home} name="Home" />
    <Stack.Screen component={NoteHistory} name="NoteHistory" />
    <Stack.Screen component={SavedWorkouts} name="SavedWorkouts" />
    <Stack.Screen component={Profile} name="Profile" />
    <Stack.Screen component={WeightInList} name="WeightInList" />
    <Stack.Screen component={AddWeightIn} name="AddWeightIn" />
    <Stack.Screen component={InProgressWorkout} name="InProgressWorkout" />
    <Stack.Screen component={Timer} name="Timer" />
    <Stack.Screen component={AddNoteHistory} name="AddNoteHistory" />
  </Stack.Navigator>
);


