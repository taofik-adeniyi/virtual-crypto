import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'

import styles from './styles'
const image = require('../../../assets/images/Saly-1.png')

const HomeScreen = () => {
   

    return (
        <View style={styles.root}>
            <Image style={styles.image} source={image} />
            <Text style={styles.header1} >
                Welcome Onboard
            </Text>
            <Text style={styles.header1} >
                Start Trading with a $100,000 USD 
            </Text>
            <Text style={styles.header1} >
                Virtual Fiat Currency
            </Text>
            <Text style={styles.header2}>Invest your virtual $100,000 and compete with others</Text>
        </View>
    )
}

export default HomeScreen
