import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Stack from "expo-router";
import { router } from "expo-router";
import BottomModal from "../components/Modal/ModalScreen";
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <BottomModal />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  pill: {
    borderRadius: 10,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
