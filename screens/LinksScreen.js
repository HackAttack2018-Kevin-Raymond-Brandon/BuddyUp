import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Your Mentor/Mentee',
  };

  handlePress() {
    Alert.alert('Chatting with your mentor/mentee');
  }

  render() {
    // const info = this.props.info;
    const info = {
      name: 'Kevin Ho',
      major: 'Computer Science',
      year: 'Senior',
      hometown: 'New York',
      bio: 'Computer Nerd',
    };
    return (
      <View style={styles.centerContainer}>
        <Image
          style={styles.picture}
          source={require('../assets/images/kevin.jpeg')}
        />
        <Text>
          {`Name: ${info.name}
           Major: ${info.major}
            Year: ${info.year}
        Hometown: ${info.hometown}
             Bio: ${info.bio}`}
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
  },
  centerContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 20,
  },
});
