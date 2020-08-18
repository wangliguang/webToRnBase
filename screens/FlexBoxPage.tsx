import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

/**
 * display        : 默认为flex
 * flex           : 默认为被子元素撑开，设置值时，在主轴上按比例尽可能的撑满空间
 * flexDirection  : 主轴方向，默认垂直方向为主轴，主轴方向按照flex的设置，侧轴方向自动撑满
 * justifyContent : 主轴对齐方式，默认左对齐
 * alignItems     : 侧轴对齐方式，默认右对齐, 基线对齐
 * alignSelf      : 子元素自定义侧轴的对齐方式，默认auto，即继承alignItems的值
 * flexWrap       : 是否换行，默认不换行
 */

export default class extends React.Component {
    render() {
        return (
            <View style={STYLE.page}>
            </View>
        );
    }
}

const STYLE = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: 100,
    },
    red: {
        backgroundColor: 'red',
    },
    blue: {
        backgroundColor: 'blue',
    },
    green: {
        backgroundColor: 'green',
    },
    item: {
        width: 70,
        height: 70,
        backgroundColor: 'orange',
    }
});