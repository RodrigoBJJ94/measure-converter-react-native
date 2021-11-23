import React from 'react';
import { Picker } from '@react-native-picker/picker';
import Styles from './Styles';

export default function FrequencyPicker({ frequencyOne, setFrequencyOne, frequencyTwo, setFrequencyTwo }) {
    return (
        <>
            <Picker selectedValue={frequencyOne} onValueChange={(itemValue) => setFrequencyOne(itemValue)} style={Styles.frequencyPicker}>
                <Picker.Item label="Hertz" value="hertz" />
                <Picker.Item label="Kilohertz" value="kilohertz" />
                <Picker.Item label="Megahertz" value="megahertz" />
                <Picker.Item label="Gigahertz" value="gigahertz" />
            </Picker>
            <Picker selectedValue={frequencyTwo} onValueChange={(itemValue) => setFrequencyTwo(itemValue)} style={Styles.frequencyPicker}>
                <Picker.Item label="Hertz" value="hertz" />
                <Picker.Item label="Kilohertz" value="kilohertz" />
                <Picker.Item label="Megahertz" value="megahertz" />
                <Picker.Item label="Gigahertz" value="gigahertz" />
            </Picker>
        </>
    );
};
