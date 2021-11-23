import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function Button({ clearDigitalStorage }) {
    return (
        <TouchableOpacity onPress={clearDigitalStorage} style={Styles.digitalStorageButtonClear}>
            <Text style={Styles.digitalStorageButtonClearText}>Clear</Text>
        </TouchableOpacity>
    );
};
