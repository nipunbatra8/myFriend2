import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';

export default class ForgotPassword extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Forgot Password</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})