// JobChart.js
import React from "react";
import { View, Dimensions, Text, StyleSheet } from "react-native";
import { BarChart, LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const JobChart = () => {
  // Sample data for total jobs by month
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 77, 43, 50, 80, 40, 70, 65, 30, 99],
      },
    ],
  };

  return (
    <LineChart
      data={data}
      decorator={() => {
        return <Text style={styles.heading}>Total Jobs Booked</Text>;
      }}
      width={screenWidth - 40}
      height={300}
      yAxisSuffix=" jobs"
      chartConfig={{
        fillShadowGradientOpacity: 1,
        fillShadowGradient: "#1a2954",
        backgroundColor: "#1a2954",
        backgroundGradientFrom: "#E9F1F7",
        backgroundGradientTo: "#E9F1F7",
        decimalPlaces: 0, // No decimal places
        color: (opacity = 1) => `rgba(26, 41, 84, ${opacity})`,
        labelColor: (opacity = 1) => `black`,
        style: {
          borderRadius: 16,
          paddingTop: 30,
        },
        propsForDots: {
          r: "2",
          strokeWidth: "2",
          stroke: "red",
        },
      }}
      withDots={true} // Disable the dots entirely
      withInnerLines={false} // Disable grid lines
      withOuterLines={true} // Disable outer grid lines
      style={{
        marginTop: -10,
        borderRadius: 16,
        paddingTop: 30,
      }}
    />
  );
};

const styles = StyleSheet.create({
  heading: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    fontSize: 18,
    fontWeight: "semibold",
    textAlign: "center",
    color: "gray",
  },
});
export default JobChart;
