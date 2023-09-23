import React from "react";
import { Modal, Text, StyleSheet, View } from "react-native";

function ConfirmScreen({ modalVisibility, hideModal }) {
  return (
    <Modal visible={modalVisibility}>
      <View styles={styles.container}></View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightsteelblue",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ConfirmScreen;
