import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Title from "../../components/Title";

function Home(): JSX.Element {
    const [title, setTitle] = useState('My first component');

    useEffect(() => {
        setTimeout(() => {
            setTitle("Title updated");
        }, 5000);
    }, []);

    console.log("home component got build");


    return (
        <View>
            <Title />
        </View>
    );
}

export default React.memo(Home);