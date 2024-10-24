import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Demo App" }} />
        <Stack.Screen name="events/index" options={{ title: "Events" }} />
        <Stack.Screen name="guard/index" options={{ title: "Jobs" }} />
        <Stack.Screen
          name="client/index"
          options={{ title: "Add Event Form" }}
        />
      </Stack>
    </SafeAreaView>
  );
};

export default RootLayout;
