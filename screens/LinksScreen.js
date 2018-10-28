import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Your Match',
  };

  handlePress() {
    Alert.alert('Chat');
  }

  render() {
    // const info = this.props.info;
    const info = {
      name: 'Kelly Ho',
      major: 'Computer Science',
      year: 'Senior',
      hometown: 'New York',
      bio: 'I love football, programming and talking about the news.',
    };
    return (
      <View style={styles.centerContainer}>
        <Image
          style={styles.picture}
          source={require('../assets/images/kelly.jpeg')}
        />
        <Text style={{ textAlign: 'center', fontSize: 20 }}>
          {info.name + '\n'}
          {info.major + '\n'}
          {info.year + '\n'}
          {info.hometown + '\n'}
          {info.bio + '\n'}
        </Text>
        <Button
          onPress={this.handlePress}
          title="Chat"
          color="#841584"
          style={{ marginTop: 200 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  picture: {
    borderRadius: 50,
    width: 150,
    height: 150,
    marginBottom: 25,
  },
  centerContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 20,
  },
});
