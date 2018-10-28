import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 50,
    marginRight: 50,
    padding: 20,
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
  },

  container2: {
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    padding: 20,
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
  },

  container3: {
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    padding: 20,
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
  },

  container4: {
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 80,
    marginRight: 80,
    padding: 20,
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
  },

  containerButton: {
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 80,
    marginRight: 80,
    padding: 20,
    backgroundColor: 'rgb(66, 191, 244)',
    paddingLeft: 20,
    paddingRight: 20,
  },

  buttonText: {
    color: 'rgb(0, 0, 0)',
    fontSize: 30,
  },

  paragraph: {
    margin: 12,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },

  header: {
    marginTop: 40,
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rgb(66, 191, 244)',
  },
});

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'BuddyUp!',
  };

  constructor() {
    super();
    this.state = {
      name: null,
      major: null,
      year: null,
      hometown: null,
    };
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.header}>New User Form</Text>
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.paragraph}
            placeholder="Name"
            onChangeText={text => this.setState({ name: text })}
          />
        </View>

        <View style={styles.container2}>
          <TextInput
            style={styles.paragraph}
            placeholder="Major"
            onChangeText={text => this.setState({ major: text })}
          />
        </View>

        <View style={styles.container3}>
          <TextInput
            style={styles.paragraph}
            placeholder="Year"
            onChangeText={text => this.setState({ year: text })}
          />
        </View>

        <View style={styles.container3}>
          <TextInput
            style={styles.paragraph}
            placeholder="Hometown"
            onChangeText={text => this.setState({ hometown: text })}
          />
        </View>
        <View style={styles.containerButton}>
          <Button
            title="Match me!"
            onPress={() => this.props.navigation.navigate('Links')}
            color="rgb(256,256,256)"
          />
        </View>
      </View>
    );
  }
}
