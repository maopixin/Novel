import React from "react";
import { View, Platform, Text, SafeAreaView, StyleSheet, ScrollView, Dimensions, Animated, FlatList, Image, TouchableHighlight} from "react-native";
import Header from '../components/Header'
import ScrollTab from '../components/ScrollTab'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { Tabs } from '@ant-design/react-native';
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
        let {navigation} = this.props;
        const tabs = [
            {
                title:"男生"
            },
            {
                title:"女生"
            },
            {
                title:"女生"
            }
        ]
        return (
            <SafeAreaView style={{flex:1,backgroundColor}}>
                <Header 
                    Left={<AntIcon name="left" size={20} color="#fff"/>}
                    onLeftPress={()=>navigation.goBack()}
                    backgroundColor={backgroundColor}
                    title="排行榜"
                ></Header>
                <View style={S.container}>
                    <ScrollTab
                        tabs={tabs}
                        t={1}
                    ></ScrollTab>
                </View>
            </SafeAreaView>
        )
    }
}

const S = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        flexDirection:"row"
    },
    list:{

    },
    content:{

    }
})
