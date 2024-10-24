import { StyleSheet, Text, View } from "react-native";
import React from "react";

const JobCard = ({ closed }) => {
  return (
    <View style={[styles.mainContainer, closed && { opacity: 0.4 }]}>
      <View style={styles.headerDetailsContainer}>
        <Text>Posted on 29/11/23</Text>
        <View
          style={[styles.Pill, styles.activePill, closed && styles.notActive]}
        >
          <Text style={[styles.activityText]}>
            {closed ? "closed" : "open"}
          </Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 8, paddingVertical: 6 }}>
        <Text style={styles.jobLabel}>Security Guard Needed</Text>
        <Text style={styles.companyLabel}>NATO Pvt Ltd.</Text>
      </View>
      <View style={styles.Pill}>
        <Text style={{ fontSize: 14 }}>
          Grand Arena, 123 Main St, Downtown, Belgium
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: 10,
          rowGap: 10,
          flexWrap: "wrap",
          marginTop: 10,
        }}
      >
        <View style={styles.Pill}>
          <Text>Oct 25, 9 AM - 5 PM</Text>
        </View>
        <View style={styles.Pill}>
          <Text>8 Hours Shift</Text>
        </View>
        <View style={styles.Pill}>
          <Text>15$/hr</Text>
        </View>
        <View style={styles.Pill}>
          <Text>Guards Required: 2</Text>
        </View>
      </View>
      <View style={styles.moreInfoContainer}>
        <Text>
          Minimum 2 years of event security experience, Able to stand for long
          periods" or "Must be able to lift 50 lbs
        </Text>
      </View>
      <View>
        <Text>Deadline: Apply by Oct 23, 2024</Text>
      </View>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 14,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    elevation: 4,
    backgroundColor: "#F6F7F8",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jobLabel: {
    fontSize: 26,
    fontWeight: "bold",
  },
  headerDetailsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Pill: {
    borderRadius: 100,
    borderColor: "gray",
    borderWidth: 0.5,
    padding: 6,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
  },
  timings: {
    display: "flex",
    padding: 8,
    flexDirection: "row",
    columnGap: 10,
  },
  companyLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "dark-blue",
  },
  paymentContainer: {
    padding: 6,
  },
  moreInfoContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  activePill: {
    paddingHorizontal: 18,
    backgroundColor: "#189267",
  },
  activityText: {
    fontWeight: "bold",
    color: "white",
  },
  notActive: {
    backgroundColor: "red",
  },
});
