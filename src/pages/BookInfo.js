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
                    height={215}
                    title={bookInfo.Name}
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
                    <View style={{flex:1}}>
                        <ImageBackground 
                            style={S.totalInfo}
                            blurRadius={4}
                            source={{uri: `https://imgapi.jiaston.com/BookFiles/BookImages/${bookInfo.Img}`}}
                        >
                            <View style={S.imgBox}>
                                <Image
                                    style={{width: 90, height: 120}}
                                    source={{uri: `https://imgapi.jiaston.com/BookFiles/BookImages/${bookInfo.Img}`}}
                                />
                            </View>
                            <View style={S.infoText}>
                                <Text style={S.infoTextTitle}>{bookInfo.Name}</Text>
                                <Text style={S.infoTextInfo}>作者：{bookInfo.Author}</Text>
                                <Text style={S.infoTextInfo}>类型：{bookInfo.CName}</Text>
                                <Text style={S.infoTextInfo}>状态：{bookInfo.BookStatus}</Text>
                                <Text style={S.infoTextInfo}>评价：{bookInfo.Score || 0}分</Text>
                            </View>
                        </ImageBackground>
                        <View style={S.btns}>
                            <View style={S.btnsItem}>
                                <View style={[S.btnsItemIcon,S.totop]}>
                                    <AntIcon name="totop" size={20} color="#fff"/>
                                </View>
                                <Text>推荐</Text>
                            </View>
                            <View style={S.btnsItem}>
                                <View style={[S.btnsItemIcon,S.sharealt]}>
                                    <AntIcon name="sharealt" size={20} color="#fff"/>
                                </View>
                                <Text>分享</Text>
                            </View>
                            <View style={S.btnsItem}>
                                <View style={[S.btnsItemIcon,S.close]}>
                                    <AntIcon name="close" size={20} color="#fff"/>
                                </View>
                                <Text>报错</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:"#fff",padding:10}}>
                            <View style={S.title}>
                                <Text style={S.titleText}>简介</Text>
                                <Text></Text>
                            </View>
                            <View>
                                <Text style={S.desc}>{bookInfo.Desc}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View>
                    <Text>24123545613</Text>
                </View>
            </View>
            
        )
    }
}

const S = StyleSheet.create({
    infoBox:{
        flex:1,
        backgroundColor:"#ccc"
    },  
    boos:{
        borderWidth:1,
        borderColor:"#fff",
        borderRadius:4,
        fontSize:12,
        paddingHorizontal:6,
        color:"#fff",
        lineHeight:20,
    },
    totalInfo:{
        flexDirection:"row",
        paddingHorizontal:10,
        paddingTop:80,
        paddingBottom:15,
    },
    infoText:{
        flex:1,
        paddingHorizontal:10
    },
    infoTextTitle:{
        fontSize:20,
        lineHeight:30,
        marginBottom:6,
        color:"#fff"
    },
    infoTextInfo:{
        lineHeight:20,
        color:"#fff"
    },
    btns:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingVertical:10,
        backgroundColor:"#fff",
        marginBottom:4
    },
    btnsItem:{
        flex:1,
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
    },
    btnsItemIcon:{
        width:30,
        height:30,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center",
        marginRight:10
    },  
    totop:{
        backgroundColor:"#67C23A"
    },
    sharealt:{
        backgroundColor:"green"
    },
    close:{
        backgroundColor:"red"
    },
    title:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    titleText:{
        fontSize:18,
        fontWeight:"bold",
        lineHeight:28
    },
    desc:{
        lineHeight:18,
        color:"#909399"
    }
})