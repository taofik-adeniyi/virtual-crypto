import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        marginTop: 40
    },
    image: {
        height: 175,
        resizeMode: 'contain',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default styles