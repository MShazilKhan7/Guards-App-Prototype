import React from "react";
import { ScrollView, View } from "react-native";
import JobCard from "../../components/JobCard/JobCard";

const JobFeed = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ padding: 6 }}>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard closed={true} />
        <JobCard />
        <JobCard />
      </ScrollView>
    </View>
  );
};

export default JobFeed;
