import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { AppNavigator } from "./Navigation";

const AppContainer = createAppContainer(AppNavigator);
export const Context = React.createContext({
  nativeLanguage: "en",
  targetLanguage: "pt",
  learningSubject: "things"
});

export default class App extends React.Component {
  state = {
    nativeLanguage: "en",
    targetLanguage: "pt",
    learningSubject: "things",
    setNativeLanguage: nativeLanguage => this.setState({ nativeLanguage }),
    setTargetLanguage: targetLanguage => this.setState({ targetLanguage }),
    setLearningSubject: learningSubject => this.setState({ learningSubject })
  };

  render() {
    return (
      <Context.Provider
        value={{
          nativeLanguage: this.state.nativeLanguage,
          targetLanguage: this.state.targetLanguage,
          learningSubject: this.state.learningSubject,
          setNativeLanguage: this.state.setNativeLanguage,
          setTargetLanguage: this.state.setTargetLanguage,
          setLearningSubject: this.state.setLearningSubject
        }}
      >
        <AppContainer />
      </Context.Provider>
    );
  }
}
