import React, { useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native'

import styles from './styles';
const image = require("../../../assets/images/Saly-16.png");

const ProfileScreen = () => {
    const [user, setUser] = useState({
        id: 1,
        name: "katigbanoma",
        email: 'katigbanoma@gmail.com',
        image: 'https://cdn.pixabay.com/photo/2021/01/19/03/56/girl-5929995_1280.jpg',
        networth: 12345
    })
    const signOut = () => {
        console.warn( "Sign Out" );
    }

    return (
        <View style={styles.root}>
            <Image style={styles.image} source={image}/>
            <View style={styles.userContainer}>
            <View style={styles.left}>
                <Image style={styles.userImage} source={{ uri: user.image }} />
                <View>
                <Text style={styles.name}>{user.name}</Text>
                </View>
            </View>
            <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.value} >${user.networth}</Text>
            </View>
            </View>
            <Pressable onPress={signOut} style={{marginTop: 'auto'}}>
                <Text>Sign out</Text>
            </Pressable>
        </View>
    )
}

export default ProfileScreen


