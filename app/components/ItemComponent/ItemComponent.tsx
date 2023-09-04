import type { PropsWithChildren } from "react";
import type { IPost } from "../../screens/SettingsScreen/SettingsScreen";

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ItemComponent: React.FC<
    PropsWithChildren<{
      data: IPost,
    }>
  > = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        { data.title }
      </Text>
      <Text style={styles.body}>
        { data.body }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 4,

    paddingVertical: 6,
    paddingHorizontal: 12,

    borderColor: "#22222250",
    borderWidth: 1,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  body: {
    fontSize: 14,
    fontWeight: "400",
  },
});

export default ItemComponent;
