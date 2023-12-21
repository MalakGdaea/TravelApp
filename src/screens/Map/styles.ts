import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    header: {
        width: width - 55,
        position: 'absolute',
        top: 10,
        margin: 30,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: 'center',
        zIndex: 1,
        borderRadius: 5,
        padding: 14,
    },
    text: {
        color: '#000',
        fontSize: 20,
        width: '90%'
    },
    backIcon: {
        width: 40,
        height: 40,
        marginRight: 15,
    }
});

export default styles;
