// TODO: Think of a better name for this component...

// This component displays a set of CategoryListComponents within
// a SectionList

import React, { Component } from 'react';
import { StyleSheet, View, Text, SectionList } from 'react-native';

export default class MasterList extends Component {
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
