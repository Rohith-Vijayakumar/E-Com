import react, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { getProducts } from "../services/ProductServices";
import Product from "../components/Product";

export default function ProductList({ navigation }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(getProducts());
  });

  function renderproduct({ item: product }) {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate("ProductDetails", { productId: product.id });
        }}
      />
    );
  }

  return (
    <FlatList
      style={styles.productlist}
      contentContainerStyle={styles.productlistcontainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderproduct}
    />
  );
}

const styles = StyleSheet.create({
  productlist: { backgroundColor: "#eeee" },
  productlistcontainer: {
    backgroundColor: "#eeee",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
});
