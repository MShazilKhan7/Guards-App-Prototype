import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import JobChart from "../components/JobChart/JobChart";
const Home = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <View style={{ paddingVertical: 20, paddingHorizontal: "5%" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: 10,
          }}
        >
          <View style={styles.card}>
            <AntDesign name="android1" size={24} color="#1c2954" />
            <Text
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                fontSize: 20,
                color: "gray",
              }}
            >
              Downloads
            </Text>
            <Text
              style={{ fontSize: 36, fontWeight: "bold", color: "#2D3142" }}
            >
              11,345
            </Text>
          </View>
          <View style={styles.card}>
            <AntDesign name="apple1" size={24} color="#1c2954" />
            <Text
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                fontSize: 20,
                color: "gray",
              }}
            >
              Downloads
            </Text>
            <Text
              style={{ fontSize: 36, fontWeight: "bold", color: "#2D3142" }}
            >
              20,123
            </Text>
          </View>
        </View>

        <View style={[styles.card, styles.amountCard]}>
          <Text
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontSize: 20,
              color: "gray",
            }}
          >
            Total Money Spent
          </Text>
          <Text style={{ fontSize: 36, fontWeight: "bold" }}>$56,456</Text>
        </View>
        <View>
          <JobChart />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#E9F1F7",
    alignItems: "center",
    borderRadius: 10,
    elevation: 4,
  },
  amountCard: {
    width: "100%",
    marginTop: 20,
  },
});
