import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    card: {
        padding: 2,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        borderRadius: 15,
    },
    image: {
        width: (width - 90) / 2,
        height: 120,
        margin: 2,
        borderRadius: 15,
    },
    row: {
        flexDirection: 'row',
        marginLeft: 12,
        alignItems: "baseline",
    },
    title: {
        color: '#000',
        fontSize: 14,
        fontWeight: '500',
        marginLeft: 12,
        marginTop: 8,
    },
    location: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: 11,
        fontWeight: '400',
        marginBottom: 8,
    },
    icon: {
        width: 8,
        height: 8,
        marginRight: 3,
    },
});

export default styles