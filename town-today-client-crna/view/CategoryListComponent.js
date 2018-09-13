// This component displays a horizontal list of Items

import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

export default class CategoryList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hi</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }
});
