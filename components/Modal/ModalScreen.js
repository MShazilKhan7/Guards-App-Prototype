import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";

const BottomModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.openButton}>
        <Text style={styles.openButtonText}>Show Menus</Text>
      </TouchableOpacity>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
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
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
