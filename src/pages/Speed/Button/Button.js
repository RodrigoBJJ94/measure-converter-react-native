import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function Button({ clearSpeed }) {
    return (
        <TouchableOpacity onPress={clearSpeed} style={Styles.speedButtonClear}>
            <Text style={Styles.speedButtonClearText}>Clear</Text>
        </TouchableOpacity>
    );
};
