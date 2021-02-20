import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        margin: 10
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    name: {
        fontWeight: 'bold',
        paddingBottom: 5
    },
    symbol: {
        color: '#6b6b6b',
    },
    value: {
        fontSize: 18,
        fontWeight: '600',
        paddingBottom: 5
    },
    amount: {
        color: 'gray'
    }
})

export default styles