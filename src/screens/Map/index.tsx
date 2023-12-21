import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import RootStackParamList from "../../types/RootStackParamList";
import MapView, { Marker } from 'react-native-maps';
import { TouchableOpacity } from "react-native-gesture-handler";

type MapRouteProp = RouteProp<RootStackParamList, 'Map'>;
type MapNavigationProp = StackNavigationProp<RootStackParamList, 'Map'>;

type MapProps = {
    route: MapRouteProp;
    navigation: MapNavigationProp;
};


const Map = ({ navigation, route }: MapProps) => {
    const { item } = route.params || {};
    const coords = {
        latitude: item?.coordinates?.lat,
        longitude: item?.coordinates?.lon,
        latitudeDelta: 0.09,
        longitudeDelta: 0.09,
    }

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Image style={styles.backIcon} source={require("../../assets/back.png")} />
                </TouchableOpacity>
                <Text style={styles.text}>{`${item.name}, ${item.city}`}</Text>
            </View>
            <MapView style={styles.map} initialRegion={coords} >
                <Marker coordinate={coords} title={item?.name} />
            </MapView>
        </View>
    );
}

export default React.memo(Map);