import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
function LoginScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ flex: 1, width: 200, height: 200 }}>
        <Text>帳號</Text>
        <TextInput
          style={{ borderColor: "#333", borderWidth: 1, width: "100%" }}
        />
        <Text>密碼</Text>
        <TextInput
          style={{ borderColor: "#333", borderWidth: 1, width: "100%" }}
        />
        <Button onPress={() => navigation.goBack()} title="登入" />
      </View>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app2!</Text>
      <StatusBar style="auto" />
      <Button onPress={() => navigation.navigate("Login")} title="Open Modal" />
    </View>
  );
}
function ProfileScreen({ navigation }) {
  // 監聽是否登入
  React.useEffect(() => {
    const isLogin = false;
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      if (isLogin) {
        navigation.jumpTo("Profile");
      } else {
        navigation.navigate("Login");
      }
      e.preventDefault();
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>Open up App.js123 to start working on your app2!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
function CatScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>cat</Text>
      <StatusBar style="auto" />
      <Button onPress={() => navigation.navigate("Login")} title="Open Modal" />
    </View>
  );
}
function CowScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>cow</Text>
      <StatusBar style="auto" />
      <Button onPress={() => navigation.navigate("Login")} title="Open Modal" />
    </View>
  );
}
function ModalScreen({ navigation }) {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="cat"
        component={CatScreen}
        options={{
          tabBarLabel: "喵 英文",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cat" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="cow"
        component={CowScreen}
        options={{
          tabBarLabel: "牟 日文",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cow" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="drawHome">
      <Drawer.Screen name="drawHome" component={MyTabs} />
    </Drawer.Navigator>
  );
}

const Routes = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="App" component={MyDrawer} />
      <Stack.Screen name="Login" component={ModalScreen} />
    </Stack.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
