import React from 'react';
import { Text } from 'react-native';
import Styles from './Styles';

export default function Result({ temperatureResult }) {
    return (
        <Text style={Styles.temperatureResult}>
            {temperatureResult !== 0 ? 'The result is: ' : ''}{temperatureResult !== 0 ? temperatureResult : ''}
        </Text>
    );
};
