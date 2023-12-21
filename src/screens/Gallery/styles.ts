import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    image: {
        width: '100%',
        height: 400,
        borderRadius: 20,
        marginTop: 24,
    },
    backButtonContainer: {
        position: "absolute",
        padding: 10,
        borderRadius: 10,
        top: 20,
        left: 30,
    },
    backButton: {
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: "#fff",
    }
});

export default styles;
