import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function TestButton() {
    return (
        <View>
            <Text>
                BTN
            </Text>
        </View>
    );
}

function BottomBar(props) {
    return (
        <View style={styles.bottomBar}>
            <TestButton />
            <TestButton />
            <TestButton />
        </View>
    );
}

const styles = StyleSheet.create({
    bottomBar: {
        // flex: 1,
        flexDirection: 'row'
    }
});

export default BottomBar;