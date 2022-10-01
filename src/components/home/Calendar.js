import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { FlatList, SectionList, Image, StatusBar, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch } from 'react-redux'
import { setSessionField } from '../../actions/SessionActions'
import { Colors, Images, Utils } from '../../constants'
import { TEMP_IMG } from '../../core/AppConstants'
import { KEY_USER_DATA } from '../../core/data/PrefKeys'
import { push } from '../../navigation/RootNavigation'
import { Clickable, CommonStyle, ImageButton, MainContainer, MyFlatList, MyNetworkImage, MyText, ProgressView, ScrollContainer } from '../common'
import { HomeWorkoutItem, SeperatorView, WrappedComponent } from '../CommonComponents'
import { workoutApis } from '../workout/WorkoutApi'
import styles from './styles'
const Calendar = ({ navigation, session }) => {
    const [nearByRestaurant, setNearByRestaurant] = useState([])
    const [popularRestaurants, setPopularRestaurant] = useState([])
    const [blackOwned, setBlackOwned] = useState([])
    const [foods, setFoods] = useState([])
    const [categories, setCategories] = useState([])
    const [bookings, setBookings] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [week, setWeek] = useState([])
    const [currentDate, setCurretnDate] = useState(moment())
    const [currentWeekDate, setCurrentWeekDate] = useState(moment())

    const [workoutList, setWorkoutList] = useState([])
    const [address, setAddress] = useState("Loading...")
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const user = session[KEY_USER_DATA]
    const dispatch = useDispatch()
    useEffect(() => {
        getCurrentWeek()
        console.log("Run")

    }, [])

    useEffect(() => {
        if (refreshing)
            getWorkouts()

    }, [refreshing])


    useEffect(() => {

        getWorkouts()

    }, [selectedDate])

    const getWorkouts = () => {
        setLoading(!refreshing)
        workoutApis.getWorkouts({ workout_date: Utils.formatDate(selectedDate.getTime(), "YYYY-MM-DD", true) }, (res) => {
            setLoading(false)
            setRefreshing(false)
           
            const workouts = res.workout_list.filter((item) => item.workout_date==selectedDate.toISOString().split("T")[0])
            console.log('filter workout',workouts)
            setWorkoutList(workouts)
            if (res.workout_list?.length)
                dispatch(setSessionField("lastWorkout", res.workout_list[res.workout_list.length - 1]))
        }, () => {
            setLoading(false)
            setRefreshing(false)
        })
    }
    const getCurrentWeek = () => {

        var weekStart = currentDate.clone().startOf('isoWeek');
        var weekEnd = currentDate.clone().endOf('isoWeek');

        var days = [];

        for (var i = 0; i <= 6; i++) {
            const weekDay = moment(weekStart).add(i, 'days')
            const date = weekDay.format("DD")
            const day = weekDay.format("dd")
            days.push({ date, day, momentDate: weekDay.toDate() });
        }
        console.log(days);
        setWeek(days)
    }

    const nextWeek = () => {

        var weekStart = currentWeekDate.add(1, "week").startOf('isoWeek');

        var days = [];

        for (var i = 0; i <= 6; i++) {
            const weekDay = moment(weekStart).add(i, 'days')
            const date = weekDay.format("DD")
            const day = weekDay.format("dd")
            days.push({ date, day, momentDate: weekDay.toDate() });
        }
        console.log(days);
        setWeek(days)
    }

    const prevWeek = () => {

        var weekStart = currentWeekDate.subtract(1, "week").startOf('isoWeek');

        console.log("weekStart", weekStart.toDate())
        var days = [];

        for (var i = 0; i <= 6; i++) {
            const weekDay = moment(weekStart).add(i, 'days')
            const date = weekDay.format("DD")
            const day = weekDay.format("dd")
            days.push({ date, day, momentDate: weekDay.toDate() });
        }
        setWeek(days)
    }

    return (
        <MainContainer >
            <StatusBar translucent backgroundColor={Colors.backgroundColor} barStyle="light-content" />


            <View style={[CommonStyle.horizontalContainerStyleWithCenter, CommonStyle.statusBarPadding, { paddingHorizontal: 18, marginBottom: 8, marginTop: 8 }]}>
                <ImageButton onPress={() => {
                    navigation.openDrawer()
                }} source={Images.ic_menu} />
                <View style={[styles.dropDownStyle]}>
                    <Text numberOfLines={1} style={styles.todayTextStyle}>Today</Text>
                    <Text numberOfLines={1} style={styles.calenderTextStyle}>Calendar</Text>
                </View>
                <Clickable onPress={() => {
                    console.log("li")
                    navigation.navigate("Profile")
                }}>
                    <MyNetworkImage source={{ uri: user.profile_pic }} style={[CommonStyle.avatarSmallStyle]} />
                </Clickable>
            </View>
            <View style={styles.topBarStyle}>

                <View style={{ flexDirection: "row", paddingHorizontal: 16, paddingVertical: 16, alignItems: "center", justifyContent: "space-between" }}>
                    <ImageButton style={{ width: 25, height: 25, resizeMode: "contain" }} onPress={prevWeek} source={Images.ic_left} />
                    <Text style={styles.dateTextStyle}>{currentWeekDate.format("MMMM")} {currentWeekDate.format("YYYY")}</Text>
                    <ImageButton style={{ width: 25, height: 25, resizeMode: "contain" }} onPress={nextWeek} source={Images.ic_right} />

                </View>
                <FlatList
                    style={{ flexGrow: 0 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={week}
                    renderItem={({ item, index }) => (
                        <Clickable onPress={() => setSelectedDate(item.momentDate)}>
                            <LinearGradient colors={moment(selectedDate).isSame(item.momentDate, "D") ? [Colors.buttonColor, Colors.buttonColor2] : [Colors.black, Colors.black]} style={{ width: 64, justifyContent: "center", alignItems: "center", height: 74, borderRadius: 14, marginStart: index == 0 ? 16 : 0, marginHorizontal: 5 }}>
                                <Text style={styles.dateStyle}>{item.date}</Text>
                                <Text style={styles.dayStyle}>{item.day}</Text>
                            </LinearGradient>
                        </Clickable>
                    )}
                />
                {loading ? <ProgressView /> :

                    <MyFlatList
                        loading={loading}
                        style={{ flex: 1, }}
                        showsVerticalScrollIndicator={false}
                        refreshing={refreshing}
                        onRefresh={() => setRefreshing(true)}
                        data={workoutList}
                        renderItem={({ item }) => <View>

                            <SeperatorView style={{ paddingHorizontal: 16, paddingTop: 22 }} title={Utils.formatDate(item.workout_date, "dddd DD MMM ,YYYY",true)} />
                            <FlatList
                                showsHorizontalScrollIndicator={false}

                                horizontal
                                data={[item]}
                                renderItem={({ index, item }) => <HomeWorkoutItem item={item} index={index} />}
                            />
                        </View>}
                    />}
            </View>


        </MainContainer>
    )
}


export default WrappedComponent(Calendar)
