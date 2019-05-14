import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { Camera, Permissions } from "expo";

export class Home extends React.Component {
  state = {
    cameraPermissionGranted: false
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
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
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
                  Cadeira
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
