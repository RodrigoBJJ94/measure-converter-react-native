import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function Button({ clearFrequency }) {
    return (
        <TouchableOpacity onPress={clearFrequency} style={Styles.frequencyButtonClear}>
            <Text style={Styles.frequencyButtonClearText}>Clear</Text>
        </TouchableOpacity>
    );
};
