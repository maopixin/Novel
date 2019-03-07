import React from "react";
import { View, Platform, Text, ScrollView, StyleSheet, Image, Animated, Dimensions, ImageBackground} from "react-native";
import AnimateHeader from '../components/AnimateHeader'
import AntIcon from 'react-native-vector-icons/AntDesign'
import {getBookInfo} from '../api'
import { Portal, Toast } from '@ant-design/react-native'

const isAndroid = Platform.OS == "android";
const {width} = Dimensions.get('window');

export default class BooksScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }
    state = {
        backgroundColor:"#303133",
        bookInfo:{},
        scrollY: new Animated.Value(0)
    }
    componentWillMount(){
        const key = Toast.loading("努力获取书籍中",0);
        let id = this.props.navigation.getParam("id");
        getBookInfo(id).then((res)=>{
            if(res.status==1){
                this.setState({
                    bookInfo: res.data
                },()=>{
                    Portal.remove(key);
                })
            }
        })
    }
    render(){
        let {backgroundColor, bookInfo,scrollY} = this.state;
        return (
            <View
                style={{flex:1}}
            >
                <AnimateHeader 
                    title=""
                    backgroundColor={backgroundColor}
                    Left={<AntIcon name="left" size={20} color="#fff"/>}
                    onLeftPress={()=>{this.props.navigation.goBack()}}
                    Right={<Text style={S.boos}>书架</Text>}
                    onRightPress={()=>{this.props.navigation.navigate("BooksScreen")}}
                    scrollY={scrollY}
                    style={{position:"absolute",top:0,left:0,width,zIndex:100}}
                ></AnimateHeader>
                <ScrollView 
                    style={S.infoBox}
                    onScroll={
                        Animated.event([
                            { 
                                nativeEvent: { 
                                    contentOffset: { 
                                        y: this.state.scrollY
                                    }
                                }
                            }
                        ])
                    }
                >
                    <View style={{flex:1,backgroundColor:"#fff"}}>
                        <ImageBackground 
                            style={S.totalInfo}
                            source={{uri: `https://imgapi.jiaston.com/BookFiles/BookImages/${bookInfo.Img}`}}
                        >
                            <View style={S.imgBox}>
                                <Image
                                    style={{width: 75, height: 100}}
                                    source={{uri: `https://imgapi.jiaston.com/BookFiles/BookImages/${bookInfo.Img}`}}
                                />
                            </View>
                            <View></View>
                        </ImageBackground>
                        {
                            [1,1,1,1,1].map((item)=>{
                                return (
                                    <View style={{
                                        height:500,
                                    }}></View>

                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
            
        )
    }
}

const S = StyleSheet.create({
    infoBox:{
        flex:1,
        marginTop:-30
    },  
    boos:{
        borderWidth:1,
        borderColor:"#fff",
        borderRadius:4,
        paddingHorizontal:6,
        color:"#fff",
        lineHeight:20
    },
    totalInfo:{
        flexDirection:"row",
        paddingHorizontal:10,
        paddingTop:100
    },
})