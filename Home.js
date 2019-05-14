import React, { useContext } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { Camera, Permissions } from "expo";
import { Context } from "./App";

export class Home extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    cameraPermissionGranted: false,
    matchOptions: {
      things: {
        pt: "Cadeira",
        en: "Chair"
      },
      animals: {
        pt: "Gato",
        en: "Cat"
      }
    }
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ cameraPermissionGranted: status === "granted" });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.cameraPermissionGranted ? (
          <Camera style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "column"
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  marginTop: 30,
                  marginLeft: 5
                }}
                onPress={() => {
                  this.props.navigation.navigate("Settings");
                }}
              >
                <Image source={require("./assets/gear.png")} />
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  marginTop: 120
                }}
              >
                <Text
                  style={{
                    marginLeft: 75,
                    backgroundColor: "white",
                    width: 50
                  }}
                >
                  <Context.Consumer>
                    {context =>
                      this.state.matchOptions[context.learningSubject][
                        context.targetLanguage
                      ]
                    }
                  </Context.Consumer>
                </Text>
                <View
                  style={{
                    borderWidth: 5,
                    borderColor: "white",
                    marginLeft: 75,
                    marginRight: 75,
                    height: 300
                  }}
                />
              </View>
            </View>
          </Camera>
        ) : (
          <View />
        )}
      </View>
    );
  }
}
