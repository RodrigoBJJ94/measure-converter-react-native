import React from 'react';
import { Picker } from '@react-native-picker/picker';
import Styles from './Styles';

export default function LengthPicker({ lengthOne, setLengthOne, lengthTwo, setLengthTwo }) {
    return (
        <>
            <Picker selectedValue={lengthOne} onValueChange={(itemValue) => setLengthOne(itemValue)} style={Styles.lengthPicker}>
                <Picker.Item label="Kilometer" value="kilometer" />
                <Picker.Item label="Meter" value="meter" />
                <Picker.Item label="Centimeter" value="centimeter" />
                <Picker.Item label="Millimeter" value="millimeter" />
                <Picker.Item label="Nanometer" value="nanometer" />
                <Picker.Item label="Mile" value="mile" />
                <Picker.Item label="Yard" value="yard" />
                <Picker.Item label="Foot" value="foot" />
                <Picker.Item label="Inch" value="inch" />
            </Picker>
            <Picker selectedValue={lengthTwo} onValueChange={(itemValue) => setLengthTwo(itemValue)} style={Styles.lengthPicker}>
                <Picker.Item label="Kilometer" value="kilometer" />
                <Picker.Item label="Meter" value="meter" />
                <Picker.Item label="Centimeter" value="centimeter" />
                <Picker.Item label="Millimeter" value="millimeter" />
                <Picker.Item label="Nanometer" value="nanometer" />
                <Picker.Item label="Mile" value="mile" />
                <Picker.Item label="Yard" value="yard" />
                <Picker.Item label="Foot" value="foot" />
                <Picker.Item label="Inch" value="inch" />
            </Picker>
        </>
    );
};
