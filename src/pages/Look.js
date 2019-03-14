import React from "react";
import { View, Platform, Text, SafeAreaView, StyleSheet, ScrollView, Dimensions, Animated, FlatList, Image, TouchableHighlight} from "react-native";
import Header from '../components/Header'
import AntIcon from 'react-native-vector-icons/AntDesign'
import {List} from '@ant-design/react-native'
import {getCategoriWithNum} from '../api'
import { Portal, Toast } from '@ant-design/react-native'

const Item = List.Item;
const Brief = Item.Brief;
const isAndroid = Platform.OS == "android";
const { width } = Dimensions.get('window');


export default class LookScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }
    state = {
        backgroundColor:"#409EFF",
        navigatorList:[
            {
                title:"排行榜",
                icon:(size,color,style)=><AntIcon name="linechart" size={size} color={color} style={style}/>,
                color:"red",
                link:"Rank"
            },
            {
                title:"分类",
                icon:(size,color,style)=><AntIcon name="tags" size={size} color={color} style={style}/>,
                color:"blue",
                link:"Classify"
            }
        ]
    }
    
    render(){
        let {backgroundColor,navigatorList} = this.state;
        let {navigation} = this.props;
        return (
            <SafeAreaView style={{flex:1,backgroundColor}}>
                <Header 
                    Left={<AntIcon name="menu-fold" size={20} color="#fff"/>}
                    backgroundColor={backgroundColor}
                    title="发现"
                    Right={
                        <View style={{flexDirection:"row"}}>
                            <AntIcon name="search1" size={20} color="#fff"/>
                        </View>
                    }
                ></Header>
                <ScrollView
                    style={S.container}
                >
                    <List>
                        {
                            navigatorList.map((item,index)=>{
                                return (
                                    <Item 
                                        thumb={item.icon(20,item.color,{marginRight:10})}
                                        arrow="horizontal" 
                                        onPress={()=>{
                                            navigation.navigate(item.link)
                                        }}
                                        key={index}
                                    >
                                        {item.title}
                                    </Item>
                                )
                            })
                        }
                    </List>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const S = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    }
})