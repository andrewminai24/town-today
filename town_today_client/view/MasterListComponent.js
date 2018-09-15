// TODO: Think of a better name for this component...

// A container for a set of CategoryList components

// TODO: Cleanup unused imports
import React, { Component } from 'react';
import { StyleSheet, View, Text, SectionList, ScrollView } from 'react-native';
import CategoryList from './CategoryListComponent';
import { ITEMS } from '../shared/MockItems';

class MasterList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: ITEMS
        };
    }

    render() {
        // TODO: Implement SectionList
        // TODO: Use iterator and get rid of hardcoded values
        return (
            // <View>
            //     <CategoryList categoryTitle='Movies' items={this.state.items} />
            //     <CategoryList categoryTitle='Sports' items={this.state.items} />
            //     <CategoryList categoryTitle='Music' items={this.state.items} />
            // </View>
            <ScrollView>
                <CategoryList categoryTitle='Movies' items={this.state.items} />
                <CategoryList categoryTitle='Sports' items={this.state.items} />
                <CategoryList categoryTitle='Music' items={this.state.items} />
                <CategoryList categoryTitle='Art' items={this.state.items} /> 
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

});

export default MasterList;
