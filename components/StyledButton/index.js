import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

const StyledButton = ({ type, content, onPress }) => {
  const backgroundColor = type === "primary" ? "#171a20cc" : "#ffffffa6";
  const textColor = type === "primary" ? "#ffffff" : "#171a20";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.btnText, { color: textColor }]}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StyledButton;
