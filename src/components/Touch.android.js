import React from "react";
import {TouchableNativeFeedback,View,StyleSheet} from 'react-native';

export default class Header extends React.Component {
    constructor (props) {
        super (props);
    }
    render(){
        let {onPress,style} = this.props;
        return (
            <TouchableNativeFeedback
                onPress={onPress}
                style={[style]}
            >
                {
                    this.props.children
                }
            </TouchableNativeFeedback>
        )
    }
}

const S = StyleSheet.create({
    
})