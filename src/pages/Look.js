import React from "react";
import { View, Platform, Text, SafeAreaView, StyleSheet, ScrollView, Dimensions, Animated, FlatList, Image, TouchableHighlight} from "react-native";
import Header from '../components/Header'
import TouchNovel from "../components/TouchNovel"
import AntIcon from 'react-native-vector-icons/AntDesign'
import {getCategoriWithNum} from '../api'
import { Portal, Toast } from '@ant-design/react-native'


const isAndroid = Platform.OS == "android";
const { width } = Dimensions.get('window');


export default class RankScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }
    state = {
        backgroundColor:"#409EFF",
    }
    
    render(){
        let {backgroundColor} = this.state;
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
                <View
                    style={S.container}
                ></View>
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