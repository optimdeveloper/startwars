import React, { useRef, useEffect } from 'react'
import { useState } from 'react'
import { View, Text, FlatList, RefreshControl } from 'react-native'
import { CommonStyle, ProgressView, NoDataView, ScrollContainer } from '../common'
import Indicator from '../CommonComponents/Indicator'

export default function MyFlatList({ renderItem,
    numColumns, style, loading, extraData, data,
    onRefresh, refreshing, onEndReached, noDataMsg, footerComponent,onLoadMore }) {
    const [initLoadMore,setInitLoadMore]=useState(false)
    const flatList = useRef(null)

    // useEffect(() => {

    //     if (footerComponent && flatList && flatList.current) {
    //         setTimeout(() => {

    //             flatList.curre   nt.scrollToEnd({ animated: true })

    //         }, 100)
    //     }
    // }, [footerComponent])
    renderList = () => {

        return (<FlatList
            onLayout={(e) => {
                console.log("e")
            }}
            onMomentumScrollEnd={(e) => {
                setInitLoadMore(true)
              }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={data}
            ref={flatList}
            bounces={true}
            refreshing={refreshing}
            numColumns={numColumns}
            style={style}
            onRefresh={onRefresh}
            extraData={extraData}
            renderItem={renderItem}
            keyExtractor={(item, index) => "key" + index}
            onEndReached={(d)=>{
               if(initLoadMore){
                if(data.length >= 10) onLoadMore()
               }
             }
            }
            onEndReachedThreshold={0.05}
            ListFooterComponent={footerComponent}
        />)

    }

    renderLoading = () => {

        return (<Indicator text="Loading" />)

    }

    renderNoData = () => {

        return (<ScrollContainer
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            <NoDataView message={noDataMsg || "Failed to Load Data"} />
        </ScrollContainer>)
    }


    render = () => {

        return loading ? renderLoading() : data.length > 0 ? renderList() : renderNoData()

    }

    return (
        <View style={CommonStyle.containerStyle}>

            {render()}

        </View>
    )
}
