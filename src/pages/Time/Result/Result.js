import React from 'react';
import { Text } from 'react-native';
import Styles from './Styles';

export default function Result({ timeResult }) {
    return (
        <Text style={Styles.timeResult}>
            {timeResult !== 0 ? 'The result is: ' : ''}{timeResult !== 0 ? timeResult : ''}
        </Text>
    );
};
