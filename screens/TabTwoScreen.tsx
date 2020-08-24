import * as React from 'react';
import { StyleSheet, TextInput, Modal, Button, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
    return ModalExample();   
}

function ModalExample() {
    const [ isShow, setIsShow ] = React.useState(false);
    return (
        <View style={styles.container}>
            <Button onPress={() => setIsShow(true)} title={"开始"}/>
            <Modal animationType="slide" transparent visible={isShow}>
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0, .3)' }}>
                    <TouchableOpacity onPress={() => setIsShow(false)} style={{ backgroundColor: 'red', width: 100, height: 100}}>
                        <Text>消失</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
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
