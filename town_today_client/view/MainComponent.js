// This component will display the login screen when
// the app is first opened.

// TODO: Replace stand-in icon fonts with Town Today ones

import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import SelectedCategories from './SelectedCategoriesComponent';
import Login from './LoginComponent';
import CategorySelector from './CategorySelectorComponent';

const LoginNavigator = createStackNavigator({
    Login: {
        screen: Login
    }
},
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#000'
            },
            // headerTintColor: ''
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon name='menu'
                size={24}
                color='white'
                onPress={() => navigation.toggleDrawer()}
            />
        })
    });

const CategorySelectorNavigator = createStackNavigator({
    CategorySelector: {
        screen: CategorySelector
    }
},
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#000'
            },
            // headerTintColor: ''
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon name='menu'
                size={24}
                color='white'
                onPress={() => navigation.toggleDrawer()}
            />
        })
    });


const SelectedCategoriesNavigator = createStackNavigator({
    SelectedCategories: {
        screen: SelectedCategories
    }
},
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#000'
            },
            // headerTintColor: ''
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon name='menu'
                size={24}
                color='white'
                onPress={() => navigation.toggleDrawer()}
            />
        })
    });

const MainNavigator = createDrawerNavigator({
    Login: {
        screen: LoginNavigator,
        navigationOptions: {
            title: 'Account',
            drawerLabel: 'Account',
            drawerIcon: ({ tintColor }) => (
                <Icon name='car'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    CategorySelector: {
        screen: CategorySelectorNavigator,
        navigationOptions: {
            title: 'Select Categories',
            drawerLabel: 'Categories',
            drawerIcon: ({ tintColor }) => (
                <Icon name='calendar'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    SelectedCategories: {
        screen: SelectedCategoriesNavigator,
        navigationOptions: {
            title: 'Events',
            drawerLabel: 'Events',
            drawerIcon: ({ tintColor }) => (
                <Icon name='list'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    }
},
    {
        drawerBackgroundColor: '#D1C4E9'
    });

class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : getStatusBarHeight() }}>
                <MainNavigator />
            </View>
        );
    }
}

export default Main;