import type { ImageSourcePropType } from "react-native/Libraries/Image/Image";

import * as screens from "./screens";

export interface IMenuItem {
  id: string,
  image: ImageSourcePropType,
}

export const menuData: IMenuItem[] = [
  {
    id: screens.HOME_SCREEN,
    image: require("../assets/images/menu/sun.png"),
  },
  {
    id: screens.MOOD_SCREEN,
    image: require("../assets/images/menu/cloud.png"),
  },
  {
    id: screens.MAPS_SCREEN,
    image: require("../assets/images/menu/marker.png"),
  },
  {
    id: screens.SETTINGS_SCREEN,
    image: require("../assets/images/menu/thunder.png"),
  },
];
