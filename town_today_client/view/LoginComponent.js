import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Login extends Component {
    
    static navigationOptions = {
        title: 'Account'
    };
    
    render() {
        return (
            <View>
                <Text>
                    Login Screen
                </Text>
            </View>
        );
    }
}

export default Login;