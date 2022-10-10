import React, { useRef, useEffect } from 'react'
import { useState } from 'react'
import { View, Text, FlatList, RefreshControl, SafeAreaView } from 'react-native'
import { CommonStyle, ProgressView, NoDataView, ScrollContainer } from '../common'
import Indicator from '../CommonComponents/Indicator'

export default function MyFlatList({ renderItem,
    numColumns, style, loading, extraData, data,
    onRefresh, refreshing, noDataMsg, footerComponent,onLoadMore,onEndReached }) {
    const [initLoadMore,setInitLoadMore]=useState(false)
    const flatList = useRef(null)

    renderList = () => {

        return (
     
        <FlatList
          
            contentContainerStyle={{flexGrow: 1}}
            ListFooterComponent={footerComponent}
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
            onEndReached={onEndReached}
            onEndReachedThreshold={0.01}
        />
      
        )

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
        <SafeAreaView style={{flex:1}}>
      {render()}
    </SafeAreaView>
    )
}
