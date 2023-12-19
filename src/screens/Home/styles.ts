import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginLeft: 30,
        marginTop: 30,
        marginRight: 0,
        marginBottom: 2,
    },
    subTitle: {
        fontSize: 20,
        color: '#000000',
        marginTop: 40,
        marginBottom: 34,
    },
    row: {
        marginTop: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        rowGap: 10,
    },
    emptyText: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: 12,
        marginTop: 28,
        textAlign: "center",
    }
})

export default styles;