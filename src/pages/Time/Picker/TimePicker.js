import React from 'react';
import { Picker } from '@react-native-picker/picker';
import Styles from './Styles';

export default function TimePicker({ timeOne, setTimeOne, timeTwo, setTimeTwo }) {
    return (
        <>
            <Picker selectedValue={timeOne} onValueChange={(itemValue) => setTimeOne(itemValue)} style={Styles.timePicker}>
                <Picker.Item label="Second" value="second" />
                <Picker.Item label="Minute" value="minute" />
                <Picker.Item label="Hour" value="hour" />
                <Picker.Item label="Day" value="day" />
                <Picker.Item label="Week" value="week" />
                <Picker.Item label="Month" value="month" />
                <Picker.Item label="Year" value="year" />
                <Picker.Item label="Decade" value="decade" />
                <Picker.Item label="Century" value="century" />
            </Picker>
            <Picker selectedValue={timeTwo} onValueChange={(itemValue) => setTimeTwo(itemValue)} style={Styles.timePicker}>
                <Picker.Item label="Second" value="second" />
                <Picker.Item label="Minute" value="minute" />
                <Picker.Item label="Hour" value="hour" />
                <Picker.Item label="Day" value="day" />
                <Picker.Item label="Week" value="week" />
                <Picker.Item label="Month" value="month" />
                <Picker.Item label="Year" value="year" />
                <Picker.Item label="Decade" value="decade" />
                <Picker.Item label="Century" value="century" />
            </Picker>
        </>
    );
};
