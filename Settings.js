import React from "react";
import { View, Text, Picker } from "react-native";
import { Context } from "./App";

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
          <Context.Consumer>
            {context => (
              <Picker
                selectedValue={context.nativeLanguage}
                style={{
                  height: 50,
                  width: 150,
                  borderWidth: 5,
                  borderColor: "black"
                }}
                onValueChange={value => context.setNativeLanguage(value)}
              >
                <Picker.Item label="Portuguese" value="pt" />
                <Picker.Item label="English" value="en" />
              </Picker>
            )}
          </Context.Consumer>
        </View>
        <View>
          <Text>I want to learn</Text>
          <Context.Consumer>
            {context => (
              <Picker
                selectedValue={context.targetLanguage}
                style={{
                  height: 50,
                  width: 150,
                  borderWidth: 5,
                  borderColor: "black"
                }}
                onValueChange={value => context.setTargetLanguage(value)}
              >
                <Picker.Item label="Portuguese" value="pt" />
                <Picker.Item label="English" value="en" />
              </Picker>
            )}
          </Context.Consumer>
        </View>
        <View>
          <Text>I want to learn about</Text>
          <Context.Consumer>
            {context => (
              <Picker
                selectedValue={context.learningSubject}
                style={{
                  height: 50,
                  width: 150,
                  borderWidth: 5,
                  borderColor: "black"
                }}
                onValueChange={value => context.setLearningSubject(value)}
              >
                <Picker.Item label="Things" value="things" />
                <Picker.Item label="Animals" value="animals" />
              </Picker>
            )}
          </Context.Consumer>
        </View>
      </View>
    );
  }
}
