import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    login(params) {
        this.props.navigation.navigate('Login');
    }

    signUp(params) {
        this.props.navigation.navigate('SignUp')
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} resizeMode="stretch" source={require('../assets/background1.png')}>
                    <View style={styles.imageContainer}>
                        <ImageBackground style={styles.image} source={require('../assets/ellipse.png')}>
                            <Image style={styles.image} source={require('../assets/Logo.png')}></Image>
                        </ImageBackground>

                        <Text style={styles.header}>myFriend</Text>
                        <Text style={styles.paragraph}>Connecting students with clubs, school activities, friends, and their schools themselves.</Text>

                        <TouchableOpacity style={styles.loginBtn} onPress={this.login}>
                            <Text style={styles.loginText}>Log In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.signupBtn} onPress={this.signUp}>
                            <Text style={styles.loginText}>Sign Up</Text>
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center"
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    header: {
        fontSize: 50,
        fontWeight: "bold",
        paddingBottom: 10
    },
    paragraph: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 20
    },
    loginBtn: {
        width: 131,
        backgroundColor: "#622A75",
        borderColor: "#2A5075",
        borderRadius: 50,
        borderWidth: 3,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    loginText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold"
    },
    signupBtn: {
        width: 131,
        backgroundColor: "#622A75",
        borderColor: "#2A5075",
        borderRadius: 50,
        borderWidth: 3,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    }
});