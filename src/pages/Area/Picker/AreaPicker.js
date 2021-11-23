import React from 'react';
import { Picker } from '@react-native-picker/picker';
import Styles from './Styles';

export default function AreaPicker({ areaOne, setAreaOne, areaTwo, setAreaTwo }) {
    return (
        <>
            <Picker selectedValue={areaOne} onValueChange={(itemValue) => setAreaOne(itemValue)} style={Styles.areaPicker} >
                <Picker.Item label="Square Kilometer" value="squareKilometer" />
                <Picker.Item label="Square Meter" value="squareMeter" />
                <Picker.Item label="Square Mile" value="squareMile" />
                <Picker.Item label="Square Yard" value="squareYard" />
                <Picker.Item label="Square Foot" value="squareFoot" />
                <Picker.Item label="Square Inch" value="squareInch" />
                <Picker.Item label="Hectare" value="hectare" />
                <Picker.Item label="Acre" value="acre" />
            </Picker>
            <Picker selectedValue={areaTwo} onValueChange={(itemValue) => setAreaTwo(itemValue)} style={Styles.areaPicker}>
                <Picker.Item label="Square Kilometer" value="squareKilometer" />
                <Picker.Item label="Square Meter" value="squareMeter" />
                <Picker.Item label="Square Mile" value="squareMile" />
                <Picker.Item label="Square Yard" value="squareYard" />
                <Picker.Item label="Square Foot" value="squareFoot" />
                <Picker.Item label="Square Inch" value="squareInch" />
                <Picker.Item label="Hectare" value="hectare" />
                <Picker.Item label="Acre" value="acre" />
            </Picker>
        </>
    );
};
