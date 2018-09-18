// A container for a set of CategoryList components

import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import CategoryList from './CategoryListComponent';
import { ITEMS } from '../shared/MockItems';

class SelectedCategories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: ITEMS
        };
    }

    render() {
        // TODO: Pull data from redux store
        return (
            <ScrollView style={styles.containerStyle}>
                <CategoryList categoryTitle='Movies' items={this.state.items} />
                <CategoryList categoryTitle='Sports' items={this.state.items} />
                <CategoryList categoryTitle='Music' items={this.state.items} />
                <CategoryList categoryTitle='Art' items={this.state.items} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#000'
    }
});

export default SelectedCategories;
