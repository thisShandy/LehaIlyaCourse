import type { PropsWithChildren } from "react";

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const HeaderComponent: React.FC<PropsWithChildren<{}>> = () => {
  const user = {
    name: "Britney Gay",
    location: "New York - USA",
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          style={styles.infoImage}
          source={require("../../assets/images/profile.png")}
        />
        <View style={styles.infoData}>
          <Text style={styles.dataTitle}>{ user.name }</Text>
          <View style={styles.dataLocation}>
            <Text style={styles.dataTitle}>{ user.location }</Text>
            <Image
              source={require("../../assets/images/arrow_down.png")}
              style={styles.locationImage}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={.75}
      >
        <Image
          style={styles.dashboardImage}
          source={require("../../assets/images/dashboard.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    width: "100%",

    padding: 12,
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  infoImage: {
    width: 48,
    height: 52,

    borderRadius: 16,
  },

  infoData: {
    gap: 4,
  },

  dataTitle: {
    fontSize: 14,
    color: "#36424D",
  },
  dataLocation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  locationImage: {
    width: 16,
    height: 16,
  },

  dashboardImage: {
    width: 40,
    height: 40,
  },
});

export default HeaderComponent;
