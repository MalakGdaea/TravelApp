import React from "react";
import { ImageBackground, Pressable, Image, View, Text } from "react-native";
import styles from "./styles";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import RootStackParamList from "../../types/RootStackParamList";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../../components/Title";
import InfoCard from "../../components/InfoCard";

type AttractionDetailsRouteProp = RouteProp<RootStackParamList, 'AttractionDetails'>;
type AttractionDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'AttractionDetails'>;

type AttractionDetailsProps = {
    route: AttractionDetailsRouteProp;
    navigation: AttractionDetailsNavigationProp;
};

const AttractionDetails = ({ navigation, route }: AttractionDetailsProps) => {
    const { item } = route.params || {};
    const goBack = () => {
        navigation.goBack();
    }

    const goToGallery = () => {
        navigation.navigate("Gallery", { images: item.images });
    }
    const mainImage = item?.images?.length ? item.images[0] : null;
    const slicedImages = item?.images?.length ? item.images.slice(0, 4) : [];
    const remainingImagesNum = item?.images?.length - slicedImages?.length;

    return (
        <SafeAreaView style={styles.container}>
            {mainImage && <ImageBackground style={styles.mainImage} imageStyle={{ borderRadius: 20 }} source={{ uri: mainImage }}>
                <View style={styles.header}>
                    <Pressable onPress={goBack}>
                        <Image style={styles.icon} source={require("../../assets/back.png")} />
                    </Pressable>
                    <Pressable>
                        <Image style={styles.icon} source={require("../../assets/share.png")} />
                    </Pressable>
                </View>
                <Pressable onPress={goToGallery} style={styles.footer}>
                    {slicedImages.length && slicedImages.map((img, index) => (
                        <View key={img}>
                            <Image key={img} style={styles.miniImage} source={{ uri: img }} />
                            {remainingImagesNum > 0 && index === slicedImages.length - 1 &&
                                <Text style={styles.remaining}>{`+${remainingImagesNum}`}</Text>}
                        </View>
                    ))}
                </Pressable>
            </ ImageBackground>}

            <View style={styles.infoHeader}>
                <View>
                    <Title titleText={item.name} style={styles.attractionName} />
                    <Title titleText={item.city} style={styles.cityName} />
                </View>
                <Text style={styles.price}>{item.entry_price}</Text>
            </View>
            <InfoCard iconPath={require("../../assets/locationIcon.png")} text={item.address} />
            <InfoCard iconPath={require("../../assets/clock.png")} text={`Open
${item.opening_time} - ${item.closing_time}`} />

        </SafeAreaView>
    );
}

export default React.memo(AttractionDetails);