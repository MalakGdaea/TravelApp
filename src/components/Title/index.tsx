import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import styles from "./styles";

// interface TitleProps {
//     text: string;
// }

const Title: React.FC = () => {

    const [statText, setText] = useState('default text');

    console.log('component got build');
    const changeText = () => {
        setText('Text changed on press.');
    }

    return (
        <Text onPress={changeText} style={styles.title}>{statText}</Text>
    )
};



export default React.memo(Title);