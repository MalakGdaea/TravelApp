import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import Title from "../../components/Title";
import styles from "./styles";
import Categories from "../../components/Categories";
import AttractionCard from "../../components/AttractionCard";
import jsonData from "../../data/attractions.json";
import Attraction from "../../Interfaces/Attraction";
import CATEGORIES from "../../data/categories.json";

const Home = () => {
    const ALL = 'All';
    const [selectedCategory, setSelectedCategory] = useState(ALL);
    const [data, setData] = useState<Attraction[]>([]);

    useEffect(() => {
        if (selectedCategory === ALL) {
            setData(jsonData);
        }
        else {
            const filteredData = jsonData?.filter(item => item?.categories.includes(selectedCategory));
            setData(filteredData);
        }
    }, [selectedCategory]);

    return (
        <FlatList
            style={styles.container}
            ListHeaderComponent={
                <>
                    <Title titleText="Where do" style={{ fontWeight: 'normal' }} />
                    <Title titleText="you want to go?" />
                    <Title titleText="Explore Attractions " style={styles.subTitle} />
                    <Categories
                        categories={[ALL, ...CATEGORIES]}
                        selectedCategory={selectedCategory}
                        onCategoryPress={setSelectedCategory}
                    />
                </>
            }
            ListEmptyComponent={(<Text style={styles.emptyText}>No items found.</Text>)}
            data={data}
            keyExtractor={(item) => String(item.id)}
            numColumns={2}
            renderItem={({ item, index }) => (
                <AttractionCard
                    key={item.id}
                    imageSrc={item.images[0]}
                    title={item.name}
                    location={item.city}
                    style={index % 2 === 0 ? { marginRight: 10, marginTop: 10 } : { marginTop: 10 }}
                />
            )}
        />
    );
}

export default React.memo(Home);