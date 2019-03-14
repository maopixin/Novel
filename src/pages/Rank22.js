import React from "react";
import { View, Platform, Text, SafeAreaView, StyleSheet, ScrollView, Dimensions, Animated, FlatList, Image, TouchableHighlight} from "react-native";
import Header from '../components/Header'
import TouchNovel from "../components/TouchNovel"
import AntIcon from 'react-native-vector-icons/AntDesign'
import {getRank} from '../api'
import { Portal, Toast } from '@ant-design/react-native'


const isAndroid = Platform.OS == "android";
const { width } = Dimensions.get('window');
const listPadding = 10;
const itemWidth = (width - listPadding * 2) / 6;
const checkWidth = 50;


export default class RankScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }
    state = {
        refreshing: false,
        backgroundColor:"#409EFF",
        select:[
            {
                checkIndex:0,
                left: new Animated.Value(listPadding + (itemWidth-checkWidth) / 2),
                child:[
                    {
                        text:"男生",
                        type:"man"
                    },
                    {
                        text:"女生",
                        type:"lady"
                    }
                ]
            },
            {
                checkIndex:0,
                left: new Animated.Value(listPadding + (itemWidth-checkWidth) / 2),
                child:[
                    {
                        text:"最热",
                        type:"hot"
                    },
                    {
                        text:"推荐",
                        type:"commend"
                    },
                    {
                        text:"完结",
                        type:"over"
                    },
                    {
                        text:"收藏",
                        type:"collect"
                    },
                    {
                        text:"新书",
                        type:"new"
                    },
                    {
                        text:"评分",
                        type:"vote"
                    },
                ]
            },
            {
                checkIndex:0,
                left: new Animated.Value(listPadding + (itemWidth-checkWidth) / 2),
                child:[
                    {
                        text:"周榜",
                        type:"week"
                    },
                    {
                        text:"月榜",
                        type:"month"
                    },
                    {
                        text:"总榜",
                        type:"total"
                    }
                ]
            }
        ],
        novelList:[],
        page:1
    }
    // 组件挂载之前请求一次数据
    componentWillMount = ()=> {
        this.getData();
    }
    getData = () => {
        let {novelList,page} = this.state;
        if(page>5){
            Toast.info("已经到底了", 1000);
        }else{
            const key = Toast.loading("努力加载中", 0);
        
            getRank({
                url:this.getSearchUrl(this.state.page)
            })
            .then(res=>{
                if(res.status=="1"){
                    this.setState({
                        novelList:[...novelList,...res.data.BookList],
                        page:page + 1
                    },()=>{
                        Portal.remove(key)
                    })
                }else{
    
                }
            })
        }
    }
    // 获取数据请求地址
    getSearchUrl = (page) => {
        let {select} = this.state;
        return `https://shuapi.jiaston.com/top/${select[0].child[select[0].checkIndex].type}/top/${select[1].child[select[1].checkIndex].type}/${select[2].child[select[2].checkIndex].type}/${page}.html`
    }
    // 筛选条件点击时
    itemPress = (i,index) => {
        let {select} = this.state;
        let toValue = listPadding + (itemWidth-checkWidth) / 2 + itemWidth * index;
        select[i].checkIndex = -1;
        this.setState({
            select,
            novelList:[],
            page:1
        });
        
        Animated.timing(// 随时间变化而执行动画
            this.state.select[i].left,// 动画中的变量值
            {
                toValue,
                duration: 200,// 让动画持续一段时间
            }
        ).start(()=>{
            select[i].checkIndex = index;
            this.setState({
                select
            },()=>{
                this.getData();
            });
        }); 
    }
    touchNovelPress = (Id) => {
        this.props.navigation.navigate("BookInfo",{id:Id})
    }
    _renderNovel = ({item}) => {
        return (
            <TouchNovel item={item} onPress={()=>{
                this.touchNovelPress(item.Id)
            }}/>
        )
    }
    _keyExtractor = (item) => item.Id.toString();
    _listHeader = () => {
        let {select} = this.state;
        return (
            <View>
                {
                    select.map( (e,i) => {
                        return (
                            <View style={S.selectBox} key={i}>
                                <Animated.View style={
                                    [
                                        S.check, 
                                        {
                                            left:e.left
                                        }
                                    ]
                                }
                                ></Animated.View>
                                {
                                    e.child.map( (item,index) => {
                                        return (
                                            <Text 
                                                style={[S.select, e.checkIndex==index? S.checked:{}]}
                                                key={index}
                                                onPress={()=>{
                                                    this.itemPress(i,index)
                                                }}
                                            >{item.text}</Text>
                                        )
                                    })
                                }
                            </View>
                        )
                    })
                }
            </View>
        )
    }
    render(){
        let {backgroundColor, refreshing, novelList} = this.state;
        return (
            <SafeAreaView style={{flex:1,backgroundColor}}>
                <Header 
                    Left={<AntIcon name="menu-fold" size={20} color="#fff"/>}
                    backgroundColor={backgroundColor}
                    title="排行榜"
                    Right={
                        <View style={{flexDirection:"row"}}>
                            <AntIcon name="search1" size={20} color="#fff"/>
                        </View>
                    }
                ></Header>
                <FlatList
                    style={S.list}
                    data={novelList}
                    ListHeaderComponent={this._listHeader}
                    renderItem={this._renderNovel}
                    keyExtractor={this._keyExtractor}
                    refreshing={refreshing}
                    onEndReached={()=>{
                        this.getData();
                    }}
                    onEndReachedThreshold={0}
                    // onScroll={(event)=>{
                    //     let newScrollOffset = event.nativeEvent.contentOffset.y;
                    //     if(newScrollOffset>((26+20)*3)){
                    //         alert(1)
                    //     }
                    // }}
                />
            </SafeAreaView>
        )
    }
}

const S = StyleSheet.create({
    list:{
        flex: 1,
        backgroundColor:"#fff"
    },
    selectBox:{
        flexDirection:"row",
        paddingHorizontal:listPadding,
        marginVertical:10
    },
    select:{
        paddingHorizontal:5,
        width:itemWidth,
        textAlign:"center",
        color:"#000",
        lineHeight:26,
        position:"relative"
    },
    check:{
        width:checkWidth,
        height:26,
        backgroundColor:"red",
        position:"absolute",
        borderRadius:13
    },
    checked:{
        color:"#fff"
    },
    
})