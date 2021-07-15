import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

let schoolName = 'Hello';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolName: null,
        }
        this.experience = this.experience.bind(this);
        this.interests = this.interests.bind(this);
        this.groups = this.groups.bind(this);
        this.connect = this.connect.bind(this);
    }
    
    get user() {
        const user = firebase.auth().currentUser;
        let users = firebase.database().ref().child('users').child('-MeewNa9IMt7Njo6-bkc');
        users.once('value', (snapshot) => {
            let obj = snapshot.val();
            this.setState({schoolName: obj.school})
//            console.log((firebase.auth().currentUser || {}).uid)
        })
      return {
        name: user.displayName,
        school: this.state.schoolName
      };
    }

    experience(params) {
        this.props.navigation.navigate('Experience')
    }

    interests(params) {
        this.props.navigation.navigate('Interests')
    }

    groups(params) {
        this.props.navigation.navigate('Groups')
    }

    connect(params) {
        this.props.navigation.navigate('Connect')
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} resizeMode="stretch" source={require('../assets/background.png')}>
                    <Text style={styles.header}>User Profile</Text>
                    <View style={styles.imageContainer}>

                        <Image style={{ width: 100, resizeMode: 'contain', height: 100, marginTop: 30 }} source={require('../assets/micheal1.png')}></Image>

                        <Text style={styles.name}>{this.user.name}</Text>
                        <Text style={styles.paragraph}>{this.user.school}</Text>

                        <TouchableOpacity style={styles.button} onPress={this.interests}>
                            <Text style={styles.loginText}>Interests</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={this.groups}>
                            <Text style={styles.loginText}>Groups</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={this.connect}>
                            <Text style={styles.loginText}>Connect</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={this.experience}>
                            <Text style={styles.loginText}>Experience</Text>
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
        marginTop: 30,
        marginRight: 10
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
    button: {
        width: '80%',
        backgroundColor: "#EFF0F6",
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#2A5075",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
});
