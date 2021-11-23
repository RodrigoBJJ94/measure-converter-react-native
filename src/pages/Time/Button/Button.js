import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function Button({ clearTime }) {
    return (
        <TouchableOpacity onPress={clearTime} style={Styles.timeButtonClear}>
            <Text style={Styles.timeButtonClearText}>Clear</Text>
        </TouchableOpacity>
    );
};
