import React, { useState } from 'react';
import { View } from 'react-native';
import Statusbar from '../Statusbar/Statusbar';
import Title from '../Title/Title';
import Caption from '../../../components/Caption/Caption';
import TemperatureTextInput from '../TextInput/TemperatureTextInput';
import TemperaturePicker from '../Picker/TemperaturePicker';
import Button from '../Button/Button';
import Result from '../Result/Result';
import BackToHome from '../../../components/BackToHome/BackToHome';
import Styles from './Styles';

export default function Temperature({ setScreen }) {
    const [temperatureOne, setTemperatureOne] = useState('celsius');
    const [temperatureTwo, setTemperatureTwo] = useState('fahrenheit');
    const [temperatureInput, setTemperatureInput] = useState('');
    const [temperatureResult, setTemperatureResult] = useState(0);

    const setScreenHome = () => {
        setScreen('home');
        setTemperatureResult(0);
        setTemperatureOne('celsius');
        setTemperatureTwo('fahrenheit');
    };

    const resultTemperature = (value) => {
        if (temperatureOne === 'celsius' && temperatureTwo === 'kelvin') {
            if (value !== '') {
                setTemperatureResult((Number(value) + 273.15).toFixed(1));
            } else {
                setTemperatureResult('');
            }
        } else if (temperatureOne === 'fahrenheit' && temperatureTwo === 'kelvin') {
            if (value !== '') {
                setTemperatureResult((Number(value - 32) * 5 / 9 + 273.15).toFixed(1));
            } else {
                setTemperatureResult('');
            }
        } else if (temperatureOne === 'fahrenheit' && temperatureTwo === 'celsius') {
            if (value !== '') {
                setTemperatureResult((Number(value - 32) * 5 / 9).toFixed(1));
            } else {
                setTemperatureResult('');
            }
        } else if (temperatureOne === 'kelvin' && temperatureTwo === 'celsius') {
            if (value !== '') {
                setTemperatureResult((Number(value) - 273.15).toFixed(1));
            } else {
                setTemperatureResult('');
            }
        } else if (temperatureOne === 'kelvin' && temperatureTwo === 'fahrenheit') {
            if (value !== '') {
                setTemperatureResult(Number((value - 273.15) * 9 / 5 + 32).toFixed(1));
            } else {
                setTemperatureResult('');
            }
        } else if (temperatureOne === temperatureTwo) {
            if (value !== '') {
                setTemperatureResult(Number(value));
            } else {
                setTemperatureResult('');
            }
        } else {
            if (value !== '') {
                setTemperatureResult((Number(value) * 9 / 5 + 32).toFixed(1));
            } else {
                setTemperatureResult('');
            };
        };
    };

    const onChangeTemperature = (value) => {
        resultTemperature(value);
    }

    const clearTemperature = () => {
        setTemperatureResult(0);
        temperatureInput.clear();
    };

    return (
        <View style={Styles.temperatureContainer}>
            <Statusbar />
            <Title />
            <Caption />
            <TemperatureTextInput onChangeTemperature={onChangeTemperature} setTemperatureInput={setTemperatureInput} />
            <TemperaturePicker
                temperatureOne={temperatureOne} setTemperatureOne={setTemperatureOne}
                temperatureTwo={temperatureTwo} setTemperatureTwo={setTemperatureTwo} />
            <Button clearTemperature={clearTemperature} />
            <Result temperatureResult={temperatureResult} />
            <BackToHome setScreenHome={setScreenHome} />
        </View>
    );
};
