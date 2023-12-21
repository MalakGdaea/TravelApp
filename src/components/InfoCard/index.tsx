import React from "react";
import { View, Image, Text, TextStyle, ImageSourcePropType } from "react-native";
import styles from "./styles";

type InfoCardProps = {
    iconPath: ImageSourcePropType,
    text: string,
    style?: TextStyle
}

const InfoCard = ({ iconPath, text, style }: InfoCardProps) => {

    return (
        <View style={styles.container}>
            <View style={styles.iconCircle}>
                <Image source={iconPath} style={styles.icon} />
            </View>
            <Text style={[styles.text, style]}>{text}</Text>
        </View>
    );
}

export default React.memo(InfoCard);