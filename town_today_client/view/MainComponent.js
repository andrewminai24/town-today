// This component will display the login screen when
// the app is first opened.

// TODO: Replace stand-in icon fonts with Town Today ones

import React, { Component } from 'react';
import { View, Platform, Image, StyleSheet, ScrollView, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
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

    // Displays logo and name in drawer
    const CustomDrawerContentComponent = (props) => (
        <ScrollView>
          <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
              <View style={{flex:1}}>
              <Image source={require('../shared/images_from_prototype/comedytiles.png')} style={styles.drawerImage} />
              </View>
              <View style={{flex: 2}}>
                <Text style={styles.drawerHeaderText}>Town Today</Text>
              </View>
            </View>
            <DrawerItems {...props} />
          </SafeAreaView>
        </ScrollView>
      );
      

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
        drawerBackgroundColor: '#D1C4E9',
        contentComponent: CustomDrawerContentComponent
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    drawerHeader: {
      backgroundColor: '#512DA8',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
    },
    drawerImage: {
      margin: 10,
      width: 80,
      height: 60
    }
  });
  
export default Main;