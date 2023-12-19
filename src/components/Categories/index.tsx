import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

type CategoriesProps = {
    categories: string[],
    selectedCategory: string,
    onCategoryPress: React.Dispatch<React.SetStateAction<string>>,
}

const Categories = ({ categories, selectedCategory, onCategoryPress }: CategoriesProps) => {
    return (
        <FlatList
            data={categories}
            horizontal
            renderItem={({ item }) => {
                const isSelected = selectedCategory === item;
                return (
                    <TouchableOpacity onPress={() => onCategoryPress(item)} style={styles.itemContainer}>
                        <Text style={[styles.item, isSelected ? styles.selectedCategory : {}]}>{item}</Text>
                    </TouchableOpacity>
                );
            }}
        />
    );
}

export default React.memo(Categories);