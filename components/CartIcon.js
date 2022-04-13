import { View, Text, StyleSheet } from "react-native";

import React, { useContext } from "react";

import { CartContext } from "../CartContext";

export function CartIcon({ navigation }) {
  const { getitemscount } = useContext(CartContext);
  return (
    <View>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate("Cart");
        }}
      >
        Cart ({getitemscount})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: "orange",
    height: 39,
    padding: 12,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },
});
