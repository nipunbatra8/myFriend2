import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import firebase from 'firebase';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.login = this.login.bind(this);
        this.signUp = this.signUp.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);
        this.googleLogin = this.googleLogin.bind(this);
    }

    login(params) {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { this.props.navigation.navigate('Profile') }, (error) => { Alert.alert(error.message); });
    }

    signUp(params) {
        this.props.navigation.navigate('SignUp')
    }

    forgotPassword(params) {
        this.props.navigation.navigate('ForgotPassword')
    }

    googleLogin(params) {
        console.log(Dimensions.get('window').width)
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} resizeMode="stretch" source={require('../assets/background.png')}>
                    <Text style={styles.header}>Log In</Text>
                    <View style={styles.imageContainer}>

                        <Text style={styles.paragraph}>Don’t have an account?</Text>

                        <TouchableOpacity style={styles.signupBtn} onPress={this.signUp}>
                            <Text style={styles.loginText}>Sign up for free!</Text>
                        </TouchableOpacity>

                        <View style={styles.inputView}>
                            <Image style={styles.emailImage} source={require('../assets/EmailIcon.png')}></Image>
                            <Text style={styles.placeholder}>Email</Text>
                            <TextInput style={styles.inputText}
                                value={this.state.email}
                                onChangeText={(text) => { this.setState({ email: text }) }}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                onSubmitEditing={() => {this.secondTextInput.focus(); }}
                                blurOnSubmit={false}
                            ></TextInput>
                        </View>

                        <View style={styles.passwordView}>
                            <Image style={styles.emailImage} source={require('../assets/PasswordIcon.png')}></Image>
                            <Text style={styles.placeholder}>Password</Text>
                            <TextInput style={styles.passwordText}
                                value={this.state.password}
                                onChangeText={(text) => { this.setState({ password: text }) }}
                                secureTextEntry={true}
                                autoCapitalize="none"
                                autoCorrect={false}
                                ref={(input) => { this.secondTextInput = input; }}
                            ></TextInput>
                        </View>

                        <Text style={styles.forgotPassword} onPress={this.forgotPassword}>Forgot Password?</Text>

                        <Image style={{ width: "80%", resizeMode: 'contain', height: 100 }} source={require('../assets/GoogleLoginIcon.png')} onPress={this.googleLogin}></Image>

                        <TouchableOpacity style={styles.continueBtn} onPress={this.login}>
                            <Text style={styles.loginText}>Continue</Text>
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
    header: {
        textAlign: 'right',
        fontSize: 50,
        fontWeight: "bold",
        marginTop: 50,
        marginRight: 35
    },
    paragraph: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingTop: 30
    },
    loginText: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold"
    },
    signupBtn: {
        width: '80%',
        backgroundColor: "#EFF0F6",
        borderRadius: 16,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
    },
    inputView: {
        flexDirection: 'row',
        width: "80%",
        backgroundColor: "#EFF0F6",
        borderRadius: 16,
        height: 70,
        marginTop: 40
    },
    passwordView: {
        flexDirection: 'row',
        width: "80%",
        backgroundColor: "#EFF0F6",
        borderRadius: 16,
        height: 70,
        marginTop: 20
    },
    inputText: {
        height: 50,
        width: "75%",
        fontSize: 18,
        color: "black",
        marginTop: 18,
        marginLeft: -34
    },
    passwordText: {
        height: 50,
        width: "75%",
        fontSize: 18,
        color: "black",
        marginTop: 18,
        marginLeft: -62
    },
    placeholder: {
        color: "#A0A3BD",
        marginLeft: 22,
        marginTop: 8
    },
    emailImage: {
        height: 30,
        width: 35,
        marginLeft: 20,
        marginTop: 20
    },
    continueBtn: {
        width: 165,
        backgroundColor: "#EFF0F6",
        borderRadius: 16,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5
    },
    forgotPassword: {
        color: 'black',
        fontSize: 18,
        marginLeft: 140,
        marginTop: 16,
        textDecorationLine: 'underline'
    }
});
