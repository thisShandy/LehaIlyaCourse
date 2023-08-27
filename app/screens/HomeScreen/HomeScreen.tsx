import type { PropsWithChildren } from "react";

import React, { useState } from "react";
import { View, Text, Image, StyleSheet, } from "react-native";

import { moodsData } from "../../configs/moods";

const HomeScreen: React.FC<PropsWithChildren<{}>> = () => {
  const [ active, setActive ] = useState<string>(moodsData[0].id);

  const temperature: string = "12°";

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Feels Like A good time to ride a bike</Text>
        <Image
          style={styles.headerImage}
          source={require("../../assets/images/bike.png")}
        />
      </View>
      <View style={styles.weather}>
        <View style={styles.circle}>
          <Text style={styles.title}>Today’s Like</Text>
          <Text style={styles.temperature}>
            { temperature }
          </Text>
        </View>
      </View>
      <View style={styles.mood}>
        <View style={styles.moodItem}>
          <Text style={styles.moodItemTitle}>Today's mood</Text>
          <Text style={styles.moodItemDescription}>
            { moodsData.find(el => el.id === active)?.title }
          </Text>
        </View>
        <View style={styles.moodItem}>
          <Text style={styles.moodItemTitle}>Tomorrow's mood</Text>
          <Text style={styles.moodItemDescription}>Excelent</Text>
        </View>
      </View>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 12,
  },

  header: {
    flexDirection: "row",
    alignItems: "flex-end",

    paddingVertical: 12,
  },
  headerTitle: {
    width: "70%",
    fontSize: 28,
    fontWeight: "500",
  },
  headerImage: {
    width: 24,
    height: 24,

    marginBottom: 4,
  },

  weather: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",

    width: 196,
    height: 196,

    borderRadius: 999,
    backgroundColor: "#0C1823",
  },
  title: {
    fontSize: 16,

    color: "#FFFFFF",
  },
  temperature: {
    fontSize: 48,

    color: "#FFFFFF",
  },

  mood: {
    flexDirection: "row",
    gap: 14,

    marginBottom: 32,
  },

  moodItem: {
    gap: 4,
  },
  moodItemTitle: {
    fontSize: 16,
    color: "#36424D",
  },
  moodItemDescription: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0C1823",
  }
});

export default HomeScreen;
