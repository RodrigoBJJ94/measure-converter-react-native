import React from 'react';
import { Text } from 'react-native';
import Styles from './Styles';

export default function Result({ speedResult }) {
    return (
        <Text style={Styles.speedResult}>
            {speedResult !== 0 ? 'The result is: ' : ''}{speedResult !== 0 ? speedResult : ''}
        </Text>
    );
};
