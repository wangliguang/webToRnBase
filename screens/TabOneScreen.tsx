import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen({
  navigation,
}: { navigation: any}) {


  function goPage(pageName: string) {
    navigation.push(pageName, {})
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goPage('FlexBoxPage')}>
        <Text>Flex Box</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goPage('SizeCompatiblePage')}>
        <Text>设备尺寸兼容</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
