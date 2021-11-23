import React from 'react';
import { TextInput } from 'react-native';
import Styles from './Styles';

export default function TemperatureTextInput({ onChangeTemperature, setTemperatureInput }) {
    return (
        <TextInput
            keyboardType="numeric"
            onChangeText={onChangeTemperature}
            ref={input => setTemperatureInput(input)}
            style={Styles.temperatureTextInput} />
    );
};
