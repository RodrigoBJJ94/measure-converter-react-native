import React from 'react';
import { TextInput } from 'react-native';
import Styles from './Styles';

export default function LengthTextInput({ onChangeLength, setLengthInput }) {
    return (
        <TextInput
            keyboardType="numeric"
            onChangeText={onChangeLength}
            ref={input => setLengthInput(input)}
            style={Styles.lengthTextInput} />
    );
};
