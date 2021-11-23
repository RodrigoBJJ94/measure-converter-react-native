import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function BackToHome({ setScreenHome }) {
    return (
        <TouchableOpacity onPress={setScreenHome} style={Styles.backToHomeButton}>
            <Text style={Styles.backToHomeButtonText}>Go back to Home</Text>
        </TouchableOpacity>
    );
};
