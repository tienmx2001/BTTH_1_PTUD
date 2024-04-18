import React from "react";
import { Button, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Bai1 from "./BT/Bai1"; 
import Bai2 from "./BT/Bai2";
import Bai3 from "./BT/Bai3";
import Bai4 from "./BT/Bai4";
import Bai5 from "./BT/Bai5";
import Bai6 from "./BT/Bai6";
import Bai7 from "./BT/Bai7";
import Bai8 from "./BT/Bai8";
import Calculator from "./BT/Calculator";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bai1" component={Bai1} />
        <Stack.Screen name="Bai2" component={Bai2} />
        <Stack.Screen name="Bai3" component={Bai3} />
        <Stack.Screen name="Bai4" component={Bai4} />
        <Stack.Screen name="Bai5" component={Bai5} />
        <Stack.Screen name="Bai6" component={Bai6} />
        <Stack.Screen name="Bai7" component={Bai7} />
        <Stack.Screen name="Bai8" component={Bai8} />
        <Stack.Screen name="Calculator" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}>
      <Button title="Bai1" onPress={() => navigation.navigate('Bai1')} />
      <Button title="Bai2" onPress={() => navigation.navigate('Bai2')} />
      <Button title="Bai3" onPress={() => navigation.navigate('Bai3')} />
      <Button title="Bai4" onPress={() => navigation.navigate('Bai4')} />
      <Button title="Bai5" onPress={() => navigation.navigate('Bai5')} />
      <Button title="Bai6" onPress={() => navigation.navigate('Bai6')} />
      <Button title="Bai7" onPress={() => navigation.navigate('Bai7')} />
      <Button title="Bai8" onPress={() => navigation.navigate('Bai8')} />
      <Button title="Calculator" onPress={() => navigation.navigate('Calculator')} />
    </SafeAreaView>
  );
};


export default App;