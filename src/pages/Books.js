import React from "react";
import { View, Platform, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from '../components/Header'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Touch from '../components/Touch'

const isAndroid = Platform.OS == "android";

export default class BooksScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }
    state = {
        backgroundColor:"#409EFF"
    }
    render(){
        let {backgroundColor} = this.state;
        return (
            <SafeAreaView style={{flex:1,backgroundColor}}>
                <Header 
                    Left={<AntIcon name="menu-fold" size={20} color="#fff"/>}
                    backgroundColor={backgroundColor}
                    title="书架"
                    Right={
                        <View style={{flexDirection:"row"}}>
                            <AntIcon name="search1" size={20} color="#fff" style={{marginRight:30}}/>
                            <AntIcon name="plus" size={20} color="#fff"/>
                        </View>
                    }
                ></Header>
                <View style={S.container}>
                    <Touch>
                        <View style={S.box}>
                            <Text>
                                23454231354561356
                            </Text>
                        </View>
                    </Touch>
                </View>
            </SafeAreaView>
        )
    }
}

const S = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    box:{
        width:200,
        height:400,
        // backgroundColor:"red"
    }
})