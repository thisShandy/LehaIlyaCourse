import type { PropsWithChildren } from "react";
import type { IMenuItem } from "../../configs/menu";

import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const MenuItemComponent: React.FC<
    PropsWithChildren<{
      data: IMenuItem
      active: string,
      handleScreen: (screen: string) => void,
    }>
  > = ({ data, active, handleScreen }) => {

  return (
    <TouchableOpacity
      activeOpacity={.75}
      onPress={() => { handleScreen(data.id) }}
      style={[
        styles.container,
        active === data.id ? styles.active : null,
      ]}
    >
      <Image
        style={[
          styles.image,
          active === data.id ? styles.activeImage : null,
        ]}
        source={data.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",

    paddingVertical: 8,
    paddingHorizontal: 20,

    borderRadius: 16,
    backgroundColor: "transparent",
  },
  active: {
    backgroundColor: "#0C1823",
  },

  image: {
    width: 28,
    height: 28,
  },
  activeImage: {
    tintColor: "#ffffff",
  }
});

export default MenuItemComponent;
