import React from 'react';
import { Picker } from '@react-native-picker/picker';
import Styles from './Styles';

export default function DigitalStoragePicker({ digitalStorageOne, setDigitalStorageOne, digitalStorageTwo, setDigitalStorageTwo }) {
    return (
        <>
            <Picker selectedValue={digitalStorageOne} onValueChange={(itemValue) => setDigitalStorageOne(itemValue)} style={Styles.digitalStoragePicker}>
                <Picker.Item label="Bit" value="bit" />
                <Picker.Item label="Byte" value="byte" />
                <Picker.Item label="Kilobyte" value="kilobyte" />
                <Picker.Item label="Megabyte" value="megabyte" />
                <Picker.Item label="Gigabyte" value="gigabyte" />
                <Picker.Item label="Terabyte" value="terabyte" />
            </Picker>
            <Picker selectedValue={digitalStorageTwo} onValueChange={(itemValue) => setDigitalStorageTwo(itemValue)} style={Styles.digitalStoragePicker}>
                <Picker.Item label="Bit" value="bit" />
                <Picker.Item label="Byte" value="byte" />
                <Picker.Item label="Kilobyte" value="kilobyte" />
                <Picker.Item label="Megabyte" value="megabyte" />
                <Picker.Item label="Gigabyte" value="gigabyte" />
                <Picker.Item label="Terabyte" value="terabyte" />
            </Picker>
        </>
    );
};
