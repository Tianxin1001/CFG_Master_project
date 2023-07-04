import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';

const UserProfileButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Image source={require('../../assets/user_profile_picture.png')} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 25,
  },
  buttonWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 20,
  },
});

export default UserProfileButton;
