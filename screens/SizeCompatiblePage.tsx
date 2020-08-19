import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    PixelRatio,
    Dimensions
} from 'react-native';


/**
 * RN屏幕适配的那些事
 * https://blog.csdn.net/gg_ios/article/details/100770783
 */

 
export default class extends React.Component {
    render() {
        return (
            <View style={STYLE.page}>
              <View style={{ width: px(100), height: (100), backgroundColor: 'red' }}/>
            </View>
        );
    }
}

const STYLE = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: 100,
    },
});