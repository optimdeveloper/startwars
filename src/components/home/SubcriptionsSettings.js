import {Link} from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import {
    Linking,
    Platform,
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TouchableNativeFeedback,
    ScrollView, Image,
} from "react-native";
import {
    purchaseUpdatedListener,
    purchaseErrorListener,
    useIAP,
    requestSubscription,
} from "react-native-iap";
import {Colors, Utils, Images} from "../../constants";
import {reset} from "../../navigation/RootNavigation";
import {
    AlertDialog,
    ProgressDialog,
    CommonStyle,
    MyFlatList,
} from "../common";
import {WrappedComponent} from "../CommonComponents";
import {homeApi} from "./HomeApi";
import LinearGradient from "react-native-linear-gradient";
import SubscriptionItem from "../splash/SubscriptionItem";
import {setBoolean} from "../../core/data/PrefUtils";
import {FREE_VERSION} from "../../core/data/PrefKeys";

const SubscriptionsSettings = ({navigation, session}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const skus = Platform.select({
        android: ["com.fitlogger.bronze", "com.fitlogger.gold"],
        ios: ["com.fitlogger.bronze", "com.fitlogger.gold"],
    });
    const {
        connected,
        subscriptions,
        currentPurchase,
        getSubscriptions,
        requesSubscription,
    } = useIAP();
    useEffect(() => {
        if (connected && !currentPurchase?.purchaseToken) {
            getSubscriptions(skus).then();
            purchaseUpdatedListener((purchase) => {
                // Linking.openURL(`https://wa.me/+918401015350?text=${JSON.stringify(purchase)}`)
                console.log("purchase", purchase);
                if (purchase.transactionReceipt) {
                    ProgressDialog.show();
                    homeApi.setSubscription(
                        {
                            type: Platform.select({android: "a", ios: "i"}),
                            data: JSON.stringify(purchase),
                        },
                        () => {
                            ProgressDialog.hide();

                            // Utils.showToast("Puchase Receipt :" + purchase.transactionReceipt)

                            console.log("selectedIndex", selectedIndex, subscriptions);
                            AlertDialog.show({
                                title: "Congratulations",
                                message: "You are subscribed successfully",
                                positiveButton: {
                                    title: "Explore Now",
                                    onPress: () => {
                                        AlertDialog.hide();
                                        reset("DrawerHome");
                                    },
                                },
                                cancelable: false,
                            });
                        }
                    );
                }
            });
            purchaseErrorListener((error) => {
                if (error.responseCode != 1 && error.code == "E_USER_CANCELLED") {
                    AlertDialog.show({
                        title: "Subscription Error",
                        message: error.message,
                        positiveButton: {
                            title: "Okay",
                            onPress: () => {
                                AlertDialog.hide();
                                // reset("DrawerHome")
                            },
                        },
                        cancelable: false,
                    });
                }
                console.log("purchaseError", error);
            });
        }
    }, []);

    /*useEffect(() => {
        console.log("subscriptions", subscriptions);
    }, [subscriptions]);*/

    const onSubmit = async () => {
        if (selectedIndex >= 0) {
            try {
                console.log(subscriptions[selectedIndex].productId);
                setIsLoading(true);
                const res = await requestSubscription(
                    subscriptions[selectedIndex].productId
                );
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log("error", error);
            }
        } else {
            /*AlertDialog.show({
                title: "Information",
                message: "You must select a plan",
                positiveButton: {
                    title: "ok",
                    onPress: () => {
                        AlertDialog.hide();
                        //reset("DrawerHome");
                    },
                },
                cancelable: false,
            });*/
        }
    };

    return (
        <ImageBackground
            style={CommonStyle.containerStyleWithCenter}
            imageStyle={{resizeMode: "stretch"}}
            source={Images.splashBg}
        >
            <LinearGradient
                useAngle
                angle={0}
                style={{flex: 1, paddingTop: 40, paddingBottom: 10}}
                colors={["black", "black", "#00000010"]}
                start={{x: 0, y: 1}}
                end={{x: 0, y: 0}}
            >
                <ScrollView>
                    <StatusBar
                        translucent
                        backgroundColor={Colors.backgroundColor}
                        barStyle="light-content"
                    />
                    <View style={{paddingHorizontal: 20, paddingVertical: 5}}>
                        <Text
                            style={{color: Colors.white, fontWeight: "bold", fontSize: 21}}
                        >
                            YOUR CHANGES STARTS TODAY,{"\n"}DON'T MEASURE YOUR PROGRESS{"\n"}
                            USING SOMEONE ELSE'S RULER!
                        </Text>

                        <Text
                            style={{
                                marginTop: 20,
                                color: Colors.secondaryColor,
                                fontSize: 16,
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            GET EVEN MORE WITH FITLOGGER PRO!
                        </Text>

                        <View style={{marginTop: 10}}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Text
                                    style={{
                                        color: Colors.white,
                                        fontWeight: "bold",
                                        fontSize: 15,
                                    }}
                                >
                                    What you get:
                                </Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: Colors.white,
                                            fontWeight: "bold",
                                            fontSize: 15,
                                        }}
                                    >
                                        Premium
                                    </Text>
                                    <Text
                                        style={{
                                            color: Colors.white,
                                            marginLeft: 15,
                                            fontWeight: "bold",
                                            fontSize: 15,
                                        }}
                                    >
                                        Free
                                    </Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    alignItems: "center",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    height: 45,
                                }}
                            >
                                <View style={{flexDirection: "row", alignItems: "center", flex: 3}}>
                                    <Image style={{marginRight: 10}} source={require('../../../res/weight-ic.png')}/>
                                    <Text
                                        style={{
                                            color: Colors.white,
                                            fontWeight: "bold",
                                            fontSize: 14,
                                        }}
                                    >
                                        Create Unlimited Workouts
                                    </Text>
                                </View>
                                <View style={{flexDirection: "row", alignItems: "center", flex: 1}}>
                                    <Image source={require('../../../res/checked.png')}/>
                                    <Image style={{marginLeft: 38}} source={require('../../../res/unchecked.png')}/>
                                </View>
                            </View>
                            <View
                                style={{
                                    borderWidth: 1,
                                    borderStyle: "dotted",
                                    backgroundColor: Colors.textPrimaryColor,
                                    height: 0.5,
                                    opacity: 0.3,
                                }}
                            />
                            <View
                                style={{
                                    alignItems: "center",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    height: 45,
                                }}
                            >
                                <View style={{flexDirection: "row", alignItems: "center", flex: 3}}>
                                    <Image style={{marginRight: 10}} source={require('../../../res/ads-ic.png')}/>
                                    <Text
                                        style={{
                                            color: Colors.white,
                                            fontWeight: "bold",
                                            fontSize: 14,
                                        }}
                                    >
                                        No Ads
                                    </Text>
                                </View>
                                <View style={{flexDirection: "row", alignItems: "center", flex: 1}}>
                                    <Image source={require('../../../res/checked.png')}/>
                                    <Image style={{marginLeft: 38}} source={require('../../../res/unchecked.png')}/>
                                </View>
                            </View>
                            <View
                                style={{
                                    borderWidth: 1,
                                    borderStyle: "dotted",
                                    backgroundColor: Colors.textPrimaryColor,
                                    height: 0.5,
                                    opacity: 0.3,
                                }}
                            />
                            <View
                                style={{
                                    alignItems: "center",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    height: 45,
                                }}
                            >
                                <View style={{flexDirection: "row", alignItems: "center", flex: 3}}>
                                    <Image style={{marginRight: 10}} source={require('../../../res/progress-ic.png')}/>
                                    <Text
                                        style={{
                                            color: Colors.white,
                                            fontWeight: "bold",
                                            fontSize: 14,
                                        }}
                                    >
                                        Logs Your measurements
                                    </Text>
                                </View>
                                <View style={{flexDirection: "row", alignItems: "center", flex: 1}}>
                                    <Image source={require('../../../res/checked.png')}/>
                                    <Image style={{marginLeft: 38}} source={require('../../../res/checked.png')}/>
                                </View>
                            </View>
                            <View
                                style={{
                                    borderWidth: 1,
                                    borderStyle: "dotted",
                                    backgroundColor: Colors.textPrimaryColor,
                                    height: 0.5,
                                    opacity: 0.3,
                                }}
                            />
                            <View
                                style={{
                                    alignItems: "center",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    height: 45,
                                }}
                            >
                                <View style={{flexDirection: "row", alignItems: "center", flex: 3}}>
                                    <Image style={{marginRight: 10}} source={require('../../../res/file-ic.png')}/>
                                    <Text
                                        style={{
                                            color: Colors.white,
                                            fontWeight: "bold",
                                            fontSize: 14,
                                        }}
                                    >
                                        Save your workouts history
                                    </Text>
                                </View>
                                <View style={{flexDirection: "row", alignItems: "center", flex: 1}}>
                                    <Image source={require('../../../res/checked.png')}/>
                                    <Image style={{marginLeft: 38}} source={require('../../../res/checked.png')}/>
                                </View>
                            </View>
                            <View
                                style={{
                                    borderWidth: 1,
                                    borderStyle: "dotted",
                                    backgroundColor: Colors.textPrimaryColor,
                                    height: 0.5,
                                    opacity: 0.3,
                                }}
                            />
                            <View
                                style={{
                                    alignItems: "center",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    height: 45,
                                }}
                            >
                                <View style={{flexDirection: "row", alignItems: "center", flex: 3}}>
                                    <Image style={{marginRight: 10}} source={require('../../../res/note-ic.png')}/>
                                    <Text
                                        style={{
                                            color: Colors.white,
                                            fontWeight: "bold",
                                            fontSize: 14,
                                        }}
                                    >
                                        Save your note history
                                    </Text>
                                </View>
                                <View style={{flexDirection: "row", alignItems: "center", flex: 1}}>
                                    <Image source={require('../../../res/checked.png')}/>
                                    <Image style={{marginLeft: 38}} source={require('../../../res/checked.png')}/>
                                </View>
                            </View>
                            <View
                                style={{
                                    borderWidth: 1,
                                    borderStyle: "dotted",
                                    backgroundColor: Colors.textPrimaryColor,
                                    height: 0.5,
                                    opacity: 0.3,
                                }}
                            />
                        </View>
                    </View>

                    <View style={{paddingHorizontal: 15, marginTop: 25}}>
                        <View style={{marginBottom: 15}}>
                            <TouchableNativeFeedback
                                onPress={() =>
                                    requestAnimationFrame(() => {
                                        setSelectedIndex(0);
                                    })
                                }
                                background={TouchableNativeFeedback.Ripple(Colors.buttonColor2)}
                            >
                                <LinearGradient
                                    useAngle
                                    angle={45}
                                    start={{x: 1, y: 1}}
                                    end={{x: 1, y: 0}}
                                    colors={
                                        selectedIndex === 0
                                            ? [Colors.buttonColor, Colors.buttonColor2]
                                            : ["#000", "#000"]
                                    }
                                    style={{borderRadius: 15}}
                                >
                                    <View
                                        style={{
                                            borderWidth: selectedIndex === 0 ? 0 : 1,
                                            borderColor: Colors.secondaryColor,
                                            borderRadius: 15,
                                            paddingVertical: 20,
                                            paddingHorizontal: 12,
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            backgroundColor: "color",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color:
                                                    selectedIndex === 0
                                                        ? Colors.white
                                                        : Colors.secondaryColor,
                                                fontWeight: "bold",
                                                fontSize: 17,
                                            }}
                                        >
                                            MONTHLY ACCESS
                                        </Text>
                                        <Text
                                            style={{
                                                color:
                                                    selectedIndex === 0
                                                        ? Colors.white
                                                        : Colors.secondaryColor,
                                                fontWeight: "bold",
                                                fontSize: 17,
                                            }}
                                        >
                                            $4.99
                                        </Text>
                                    </View>
                                </LinearGradient>
                            </TouchableNativeFeedback>
                        </View>
                        <TouchableNativeFeedback
                            onPress={() =>
                                requestAnimationFrame(() => {
                                    setSelectedIndex(1);
                                })
                            }
                            background={TouchableNativeFeedback.Ripple(Colors.secondaryColor)}
                        >
                            <LinearGradient
                                useAngle
                                angle={45}
                                start={{x: 1, y: 1}}
                                end={{x: 1, y: 0}}
                                colors={
                                    selectedIndex === 1
                                        ? [Colors.buttonColor, Colors.buttonColor2]
                                        : ["#000", "#000"]
                                }
                                style={{borderRadius: 15}}
                            >
                                <View
                                    style={{
                                        borderWidth: selectedIndex === 1 ? 0 : 1,
                                        borderColor: Colors.secondaryColor,
                                        borderRadius: 15,
                                        paddingVertical: 20,
                                        paddingHorizontal: 12,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color:
                                                selectedIndex === 1
                                                    ? Colors.white
                                                    : Colors.secondaryColor,
                                            fontWeight: "bold",
                                            fontSize: 17,
                                        }}
                                    >
                                        YEARLY ACCESS
                                    </Text>
                                    <Text
                                        style={{
                                            color:
                                                selectedIndex === 1
                                                    ? Colors.white
                                                    : Colors.secondaryColor,
                                            fontWeight: "bold",
                                            fontSize: 17,
                                        }}
                                    >
                                        $19.99
                                    </Text>
                                </View>
                            </LinearGradient>
                        </TouchableNativeFeedback>
                    </View>
                    <TouchableOpacity onPress={() => {
                        setBoolean(FREE_VERSION, true).then(() => {
                            reset("DrawerHome");
                        })
                    }}>
                        <View style={{alignItems: "center", marginVertical: 18}}>
                            <Text
                                style={{
                                    color: Colors.white,
                                    fontWeight: "bold",
                                    textDecorationLine: "underline",
                                    fontSize: 15,
                                }}
                            >
                                Or continue with a limited version
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/*<TouchableOpacity onPress={() => console.log("hello word")}>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  color: Colors.buttonColor,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Restore Purchase
              </Text>
            </View>
          </TouchableOpacity>*/}
                    <View style={{paddingHorizontal: 15, marginVertical: 15}}>
                        <TouchableNativeFeedback
                            disabled={isLoading}
                            onPress={() =>
                                requestAnimationFrame(() => {
                                    onSubmit();
                                })
                            }
                            background={TouchableNativeFeedback.Ripple(
                                Colors.buttonColor,
                                false
                            )}
                        >
                            <LinearGradient
                                useAngle
                                angle={0}
                                start={{x: 1, y: 1}}
                                end={{x: 1, y: 0}}
                                colors={[Colors.buttonColor2, Colors.buttonColor]}
                                style={{
                                    borderRadius: 15,
                                    padding: 16,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Text style={{color: Colors.white, fontSize: 17}}>
                                    Continue
                                </Text>
                            </LinearGradient>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{paddingHorizontal: 20}}>
                        <Text style={{color: Colors.white, fontSize: 12}}>
                            Lifetime FitLogger is not a subscription service, it is a one-off
                            {"\n"}payment which is charged to your iTunes account at{"\n"}
                            confirmation of purchase. All prices include applicable local
                            {"\n"}
                            sales taxes.{" "}
                            <TouchableNativeFeedback
                                onPress={() =>
                                    requestAnimationFrame(() => {
                                        console.log("Terms");
                                    })
                                }
                                background={TouchableNativeFeedback.Ripple(
                                    Colors.textPrimaryColor
                                )}
                                style={{borderWidth: 1, borderColor: "white"}}
                            >
                                <Text
                                    style={{
                                        color: Colors.buttonColor,
                                        fontSize: 11,
                                        textDecorationLine: "underline",
                                    }}
                                >
                                    Terms of Use
                                </Text>
                            </TouchableNativeFeedback>{" "}
                            |{" "}
                            <TouchableNativeFeedback
                                onPress={() =>
                                    requestAnimationFrame(() => {
                                        console.log("Privacy");
                                    })
                                }
                                background={TouchableNativeFeedback.Ripple(
                                    Colors.textPrimaryColor
                                )}
                            >
                                <Text
                                    style={{
                                        color: Colors.buttonColor,
                                        fontSize: 11,
                                        textDecorationLine: "underline",
                                    }}
                                >
                                    Privacy Policy
                                </Text>
                            </TouchableNativeFeedback>
                        </Text>
                    </View>

                    {/* <MyFlatList
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            loading={subscriptions.length <= 0}
            data={subscriptions}
            renderItem={({ item, index }) => (
              <SubscriptionItem
                selected={index === selectedIndex}
                item={item}
                onPress={() => {
                  setSelectedIndex(index);
                }}
              />
            )}
          /> */}

                    {/*
      <ButtonWithGradient
        style={{ marginHorizontal: 8, marginVertical: 8 }}
        disabled={selectedIndex == -1}
        onPress={async () => {
          console.log(subscriptions[selectedIndex].productId);
          try {
            const res = await requestSubscription(
              subscriptions[selectedIndex].productId
            );
          } catch (error) {
            console.log("error", error);
          }
        }}
        title="Subscribe Now"
      /> */}
                </ScrollView>
            </LinearGradient>
        </ImageBackground>
    );
};

export default WrappedComponent(SubscriptionsSettings);
