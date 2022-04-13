import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductDetails from "./screens/ProductDetails";
import ProductList from "./screens/ProductList";
import { CartProvider } from "./CartContext";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "./screens/Cart";
import { CartIcon } from "./components/cartIcon";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Products"
            component={ProductList}
            options={({ navigation }) => ({
              title: "Products",
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
