import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CategorySelector extends Component {
    
    static navigationOptions = {
        title: 'Select Categories'
    };
    
    render() {
        return (
            <View>
                <Text>
                    Category Selector Screen
                </Text>
            </View>
        );
    }
}

export default CategorySelector;