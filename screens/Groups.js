import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';

export default class Groups extends Component {
    constructor(props) {
        super(props);
        this.chat = this.chat.bind(this);
    }

    chat(params) {
        this.props.navigation.navigate('GroupChats')
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} resizeMode="stretch" source={require('../assets/background.png')}>
                    <Text style={styles.header}>Groups</Text>
                    <View style={styles.imageContainer}>

                        <Image style={{ width: 300, resizeMode: 'contain', height: 200, marginTop: -30, marginBottom: -50 }} source={require('../assets/Profile.jpg')}></Image>

                        <Text style={styles.subheader}>My Groups</Text>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.loginText}>AP Biology Chat</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.loginText}>Science Olympiad</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.loginText} onPress={this.chat}>EDD Team 867</Text>
                        </TouchableOpacity>

                        <Text style={styles.subheader}>Recommended</Text>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.loginText}>Statistics</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.loginText}>Esports Club</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button2}>
                            <Text style={styles.loginText2}>Find More</Text>
                        </TouchableOpacity>

                    </View>
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
        flex: 1
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    profile: {
        flex: 1,
        flexDirection: 'row'
    },
    header: {
        textAlign: 'right',
        fontSize: 50,
        fontWeight: "bold",
        marginTop: 20,
        marginRight: 35
    },
    subheader: {
        textAlign: 'left',
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 15,
        textDecorationLine: 'underline'
    },
    name: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10
    },
    paragraph: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5
    },
    loginText: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
    },
    loginText2: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: "bold",
    },
    button: {
        width: '75%',
        backgroundColor: "#EFF0F6",
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#2A5075",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    button2: {
        width: '75%',
        backgroundColor: "#622A75",
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#2A5075",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
});