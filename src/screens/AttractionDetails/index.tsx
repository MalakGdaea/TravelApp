import React, { useEffect } from "react";
import { ImageBackground, Pressable, Image, View, Text } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import styles from "./styles";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import RootStackParamList from "../../types/RootStackParamList";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../../components/Title";
import InfoCard from "../../components/InfoCard";
import { ScrollView } from "react-native-gesture-handler";
import Share from 'react-native-share';
import { getImageBase64 } from "../../services/base64";


type AttractionDetailsRouteProp = RouteProp<RootStackParamList, 'AttractionDetails'>;
type AttractionDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'AttractionDetails'>;

type AttractionDetailsProps = {
    route: AttractionDetailsRouteProp;
    navigation: AttractionDetailsNavigationProp;
};

const AttractionDetails = ({ navigation, route }: AttractionDetailsProps) => {
    const { item } = route.params || {};
    const mainImage = item?.images?.length ? item.images[0] : null;
    let imageInBase64 = "data:image/png;base64,";

    useEffect(() => {
        const fetchImageBase64 = async () => {
            try {
                if (mainImage) {
                    const base64Data = await getImageBase64(mainImage);
                    imageInBase64 += base64Data;
                }
            } catch (error) {
                console.error('Error fetching image base64:', error);
            }
        };

        fetchImageBase64();
    }, []);

    const goBack = () => {
        navigation.goBack();
    }

    const goToGallery = () => {
        navigation.navigate("Gallery", { images: item.images });
    }

    const goToMap = () => {
        navigation.navigate("Map", { item });
    }

    const onShare = () => {
        Share.open({
            title: item.name,
            message: 'Hey, I want to share with you this amazing attraction.',
            url: imageInBase64
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                err && console.log(err);
            });
    }

    const slicedImages = item?.images?.length ? item.images.slice(0, 4) : [];
    const remainingImagesNum = item?.images?.length - slicedImages?.length;
    const openingTime = `Open
${item.opening_time} - ${item.closing_time}`;
    const coords = {
        latitude: item?.coordinates?.lat,
        longitude: item?.coordinates?.lon,
        latitudeDelta: 0.09,
        longitudeDelta: 0.09,
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {mainImage && <ImageBackground style={styles.mainImage} imageStyle={{ borderRadius: 20 }} source={{ uri: mainImage }}>
                    <View style={styles.header}>
                        <Pressable onPress={goBack}>
                            <Image style={styles.icon} source={require("../../assets/back.png")} />
                        </Pressable>
                        <Pressable onPress={onShare}>
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
                    <View style={{ width: "70%" }}>
                        <Title titleText={item.name} style={styles.attractionName} />
                        <Title titleText={item.city} style={styles.cityName} />
                    </View>
                    <Text style={styles.price}>{item.entry_price}</Text>
                </View>
                <InfoCard iconPath={require("../../assets/locationIcon.png")} text={item.address} />
                <InfoCard iconPath={require("../../assets/clock.png")} text={openingTime} />
                <View style={styles.mapContainer}>
                    <MapView style={styles.map} initialRegion={coords} >
                        <Marker coordinate={coords} title={item?.name} />
                    </MapView>
                </View>
                <Text onPress={goToMap} style={styles.mapText}>Show full screen map</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default React.memo(AttractionDetails);