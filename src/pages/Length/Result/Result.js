import React from 'react';
import { Text } from 'react-native';
import Styles from './Styles';

export default function Result({ lengthResult }) {
    return (
        <Text style={Styles.lengthResult}>
            {lengthResult !== 0 ? 'The result is: ' : ''}{lengthResult !== 0 ? lengthResult : ''}
        </Text>
    );
};
