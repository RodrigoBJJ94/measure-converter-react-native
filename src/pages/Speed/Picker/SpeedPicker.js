import React from 'react';
import { Picker } from '@react-native-picker/picker';
import Styles from './Styles';

export default function MassPicker({ speedOne, setSpeedOne, speedTwo, setSpeedTwo }) {
    return (
        <>
            <Picker selectedValue={speedOne} onValueChange={(itemValue) => setSpeedOne(itemValue)} style={Styles.speedPicker}>
                <Picker.Item label="Meter per Second" value="meterPerSecond" />
                <Picker.Item label="Miles per Hour" value="milesPerHour" />
                <Picker.Item label="Foot per Second" value="footPerSecond" />
                <Picker.Item label="Kilometer per Hour" value="kilometerPerHour" />
                <Picker.Item label="Knot" value="knot" />
            </Picker>
            <Picker selectedValue={speedTwo} onValueChange={(itemValue) => setSpeedTwo(itemValue)} style={Styles.speedPicker}>
                <Picker.Item label="Meter per Second" value="meterPerSecond" />
                <Picker.Item label="Miles per Hour" value="milesPerHour" />
                <Picker.Item label="Foot per Second" value="footPerSecond" />
                <Picker.Item label="Kilometer per Hour" value="kilometerPerHour" />
                <Picker.Item label="Knot" value="knot" />
            </Picker>
        </>
    );
};
