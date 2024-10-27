import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Slot, Stack } from "expo-router";
import BottomModal from "../components/Modal/ModalScreen";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

const RootLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
            name="index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: "Home",
              title: "Guards App",
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
