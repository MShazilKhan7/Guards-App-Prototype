import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Slot, Stack } from "expo-router";
import BottomModal from "../components/Modal/ModalScreen";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons"; // Import icons for the hamburger menu

const RootLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
      <GestureHandlerRootView>
        <Drawer>
          <Drawer.Screen
            name="index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Home",
              header: ({ navigation }) => (
                <CustomHeader navigation={navigation} title="Guards Demo App" />
              ),
            }}
          />
          <Drawer.Screen
            name="events/index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Admin Role Demo",
              title: "Admin Role Demo",
            }}
          />
          <Drawer.Screen
            name="guard/index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Guard Role Demo",
              title: "Guard Role Demo",
            }}
          />
          <Drawer.Screen
            name="client/index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Client Role Demo",
              title: "Client Role Demo",
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default RootLayout;

const CustomHeader = ({ navigation, title }) => {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        height: 80,
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderBottomColor: "gray",
        elevation: 2,
      }}
    >
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>

      <View
        style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}
      >
        <View style={{ width: 35, height: 30 }}>
          <Image
            source={require("../public/logo.png")} // Make sure the path is correct
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <Text style={{ marginLeft: 10, fontSize: 24, fontWeight: "bold" }}>
          {title}
        </Text>
      </View>
    </SafeAreaView>
  );
};
