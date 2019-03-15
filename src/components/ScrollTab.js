import React from 'react'
import {View, Text, ScrollView, StyleSheet, Dimensions, Animated} from 'react-native'

const {height, width} = Dimensions.get('window');
const tabBottomLineWidth = 16;

export default class ScrollTab extends React.Component {
    state = {
        scrollX: new Animated.Value(0)
    }
    render() {
        let {scrollX} = this.state;
        let {tabs} = this.props;
        const inputRangeMin = 0;
        const inputRangeMax = (tabs.length - 1) * width;
        const outputRangeMin = width / tabs.length / 2 - tabBottomLineWidth / 2;
        const outputRangeMax = width - outputRangeMin - tabBottomLineWidth;

        return (
            <View style={S.tabBox}>
                <View style={S.tabList}>
                    {
                        tabs.map((item,index)=>{
                            return <View
                                key={index}
                                style={S.tabItem}
                            >
                                <Text>{item.title}</Text>
                            </View>
                        })
                    }
                    <Animated.View 
                        style={[S.tabBottomLine,{
                            transform:[
                                {
                                    translateX: scrollX.interpolate({
                                        inputRange: [inputRangeMin,inputRangeMax],
                                        outputRange: [outputRangeMin,outputRangeMax]
                                    })
                                }
                            ]
                        }]}
                    ></Animated.View>
                </View>
                <Animated.ScrollView
                    style={{flex:1}}
                    pagingEnabled={true}
                    horizontal={true}
                    scrollEventThrottle={0}
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [
                            { 
                                nativeEvent: { 
                                    contentOffset: { 
                                        x: this.state.scrollX
                                    }
                                }
                            }
                        ],
                        { useNativeDriver: true }
                    )}
                >
                    {
                        tabs.map((item,index)=>{
                            return (
                                <View
                                    key={index}
                                    style={{width,flex:1}}
                                >
                                    <Text>1232</Text>
                                </View>
                            )
                        })
                    }
                </Animated.ScrollView>
            </View>
        )
    }
}

const S = StyleSheet.create({
    tabBox:{
        flex:1,
    },
    tabList:{
        flexDirection:"row",
        height:60,
        borderBottomWidth:1,
        borderBottomColor:"#ccc"
    },
    tabItem:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    tabItemText:{
        fontSize:16,
    },
    tabBottomLine:{
        width:tabBottomLineWidth,
        height:4,
        backgroundColor:"#409EFF",
        borderRadius:2,
        position:"absolute",
        top:45,
    }
})