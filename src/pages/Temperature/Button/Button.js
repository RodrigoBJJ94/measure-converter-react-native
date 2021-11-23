import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function Button({ clearTemperature }) {
    return (
        <TouchableOpacity onPress={clearTemperature} style={Styles.temperatureButtonClear}>
            <Text style={Styles.temperatureButtonClearText}>Clear</Text>
        </TouchableOpacity>
    );
};
