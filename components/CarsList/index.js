import { View, FlatList, Dimensions } from "react-native";
import React from "react";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";

const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment="start"
        decelerationRate={0.8}
        snapToInterval={Dimensions.get("screen").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarList;
