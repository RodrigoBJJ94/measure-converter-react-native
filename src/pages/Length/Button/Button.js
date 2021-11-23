import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function Button({ clearLength }) {
    return (
        <TouchableOpacity onPress={clearLength} style={Styles.lengthButtonClear}>
            <Text style={Styles.lengthButtonClearText}>Clear</Text>
        </TouchableOpacity>
    );
};
