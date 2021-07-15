import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import firebase from 'firebase';
import * as Google from 'expo-google-app-auth'

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            school: "",
            email: "",
            password: "",
        };
        this.signUp = this.signUp.bind(this);
        this.googleLogin = this.googleLogin.bind(this);
    }

    signUp(params) {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                if (this.state.name != "" || this.state.school != "") { this.props.navigation.navigate('Profile')
                    let users = firebase.database().ref('users');
                    let newUser = users.push();
                    console.log((firebase.auth().currentUser || {}).uid)
                    newUser.set({
                        'id': (firebase.auth().currentUser || {}).uid,
                        'name': this.state.name,
                        'school': this.state.school
                    });
                    res.user.updateProfile({
                        displayName: this.state.name
                    })
                } else { Alert.alert('Name or School left blank') } }, (error) => { Alert.alert(error.message); });
                
        const user = firebase.auth().currentUser;
    }

    googleLogin = async () => {
        try {
            const result = await Expo.google.logInAsync({
                // andriodClientId:
                behavior: 'web',
                iosClientId: '1077313304100-1a8veq78tss7ru51m12k74tdighvi9vq.apps.googleusercontent.com',
                scopes: ['profile', 'email']
            });

            if (result.type === 'success') {
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} resizeMode="stretch" source={require('../assets/background.png')}>
                    <Text style={styles.header}>Sign Up</Text>

                    <View style={styles.imageContainer}>

                        <View style={styles.nameView}>
                            <Image style={styles.emailImage} source={require('../assets/NameIcon.png')}></Image>
                            <Text style={styles.placeholder}>Name</Text>
                            <TextInput style={styles.nameText}
                                value={this.state.name}
                                onChangeText={(text) => { this.setState({ name: text }) }}
                                autoCorrect={false}
                                returnKeyType="next"
                                onSubmitEditing={() => {this.secondTextInput.focus(); }}
                                blurOnSubmit={false}
                            ></TextInput>
                        </View>

                        <View style={styles.schoolView}>
                            <Image style={styles.emailImage} source={require('../assets/SchoolIcon.png')}></Image>
                            <Text style={styles.placeholder}>School Name</Text>
                            <TextInput style={styles.schoolText}
                                value={this.state.school}
                                onChangeText={(text) => { this.setState({ school: text }) }}
                                autoCorrect={false}
                                ref={(input) => { this.secondTextInput = input; }}
                                returnKeyType="next"
                                onSubmitEditing={() => {this.thirdTextInput.focus(); }}
                                blurOnSubmit={false}
                            ></TextInput>
                        </View>

                        <View style={styles.inputView}>
                            <Image style={styles.emailImage} source={require('../assets/EmailIcon.png')}></Image>
                            <Text style={styles.placeholder}>Email</Text>
                            <TextInput style={styles.inputText}
                                value={this.state.email}
                                onChangeText={(text) => { this.setState({ email: text }) }}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                ref={(input) => { this.thirdTextInput = input; }}
                                returnKeyType="next"
                                onSubmitEditing={() => {this.fourthTextInput.focus(); }}
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
                                ref={(input) => { this.fourthTextInput = input; }}
                            ></TextInput>
                        </View>

                        <TouchableOpacity style={styles.googleBtn} onPress={() => this.googleLogin()}>
                            <Image style={{ width: "100%", resizeMode: 'contain', height: 100 }} source={require('../assets/GoogleLoginIcon.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.continueBtn} onPress={this.signUp}>
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
    loginText: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold"
    },
    inputView: {
        flexDirection: 'row',
        width: "80%",
        backgroundColor: "#EFF0F6",
        borderRadius: 16,
        height: 60,
        marginTop: 20
    },
    passwordView: {
        flexDirection: 'row',
        width: "80%",
        backgroundColor: "#EFF0F6",
        borderRadius: 16,
        height: 60,
        marginTop: 20
    },
    nameView: {
        flexDirection: 'row',
        width: "80%",
        backgroundColor: "#EFF0F6",
        borderRadius: 16,
        height: 60,
        marginTop: 20
    },
    schoolView: {
        flexDirection: 'row',
        width: "80%",
        backgroundColor: "#EFF0F6",
        borderRadius: 16,
        height: 60,
        marginTop: 20
    },
    inputText: {
        height: 50,
        width: 200,
        fontSize: 18,
        color: "black",
        marginTop: 15,
        marginLeft: -34
    },
    passwordText: {
        height: 50,
        width: 200,
        fontSize: 18,
        color: "black",
        marginTop: 15,
        marginLeft: -62
    },
    schoolText: {
        height: 50,
        width: 200,
        fontSize: 18,
        color: "black",
        marginTop: 15,
        marginLeft: -85
    },
    nameText: {
        height: 50,
        width: 200,
        fontSize: 18,
        color: "black",
        marginTop: 15,
        marginLeft: -38
    },
    placeholder: {
        color: "#A0A3BD",
        marginLeft: 22,
        marginTop: 8
    },
    emailImage: {
        height: 30,
        width: 35,
        marginLeft: 15,
        marginTop: 15
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
    googleBtn: {
        width: "80%",
        borderRadius: 16,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5
    },
});
