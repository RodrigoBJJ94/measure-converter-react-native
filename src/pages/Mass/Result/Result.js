import React from 'react';
import { Text } from 'react-native';
import Styles from './Styles';

export default function Result({ massResult }) {
    return (
        <Text style={Styles.massResult}>
            {massResult !== 0 ? 'The result is: ' : ''}{massResult !== 0 ? massResult : ''}
        </Text>
    );
};
