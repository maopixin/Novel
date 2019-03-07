import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';

export default class Header extends React.Component {
    constructor (props) {
        super (props);
    }
    state = {
        
    }
    render(){
        let {backgroundColor, title, Left, Right, onLeftPress, onRightPress, scrollY, style} = this.props;
        return (
            <Animated.View 
                style={[S.container, {
                    ...style,
                    backgroundColor,
                    opacity: scrollY.interpolate({
                        inputRange: [0,50],
                        outputRange: [0,1]
                    }),
                    
                }]}
            >
                {
                    Left ? 
                    <TouchableOpacity style={S.leftContainer} onPress={onLeftPress}>
                        {Left}
                    </TouchableOpacity >
                    :
                    null
                }
                <View>
                    <Text style={S.title} numberOfLines={1}>{title}</Text>
                </View>
                {
                    Right ? 
                    <TouchableOpacity style={S.rightContainer} onPress={onRightPress}>
                        {Right}
                    </TouchableOpacity >
                    :
                    null
                }
            </Animated.View>
        )
    }
}

const S = StyleSheet.create({
    container:{
        height: 90,
        backgroundColor: '#483D8B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:40
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
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