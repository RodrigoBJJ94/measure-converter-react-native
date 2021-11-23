import React from 'react';
import { TextInput } from 'react-native';
import Styles from './Styles';

export default function AreaTextInput({ onChangeArea, setAreaInput }) {
    return (
        <TextInput
            keyboardType="numeric"
            onChangeText={onChangeArea}
            ref={input => setAreaInput(input)}
            style={Styles.areaTextInput} />
    );
};
