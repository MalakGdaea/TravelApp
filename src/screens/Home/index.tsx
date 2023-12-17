import React from "react";
import { View } from "react-native";
import Title from "../../components/Title";

function Home(): JSX.Element {

    return (
        <View>
            <Title />
        </View>
    );
}

export default React.memo(Home);