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
                <View style={S.view}>
                    {
                        this.props.children
                    }
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const S = StyleSheet.create({
    
})