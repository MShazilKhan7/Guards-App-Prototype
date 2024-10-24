import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AddEventForm from "../../components/ClientForm/Form";

const ClientForm = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <AddEventForm />
    </View>
  );
};

export default ClientForm;

const styles = StyleSheet.create({});
