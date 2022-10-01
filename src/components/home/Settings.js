import React, {Component} from "react";
import {FlatList, Image, Text, View} from "react-native";
import {
    ButtonWithGradient,
    Clickable,
    CommonStyle,
    MainContainer,
} from "../common";
import Webview from "react-native-webview";
import {Colors, Images} from "../../constants";
import {Icon} from "native-base";
import ButtonPremium from "../common/ButtonPremium";

class Settings extends Component {
    render() {
        return (
            <MainContainer
                header={{
                    title: "Settings",
                    left: {
                        image: Images.ic_menu,
                        onPress: () => {
                            this.props.navigation.openDrawer();
                        },
                    },
                }}
            >
                <FlatList
                    style={{flex: 1, margin: 16}}
                    data={[
                        {
                            title: "Location",
                            icon: Images.location,
                            route: "AboutUs",
                        },
                        {
                            title: "Contacts",
                            icon: Images.contacts,
                            route: "Measurement",
                        },
                        {
                            title: "Photos",
                            icon: Images.photo,
                            route: "Measurement",
                        },
                        {
                            title: "Camera",
                            icon: Images.camera,
                            route: "Measurement",
                        },
                    ]}
                    renderItem={({item}) => (
                        <Clickable
                            onPress={() => {
                            }}
                            style={{
                                flexDirection: "row",
                                paddingVertical: 16,
                                borderBottomWidth: 1,
                                borderBottomColor: Colors.editTextHintColor,
                                alignItems: "center",
                            }}
                        >
                            <Image source={item.icon}/>
                            <Text
                                style={[
                                    CommonStyle.commonTextSubTitleStyle,
                                    {marginStart: 16},
                                ]}
                            >
                                {item.title}
                            </Text>
                        </Clickable>
                    )}
                    ListFooterComponent={() => (
                        <View
                            style={{
                                marginTop: 10,
                                // borderStyle: "solid",
                                // borderWidth: 1,
                                // borderColor: "white",
                            }}
                        >
                            <ButtonPremium
                                icon={require('../../../res/premium-ic.png')}
                                rightIcon={require('../../../res/arrow-ic.png')}
                                onPress={() =>
                                    this.props.navigation.navigate("SubcriptionsSettings")
                                }
                                title={'Become Premium'}
                                subtitle={'Create training without limits'}
                            />
                        </View>
                    )}
                />
            </MainContainer>
        );
    }
}

export default Settings;
