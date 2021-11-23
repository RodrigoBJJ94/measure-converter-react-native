import React from 'react';
import { TextInput } from 'react-native';
import Styles from './Styles';

export default function MassTextInput({ onChangeMass, setMassInput }) {
    return (
        <TextInput
            keyboardType="numeric"
            onChangeText={onChangeMass}
            ref={input => setMassInput(input)}
            style={Styles.massTextInput} />
    );
};
