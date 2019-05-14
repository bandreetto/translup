import { Home } from "./Home";
import { createStackNavigator } from "react-navigation";

export const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  }
});
