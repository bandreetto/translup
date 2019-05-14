import React from "react";
import { View, Text, Picker } from "react-native";

export class Settings extends React.Component {
  static navigationOptions = {
    title: "Settings"
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDitection: "column",
          alignItems: "center",
          justifyContent: "space-evenly"
        }}
      >
        <View>
          <Text>I speak</Text>
          <Picker
            selectedValue="en"
            style={{
              height: 50,
              width: 150,
              borderWidth: 5,
              borderColor: "black"
            }}
          >
            <Picker.Item label="Portuguese" value="pt" />
            <Picker.Item label="English" value="en" />
          </Picker>
        </View>
        <View>
          <Text>I want to learn</Text>
          <Picker
            selectedValue="pt"
            style={{
              height: 50,
              width: 150,
              borderWidth: 5,
              borderColor: "black"
            }}
          >
            <Picker.Item label="Portuguese" value="pt" />
            <Picker.Item label="English" value="en" />
          </Picker>
        </View>
        <View>
          <Text>I want to learn about</Text>
          <Picker
            selectedValue="things"
            style={{
              height: 50,
              width: 150,
              borderWidth: 5,
              borderColor: "black"
            }}
          >
            <Picker.Item label="Things" value="things" />
            <Picker.Item label="Animals" value="animals" />
          </Picker>
        </View>
      </View>
    );
  }
}
