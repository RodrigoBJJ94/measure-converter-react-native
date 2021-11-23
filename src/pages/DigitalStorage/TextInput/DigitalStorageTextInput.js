import React from 'react';
import { TextInput } from 'react-native';
import Styles from './Styles';

export default function DigitalStorageTextInput({ onChangeDigitalStorage, setDigitalStorageInput }) {
    return (
        <TextInput
            keyboardType="numeric"
            onChangeText={onChangeDigitalStorage}
            ref={input => setDigitalStorageInput(input)}
            style={Styles.digitalStorageTextInput} />
    );
};
