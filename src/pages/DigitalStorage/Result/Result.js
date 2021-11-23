import React from 'react';
import { Text } from 'react-native';
import Styles from './Styles';

export default function Result({ digitalStorageResult }) {
    return (
        <Text style={Styles.digitalStorageResult}>
            {digitalStorageResult !== 0 ? 'The result is: ' : ''}{digitalStorageResult !== 0 ? digitalStorageResult : ''}
        </Text>
    );
};
