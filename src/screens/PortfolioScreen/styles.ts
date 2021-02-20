import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        marginTop: 40
    },
    balanceContainer: {
        width: '100%',
        marginVertical: 20,
    },
    image: {
        height: 175,
        resizeMode: 'contain',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#777777',
    },
    balance: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#777777',
    },
})

export default styles