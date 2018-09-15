// TODO: Think of a better name for this component...

// A container for a set of CategoryList components

import React, { Component } from 'react';
import { StyleSheet, View, Text, SectionList } from 'react-native';
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
        return (
            <CategoryList items={this.state.items} />
        );
    }
}

const styles = StyleSheet.create({

});

export default MasterList;
