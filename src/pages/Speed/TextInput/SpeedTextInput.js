import React from 'react';
import { TextInput } from 'react-native';
import Styles from './Styles';

export default function SpeedTextInput({ onChangeSpeed, setSpeedInput }) {
    return (
        <TextInput
            keyboardType="numeric"
            onChangeText={onChangeSpeed}
            ref={input => setSpeedInput(input)}
            style={Styles.speedTextInput} />
    );
};
