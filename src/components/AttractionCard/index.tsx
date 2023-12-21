import React from "react";
import { View, Image, Text, ViewStyle } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

type AttractionCardProps = {
    imageSrc: string,
    title: string,
    location: string,
    style: ViewStyle,
    onPress: () => void
}

const AttractionCard = ({ imageSrc, title, location, style, onPress }: AttractionCardProps) => {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
            <Image style={styles.image} source={{ uri: imageSrc }} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <Image style={styles.icon} source={require('../../assets/locationIcon.png')} />
                <Text style={styles.location}>{location}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default React.memo(AttractionCard);