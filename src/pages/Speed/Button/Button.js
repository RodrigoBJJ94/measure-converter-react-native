import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function Button({ clearMass }) {
    return (
        <TouchableOpacity onPress={clearMass} style={Styles.massButtonClear}>
            <Text style={Styles.massButtonClearText}>Clear</Text>
        </TouchableOpacity>
    );
};
