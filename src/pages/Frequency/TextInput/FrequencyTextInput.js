import React from 'react';
import { TextInput } from 'react-native';
import Styles from './Styles';

export default function FrequencyTextInput({ onChangeFrequency, setFrequencyInput }) {
    return (
        <TextInput
            keyboardType="numeric"
            onChangeText={onChangeFrequency}
            ref={input => setFrequencyInput(input)}
            style={Styles.frequencyTextInput} />
    );
};
