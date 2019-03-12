import React from "react";
import {TouchableHighlight, View, StyleSheet} from 'react-native';

export default class Header extends React.Component {
    constructor (props) {
        super (props);
    }
    render(){
        let {onPress,style} = this.props;
        return (
            <TouchableHighlight
                onPress={onPress}
                style={[style]}
            >
                {
                    this.props.children
                }
            </TouchableHighlight>
        )
    }
}

const S = StyleSheet.create({
    
})