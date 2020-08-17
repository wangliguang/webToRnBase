import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

/**
 * flex
 * flexDirection
 * justifyContent
 * alignItems
 * alignSelf
 * flexWrap
 *
 */

export default class extends React.Component {
    render() {
        return (
            <View style={STYLE.page}>
                <View style={{ marginBottom: 40 }}>
                    <View style={[STYLE.item, STYLE.red]}/>
                    <View style={[STYLE.item, STYLE.green]}/>
                    <View style={[STYLE.item, STYLE.blue]}/>
                </View>

                <View style={{ marginBottom: 40, flexDirection: 'row'}}>
                    <View style={[STYLE.item, STYLE.red]}/>
                    <View style={[STYLE.item, STYLE.green]}/>
                    <View style={[STYLE.item, STYLE.blue]}/>
                </View>

                <View style={{ marginBottom: 40, flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={[STYLE.item, STYLE.red]}/>
                    <View style={[STYLE.item, STYLE.green]}/>
                    <View style={[STYLE.item, STYLE.blue]}/>
                </View>

                <View style={{ marginBottom: 40, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <View style={[STYLE.item, STYLE.red]}/>
                    <View style={[STYLE.item, STYLE.green]}/>
                    <View style={[STYLE.item, STYLE.blue]}/>
                </View>
            </View>
        );
    }
}

const STYLE = StyleSheet.create({
    page: {
        // flex: 1,
    },
    red: {
        backgroundColor: 'orange',
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