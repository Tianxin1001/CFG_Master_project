import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WelcomeMessage from '../components/welcomeMessage';

const Profile = ({ route }) => {
    const { user } = route?.params || { user: { name: '', password: '' } };
    const [newName, setNewName] = useState(user.name);
    const [newPassword, setNewPassword] = useState(user.password);

    const navigation = useNavigation();

    const handleLogout = () => {
        // Display a logout message
        alert('You have been logged out');

        // Reset the username and password fields
        setNewName('');
        setNewPassword('');
    };

    const handleContinue = () => {
        navigation.navigate('WorldMap');
    };


    return (
        <View style={styles.container}>
            <Image source={require('../../assets/user_profile_picture.png')} style={styles.userImage} />

            <WelcomeMessage user={user}/>

            <Text style={styles.heading}>Profile</Text>
            <Text style={styles.label}>Nickname:</Text>
            <Text style={styles.value}>{newName}</Text>
            <Text style={styles.label}>Password:</Text>
            <Text style={styles.value}>{newPassword}</Text>

            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>Start News Journey!</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    userImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        alignSelf: 'center',
    },
    value: {
        fontSize: 16,
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default Profile;
