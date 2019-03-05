import React from "react";
import { View, Platform, Text, SafeAreaView } from "react-native";
import Header from '../components/Header'
import AntIcon from 'react-native-vector-icons/AntDesign'
const isAndroid = Platform.OS == "android";

export default class ShopScreen extends React.Component {
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
                    title="书城"
                    Right={
                        <View style={{flexDirection:"row"}}>
                            <AntIcon name="search1" size={20} color="#fff" style={{marginRight:30}}/>
                            <AntIcon name="plus" size={20} color="#fff"/>
                        </View>
                    }
                ></Header>
                <Text style={{flex:1,backgroundColor:"#fff"}}>BooksScreen</Text>
            </SafeAreaView>
        )
    }
}