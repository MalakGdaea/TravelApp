import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        marginLeft: 30,
        marginTop: 30,
        marginRight: 30,
        marginBottom: 2,
    },
    text: {
        color: '#000000'
    },
    mainImage: {
        width: '100%',
        height: height / 2,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    icon: {
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: "#ffffff",
        margin: 16,
    },
    header: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
        backgroundColor: "rgba(256,256,256,0.35)",
        borderRadius: 15,
        margin: 16,
        paddingHorizontal: 8,
    },
    miniImage: {
        width: 40,
        height: 40,
        marginHorizontal: 4,
        marginVertical: 8,
        borderRadius: 10,
    },
    remaining: {
        color: "#ffffff",
        position: "absolute",
        fontWeight: "bold",
        fontSize: 20,
        top: 8,
        left: 4,
        backgroundColor: "rgba(0,0,0,0.3)",
        width: 40,
        height: 40,
        borderRadius: 10,
        textAlign: "center",
        textAlignVertical: "center",
    },
    infoHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 40,
    },
    attractionName: {
        color: "#000",
        fontWeight: "bold",
        marginBottom: 8.
    },
    cityName: {
        fontSize: 20,
        color: "#000",
        fontWeight: "500",
    },
    price: {
        color: "#000",
        fontSize: 30,
        fontWeight: "bold",
    },
    mapContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 5,
    },
    map: {
        width: "100%",
        height: 200,
    },
    mapText: {
        fontSize: 15,
        color: '#4681A3',
        textAlign: 'center',
        marginBottom: 30,
        fontWeight: '500'
    }
})

export default styles;