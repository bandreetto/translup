import { Home } from "./Home";
import { Settings } from "./Settings";
import { createStackNavigator } from "react-navigation";

export const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Settings: {
      screen: Settings
    }
  },
  {
    initialRouteName: "Home"
  }
);
