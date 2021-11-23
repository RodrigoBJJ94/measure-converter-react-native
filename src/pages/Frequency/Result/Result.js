import React from 'react';
import { Text } from 'react-native';
import Styles from './Styles';

export default function Result({ frequencyResult }) {
    return (
        <Text style={Styles.frequencyResult}>
            {frequencyResult !== 0 ? 'The result is: ' : ''}{frequencyResult !== 0 ? frequencyResult : ''}
        </Text>
    );
};
