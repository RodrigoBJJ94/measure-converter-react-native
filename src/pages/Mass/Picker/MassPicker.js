import React from 'react';
import { Picker } from '@react-native-picker/picker';
import Styles from './Styles';

export default function MassPicker({ massOne, setMassOne, massTwo, setMassTwo }) {
    return (
        <>
            <Picker selectedValue={massOne} onValueChange={(itemValue) => setMassOne(itemValue)} style={Styles.massPicker}>
                <Picker.Item label="Tonne" value="tonne" />
                <Picker.Item label="Kilogram" value="kilogram" />
                <Picker.Item label="Gram" value="gram" />
                <Picker.Item label="Milligram" value="milligram" />
                <Picker.Item label="Microgram" value="microgram" />
                <Picker.Item label="Pound" value="pound" />
                <Picker.Item label="Once" value="once" />
            </Picker>
            <Picker selectedValue={massTwo} onValueChange={(itemValue) => setMassTwo(itemValue)} style={Styles.massPicker}>
                <Picker.Item label="Tonne" value="tonne" />
                <Picker.Item label="Kilogram" value="kilogram" />
                <Picker.Item label="Gram" value="gram" />
                <Picker.Item label="Milligram" value="milligram" />
                <Picker.Item label="Microgram" value="microgram" />
                <Picker.Item label="Pound" value="pound" />
                <Picker.Item label="Once" value="once" />
            </Picker>
        </>
    );
};
