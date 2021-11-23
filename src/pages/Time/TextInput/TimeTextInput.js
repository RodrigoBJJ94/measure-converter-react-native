import React from 'react';
import { TextInput } from 'react-native';
import Styles from './Styles';

export default function TimeTextInput({ onChangeTime, setTimeInput }) {
    return (
        <TextInput
            keyboardType="numeric"
            onChangeText={onChangeTime}
            ref={input => setTimeInput(input)}
            style={Styles.timeTextInput} />
    );
};
