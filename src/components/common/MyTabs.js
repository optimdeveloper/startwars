import React from 'react'
import { Keyboard } from 'react-native'
import { Tabs, Tab } from 'native-base'
import { Colors, Fonts } from '../../constants'


const MyTabs = ({ tabs }) => {
    return (
        <Tabs onChangeTab={(page) => {
            Keyboard.dismiss()
        }} tabBarUnderlineStyle={{ backgroundColor: "#B969E8", height: 1 }}
            tabBarBackgroundColor={Colors.white}>

            {
                tabs.map((tab, index) => (

                    <Tab heading={tab.name}
                        noShadow={true}
                        tabStyle={{ backgroundColor: Colors.backgroundColor }}
                        activeTabStyle={{ backgroundColor: Colors.backgroundColor }}
                        textStyle={{
                            color: Colors.white, fontFamily: Fonts.name.regular,
                            fontSize: Fonts.size._16px
                        }}
                        activeTextStyle={{ color: Colors.white, fontFamily: Fonts.name.regular, fontWeight: "bold", fontSize: Fonts.size._16px }}>
                        {tab.component}
                    </Tab>
                ))
            }
        </Tabs>
    )
}

export default MyTabs
