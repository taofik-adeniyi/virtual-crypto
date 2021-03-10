import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './styles'

const image = require('../../../assets/images/Saly-1.png')
const googleBtn = require('../../../assets/images/google-button.png')

const WelcomeScreen = () => {
    const signInGoogle = () => {

    }
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={image} />
            <Text style={styles.header1}>Welcome to MyCrypto</Text>
            <Text style={styles.header2}>Invest your virtual $100,000 and compete with others</Text>
            <Pressable onPress={signInGoogle} style={styles.googleButton}>
                <Image source={googleBtn} style={styles.buttonImage} />
            </Pressable>
        </View>
    )
}

export default WelcomeScreen
