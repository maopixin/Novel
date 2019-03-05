import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';

export default class Header extends React.Component {
    constructor (props) {
        super (props);
    }
    render(){
        let {backgroundColor, title, Left, Right,onLeftPress,onRightPress} = this.props;
        return (
            <View style={[S.container, {backgroundColor}]}>
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
            </View>
        )
    }
}

const S = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        height: 50,
        backgroundColor: '#483D8B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    leftContainer:{
        position: 'absolute',
        left: 15
    },
    rightContainer:{
        position: 'absolute',
        right: 15
    }
})