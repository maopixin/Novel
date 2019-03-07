import React from "react";
import {TouchableHighlight, StyleSheet, View, Image, Text} from 'react-native';

export default class Header extends React.Component {
    constructor (props) {
        super (props);
    }
    render(){
        let {item,onPress} = this.props;
        return (
            <TouchableHighlight
                onPress={onPress}
            >
                <View 
                    style={S.novelBox}
                    key={item.Id}
                >
                    <View style={S.novelImg}>
                        <Image
                            style={{width: 75, height: 100}}
                            source={{uri: `https://imgapi.jiaston.com/BookFiles/BookImages/${item.Img}`}}
                        />
                    </View>
                    <View style={S.novelInfo}>
                        <View style={S.novleTitle}>
                            <Text style={{fontSize:18,color:"#000",lineHeight:26}}>
                                {item.Name}
                            </Text>
                            <Text style={{fontSize:14,color:"#E6A23C",lineHeight:26}}>
                                {item.Score}分
                            </Text>
                        </View>
                        <View>
                            <Text style={{color:"#303133",paddingBottom:16}}>
                                {item.CName} | {item.Author}
                            </Text>
                        </View>
                        <View>
                            <Text style={{color:"#909399",paddingBottom:10}} numberOfLines={2}>
                                {item.Desc}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const S = StyleSheet.create({
    novelInfo:{
        flex: 1,
        paddingLeft: 10,
    },  
    novelBox:{
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical:10,
        justifyContent:"space-between"
    },
    novleTitle:{
        flexDirection: "row",
        justifyContent:"space-between",
        paddingBottom:10
    }
})