import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native';

export default class Experience extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} resizeMode="stretch" source={require('../assets/Experience.png')}>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },
})
