import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';

export default class Header extends React.Component {
    constructor (props) {
        super (props);
    }
    state = {
        
    }
    render(){
        let {backgroundColor, title, Left, Right, onLeftPress, onRightPress, scrollY, style,height} = this.props;
        return (
            <View 
                style={[S.container, {
                    ...style,
                }]}
            >
                <Animated.View style={[S.headerBg,{
                    backgroundColor,
                    opacity: scrollY.interpolate({
                        inputRange: [0,height-80],
                        outputRange: [0,1]
                    }),
                }]}></Animated.View>
                {
                    Left ? 
                    <TouchableOpacity style={S.leftContainer} onPress={onLeftPress}>
                        {Left}
                    </TouchableOpacity >
                    :
                    null
                }
                <View>
                    <Animated.Text 
                        style={[S.title,{
                            opacity: scrollY.interpolate({
                                inputRange: [0,height-80],
                                outputRange: [0,1]
                            }),
                        }]} 
                        numberOfLines={1}
                    >{title}</Animated.Text>
                </View>
                {
                    Right ? 
                    <TouchableOpacity style={S.rightContainer} onPress={onRightPress}>
                        {Right}
                    </TouchableOpacity >
                    :
                    null
                }
            </View>
        )
    }
}

const S = StyleSheet.create({
    container:{
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:20
    },
    headerBg:{
        position:"absolute",
        top:0,
        left:0,
        right:0,
        bottom:0
    },
    title:{
        fontSize: 14,
        marginTop:6,
        color: '#fff'
    },
    leftContainer:{
        position: 'absolute',
        left: 15,
        bottom:15
    },
    rightContainer:{
        position: 'absolute',
        right: 15,
        bottom:15
    }
})