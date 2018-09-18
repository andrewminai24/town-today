import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginScreen from './login_components/LoginScreen';

class Login extends Component {
    
    static navigationOptions = {
        title: 'Account'
    };
    
    render() {
        return (
            <View>
                {/* <Text>
                    Login Screen
                </Text> */}
                <LoginScreen />
            </View>
        );
    }
}

export default Login;