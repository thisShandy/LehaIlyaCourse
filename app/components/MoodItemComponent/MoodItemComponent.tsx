import type { PropsWithChildren } from "react";
import type { IMoodItem } from "../../configs/moods";

import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const MoodItemComponent: React.FC<
    PropsWithChildren<{
      data: IMoodItem,
      active: string,
      handleActive: (id: string) => void,
    }>
  > = ({ data, active, handleActive }) => {

  // Callback function
  // () =>
  // () => {}

  return (
    <TouchableOpacity
      activeOpacity={.75}
      onPress={() => handleActive(data.id)}
      style={[
        styles.container,
        active === data.id ? styles.active : null,
      ]}
    >
      <Text style={[
        styles.title,
        active === data.id ? styles.activeTitle : null,
      ]}>
        { `${data.title} ${data.emoji}` }
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 22,

    borderWidth: 1,
    borderColor: "#36424D",
    borderRadius: 16,
  },
  active: {
    backgroundColor: "#36424D",
  },

  title: {
    fontSize: 16,
    fontWeight: "500",

    color: "#36424D",
  },
  activeTitle: {
    color: "#FFFFFF",
  }
});

export default MoodItemComponent;
