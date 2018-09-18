// A container for a set of CategoryList components

import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import CategoryList from './CategoryListComponent';
import BottomBar from './BottomBarComponent';
import { ITEMS } from '../shared/MockItems';

class SelectedCategories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: ITEMS
        };
    }

    static navigationOptions = {
        title: 'Events'
    };

    render() {
        // TODO: Pull data from redux store
        return (
            <View style={styles.viewStyle}>
                <ScrollView style={styles.scrollViewStyle}>
                    <CategoryList categoryTitle='Movies' items={this.state.items} />
                    <CategoryList categoryTitle='Sports' items={this.state.items} />
                    <CategoryList categoryTitle='Music' items={this.state.items} />
                    <CategoryList categoryTitle='Art' items={this.state.items} />
                </ScrollView>
                {/* TODO: Refactor later to use props */}
                {/* <View style={styles.bottomBarStyle}>
                    <BottomBar />
                </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        flexDirection: 'column'
        // justifyContent: '',
        // alignItems: ''
    },
    scrollViewStyle: {
        flex: 2,
        backgroundColor: '#000'
    },
    bottomBarStyle: {
        flex: 1,
        backgroundColor: '#ff0000'
    }
});

export default SelectedCategories;
