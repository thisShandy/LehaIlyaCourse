import type { PropsWithChildren } from "react";

import React from "react";
import { View, StyleSheet, } from "react-native";

import MenuItemComponent from "../MenuItemComponent/MenuItemComponent";

import { menuData } from "../../configs/menu";

const MenuComponent: React.FC<
    PropsWithChildren<{
      handleScreen: (screen: string) => void,
      active: string,
    }>
  > = ({ handleScreen, active }) => {

  return (
    <View style={styles.container}>
      {
        menuData.map((item) => <MenuItemComponent data={item} active={active} handleScreen={handleScreen} key={item.id} />)
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 24,
  },

  hello: {

  }
});

export default MenuComponent;
