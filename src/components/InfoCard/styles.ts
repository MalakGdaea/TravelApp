import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    text: {
        color: "#000",
        fontSize: 12,
        marginLeft: 10,
    },
    icon: {
        width: 25,
        height: 25,
    },
    iconCircle: {
        backgroundColor: "#F4F4F4",
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        padding: 5,
    }
});

export default styles