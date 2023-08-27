import type { PropsWithChildren } from "react";

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import MoodItemComponent from "../../components/MoodItemComponent/MoodItemComponent";

import { moodsData } from "../../configs/moods";

const MoodScreen: React.FC<PropsWithChildren<{}>> = () => {
  const [ active, setActive ] = useState<string>(moodsData[0].id);

  const handleActive = (id: string) => {
    setActive(id);
  };

  // const str: string = "Hello world";
  // str.split(" "); -> ["Hello", "world"];
  // str.split("w"); -> ["Hello ", "orld"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        How u feel today?
      </Text>
      <View style={styles.list}>
        {
          moodsData.map((item) => <MoodItemComponent data={item} active={active} handleActive={handleActive} key={item.id} />)
        }
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
    justifyContent: "space-between",

    padding: 12,
  },

  title: {
    fontSize: 28,
    fontWeight: "500",

    color: "#09151E",
  },

  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,

    paddingVertical: 12,
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

export default MoodScreen;
