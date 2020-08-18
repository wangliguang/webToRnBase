import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

/**
 */

export default class extends React.Component {
    render() {
        return (
            <View style={STYLE.page}>
              <View style={{ width: 100, height: 100, backgroundColor: 'red' }}/>
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