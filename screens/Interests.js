import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';

export default class Interests extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} resizeMode="stretch" source={require('../assets/background.png')}>
                    <Text style={styles.header}>Interests</Text>
                    <View style={styles.imageContainer}>

                        <Image style={{ width: 100, resizeMode: 'contain', height: 100, marginTop: 30 }} source={require('../assets/micheal.png')}></Image>

                        <Text style={styles.name}>Micheal Tin</Text>
                        <Text style={styles.paragraph}>Arcadia High School</Text>
                    </View>

                    <Text style={styles.subheader}>My Interests</Text>

                    <View style={styles.interestsContainer}>

                        <TouchableOpacity onPress={this.interests}>
                            <Image style={[{ marginRight: 20, marginLeft: 20 }, styles.image]} source={require('../assets/EnglishIcon.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.interests}>
                            <Image style={styles.image} source={require('../assets/HistoryIcon.png')} />
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.subheader}>Add Interests</Text>

                    <View style={styles.addInterests}>

                        <TouchableOpacity onPress={this.groups}>
                            <Image style={styles.image} source={require('../assets/SportsIcon.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.connect}>
                            <Image style={styles.image} source={require('../assets/ScienceIcon.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.experience}>
                            <Image style={styles.image} source={require('../assets/MathIcon.png')} />
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
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    interestsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: -50
    },
    addInterests: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    header: {
        textAlign: 'right',
        fontSize: 50,
        fontWeight: "bold",
        marginTop: 30,
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
    image: {
        width: 100,
        resizeMode: 'contain',
        height: 100,
        marginTop: 10
    },
});