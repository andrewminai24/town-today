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
            <View style={{flexDirection: 'column', flex: 1, backgroundColor: '#000'}}>
                <View style={{flex: 8}}>
                    <ScrollView>
                        <CategoryList categoryTitle='Movies' items={this.state.items} />
                        <CategoryList categoryTitle='Sports' items={this.state.items} />
                        <CategoryList categoryTitle='Music' items={this.state.items} />
                        <CategoryList categoryTitle='Art' items={this.state.items} />
                    </ScrollView>
                </View>
                <View style={{flex: 1}}>
                    <BottomBar />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
});

export default SelectedCategories;
