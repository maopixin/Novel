import { createBottomTabNavigator } from 'react-navigation';
import React from 'react'
import {Text} from "react-native"
import AntIcon from 'react-native-vector-icons/AntDesign'
import Books from '../pages/Books'
import Shop from '../pages/Shop'
import Rank from '../pages/Rank'

const TabNavigator = createBottomTabNavigator({
    BooksScreen:{
        screen:Books,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: ({tintColor}) => {
                return (
                    <Text style={{color:tintColor,textAlign:"center"}}>书架</Text>
                )
            },
            tabBarIcon:({tintColor}) => {
                return (
                    <AntIcon name="barschart" size={24} color={tintColor}/>
                )
            }
        }),
    },
    ShopScreen:{
        screen:Shop,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: ({tintColor}) => {
                return (
                    <Text style={{color:tintColor,textAlign:"center"}}>书城</Text>
                )
            },
            tabBarIcon:({tintColor}) => {
                return (
                    <AntIcon name="creditcard" size={24} color={tintColor}/>
                )
            }
        }),
    },
    RankScreen:{
        screen:Rank,
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: ({tintColor}) => {
                return (
                    <Text style={{color:tintColor,textAlign:"center"}}>排行榜</Text>
                )
            },
            tabBarIcon:({tintColor}) => {
                return (
                    <AntIcon name="linechart" size={24} color={tintColor}/>
                )
            }
        }),
    },
},{
    initialRouteName:"BooksScreen",
    defaultNavigationOptions:() => ({
        tabBarOptions: {
            activeTintColor: '#1b9fe2',
            inactiveTintColor: 'gray',
        }
    })
})

export default TabNavigator