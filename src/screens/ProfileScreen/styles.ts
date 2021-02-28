import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        marginTop: 40
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        marginVertical: 10,
        width: '100%'
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userImage: {
        width: 75,
        height: 75,
        marginRight: 10,
        borderRadius: 50
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
    emai: {
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
    place: {
        fontSize: 18,
        width: 20
    },
    amount: {
        color: 'gray'
    }
});

export default styles;
