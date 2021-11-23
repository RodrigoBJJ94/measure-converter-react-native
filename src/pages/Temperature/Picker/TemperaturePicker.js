import React from 'react';
import { Picker } from '@react-native-picker/picker';
import Styles from './Styles';

export default function TemperaturePicker({ temperatureOne, setTemperatureOne, temperatureTwo, setTemperatureTwo }) {
    return (
        <>
            <Picker selectedValue={temperatureOne} onValueChange={(itemValue) => setTemperatureOne(itemValue)} style={Styles.temperaturePicker}>
                <Picker.Item label="Celsius" value="celsius" />
                <Picker.Item label="Fahrenheit" value="fahrenheit" />
                <Picker.Item label="Kelvin" value="kelvin" />
            </Picker>
            <Picker selectedValue={temperatureTwo} onValueChange={(itemValue) => setTemperatureTwo(itemValue)} style={Styles.temperaturePicker}>
                <Picker.Item label="Fahrenheit" value="fahrenheit" />
                <Picker.Item label="Celsius" value="celsius" />
                <Picker.Item label="Kelvin" value="kelvin" />
            </Picker>
        </>
    );
};
