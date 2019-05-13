import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class App extends React.Component {
    state = {
      cameraPermissionGranted: false,
      type: Camera.Constants.Type.back,
    }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ cameraPermissionGranted: status === 'granted' })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.cameraPermissionGranted && 
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}/>
          </Camera>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
