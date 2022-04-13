import react, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, Image, Button, FlatList } from "react-native";
import { CartContext } from "../CartContext";

export function Cart({ navigation }) {
  const { items, getitemscount, gettotalprice } = useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(gettotalprice());
    });

    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.mainTotal}>${total}</Text>
      </View>
    );
  }

  function renderitem({ item }) {
    return (
      <>
        <View style={styles.cartline}>
          <Image style={styles.image} source={item.product.image} />
          <Text style={styles.lineLeft}>
            {item.product.name} x {item.qty}
            <Text style={styles.productTotal}>${item.totalPrice}</Text>
          </Text>
        </View>
      </>
    );
  }

  return (
    <FlatList
      styles={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderitem={renderitem}
      keyExtractor={(item) => item.product.id.toString()}
      listFooterComponent={Totals}
    />
  );
}

const styles = StyleSheet.create({
  cartline: {
    flexDirection: "row",
    width: "80%",
    paddingVertical: 10,
  },
  image: {
    width: "25%",
    aspectRatio: 1,
    marginRight: 5,
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  productTotal: {
    fontWeight: "bold",
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
  },
  lineRight: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "left",
  },
  mainTotal: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  itemsList: {
    backgroundColor: "#eeeeee",
  },
  itemsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
