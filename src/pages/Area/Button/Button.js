import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function Button({ clearArea }) {
    return (
        <TouchableOpacity onPress={clearArea} style={Styles.areaButtonClear}>
            <Text style={Styles.areaButtonClearText}>Clear</Text>
        </TouchableOpacity>
    );
};
