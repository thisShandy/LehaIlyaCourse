import type { PropsWithChildren } from "react";

import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import MenuComponent from "./components/MenuComponent/MenuComponent";

// screens
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import MoodScreen from "./screens/MoodScreen/MoodScreen";
import SettingsScreen from "./screens/SettingsScreen/SettingsScreen";

import * as screens from "./configs/screens";

const Root: React.FC<PropsWithChildren<{}>> = () => {
  // const [ (переменная), (функция, которая её обновляет) ] = useState<тип>(знаение по умолчанию);
  const [ activeScreen, setActiveScreen ] = useState<string>(screens.HOME_SCREEN);
  const handleScreen = (screen: string) => {
    setActiveScreen(screen);
  };

  return (
    <SafeAreaView
      style={styles.container}
    >
      <HeaderComponent />
      {
        activeScreen === screens.HOME_SCREEN && (
          <HomeScreen />
        )
      }
      {
        activeScreen === screens.MOOD_SCREEN && (
          <MoodScreen />
        )
      }
      {
        activeScreen === screens.SETTINGS_SCREEN && (
          <SettingsScreen />
        )
      }
      <MenuComponent
        active={activeScreen}
        handleScreen={handleScreen}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  }
});

export default Root;
