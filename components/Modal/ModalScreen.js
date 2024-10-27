import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";

const BottomModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        onPress={toggleModal}
        style={{
          fontSize: 24,
        }}
      >
        <FontAwesome name="bars" size={24} color="black" />
        {""} Demo App
      </Text>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.modal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.3}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Menu</Text>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              router.push("events/");
            }}
          >
            <Text style={styles.menuText}>Admin Role Demo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              router.push("guard/");
            }}
          >
            <Text style={styles.menuText}>Guard Role Demo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              router.push("client/");
            }}
          >
            <Text style={styles.menuText}>Client Role Demo</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  openButton: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
  },
  openButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  modal: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-start",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  menuItem: {
    width: "100%",
    paddingVertical: 12,
    alignItems: "center",
    borderBottomColor: "#f0f0f0",
    borderBottomWidth: 1,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
});

export default BottomModal;
