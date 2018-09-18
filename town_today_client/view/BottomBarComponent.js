import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

function TestButton() {
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <Image
                style={{ width: 80, height: 50 }}
                source={require('../shared/other_assets/AddEventIcon.png')}
            />
        </View>
    );
}

function BottomBar(props) {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}><TestButton /></View>
            <View style={{ flex: 1 }}><TestButton /></View>
            <View style={{ flex: 1 }}><TestButton /></View>
            <View style={{ flex: 1 }}><TestButton /></View>
            <View style={{ flex: 1 }}><TestButton /></View>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default BottomBar;