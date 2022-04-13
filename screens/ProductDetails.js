import react, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
import { getProduct } from "../services/ProductServices";
import { CartContext } from "../CartContext";

export default function ProductDetails({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(getProduct(productId));
  });
  const { additemtocart } = useContext(CartContext);

  function onAddToCart() {
    additemtocart(product.id);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imagecontainer}>
          <Image style={styles.image} source={product.image} />
        </View>
        <View style={styles.infocontainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.descrption}>{product.descrption}</Text>
          <Button onPress={onAddToCart} title="Add To cart" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imagecontainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: { width: "100%" },
  infocontainer: { padding: 16 },
  name: { fontSize: 22, fontWeight: "bold" },
  price: { fontSize: 16, fontWeight: "400", marginBottom: 8 },
  descrption: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 16,
    color: "grey",
  },
});
