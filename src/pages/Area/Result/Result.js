import React from 'react';
import { Text } from 'react-native';
import Styles from './Styles';

export default function Result({ areaResult }) {
    return (
        <Text style={Styles.areaResult}>
            {areaResult !== 0 ? 'The result is: ' : ''}{areaResult !== 0 ? areaResult : ''}
        </Text>
    );
};
