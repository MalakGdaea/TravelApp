import React from "react";
import { FlatList, Image, View } from "react-native";
import styles from "./styles";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import RootStackParamList from "../../types/RootStackParamList";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

type AttractionDetailsRouteProp = RouteProp<RootStackParamList, 'Gallery'>;
type AttractionDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'Gallery'>;

type GalleryProps = {
    route: AttractionDetailsRouteProp;
    navigation: AttractionDetailsNavigationProp;
};


const Gallery = ({ navigation, route }: GalleryProps) => {
    const { images } = route.params || {};

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList style={{ paddingHorizontal: 34, marginBottom: 32 }}
                showsVerticalScrollIndicator={true}
                data={images} renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={styles.image} />
                )} />
            <View style={styles.backButtonContainer}>
                <TouchableOpacity onPress={goBack}>
                    <Image style={styles.backButton} source={require("../../assets/back.png")} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default React.memo(Gallery);