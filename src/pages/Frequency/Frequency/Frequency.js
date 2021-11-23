import React, { useState } from 'react';
import { View } from 'react-native';
import Statusbar from '../Statusbar/Statusbar';
import Title from '../Title/Title';
import Caption from '../../../components/Caption/Caption';
import FrequencyTextInput from '../TextInput/FrequencyTextInput';
import FrequencyPicker from '../Picker/FrequencyPicker';
import Button from '../Button/Button';
import Result from '../Result/Result';
import BackToHome from '../../../components/BackToHome/BackToHome';
import Styles from './Styles';

export default function Frequency({ setScreen }) {
    const [frequencyOne, setFrequencyOne] = useState('hertz');
    const [frequencyTwo, setFrequencyTwo] = useState('kilohertz');
    const [frequencyInput, setFrequencyInput] = useState('');
    const [frequencyResult, setFrequencyResult] = useState(0);

    const setScreenHome = () => {
        setScreen('home');
        setFrequencyResult(0);
        setFrequencyOne('hertz');
        setFrequencyTwo('kilohertz');
    };

    const resultFrequency = (value) => {
        if (frequencyOne === 'hertz' && frequencyTwo === 'megahertz') {
            if (value !== '') {
                setFrequencyResult((Number(value) / 1000000).toFixed(6));
            } else {
                setFrequencyResult('');
            }
        } else if (frequencyOne === 'hertz' && frequencyTwo === 'gigahertz') {
            if (value !== '') {
                setFrequencyResult((Number(value) / 1000000000).toFixed(9));
            } else {
                setFrequencyResult('');
            }
        } else if (frequencyOne === 'kilohertz' && frequencyTwo === 'hertz') {
            if (value !== '') {
                setFrequencyResult((Number(value) * 1000).toFixed(1));
            } else {
                setFrequencyResult('');
            }
        } else if (frequencyOne === 'kilohertz' && frequencyTwo === 'megahertz') {
            if (value !== '') {
                setFrequencyResult((Number(value) / 1000).toFixed(3));
            } else {
                setFrequencyResult('');
            }
        } else if (frequencyOne === 'kilohertz' && frequencyTwo === 'gigahertz') {
            if (value !== '') {
                setFrequencyResult((Number(value) / 1000000).toFixed(6));
            } else {
                setFrequencyResult('');
            }
        } else if (frequencyOne === 'megahertz' && frequencyTwo === 'hertz') {
            if (value !== '') {
                setFrequencyResult((Number(value) * 1000000).toFixed(1));
            } else {
                setFrequencyResult('');
            }
        } else if (frequencyOne === 'megahertz' && frequencyTwo === 'kilohertz') {
            if (value !== '') {
                setFrequencyResult((Number(value) * 1000).toFixed(1));
            } else {
                setFrequencyResult('');
            }
        } else if (frequencyOne === 'megahertz' && frequencyTwo === 'gigahertz') {
            if (value !== '') {
                setFrequencyResult((Number(value) / 1000).toFixed(3));
            } else {
                setFrequencyResult('');
            }
        } else if (frequencyOne === 'gigahertz' && frequencyTwo === 'hertz') {
            if (value !== '') {
                setFrequencyResult((Number(value) * 1000000000).toFixed(1));
            } else {
                setFrequencyResult('');
            }
        } else if (frequencyOne === 'gigahertz' && frequencyTwo === 'kilohertz') {
            if (value !== '') {
                setFrequencyResult((Number(value) * 1000000).toFixed(1));
            } else {
                setFrequencyResult('');
            }
        } else if (frequencyOne === 'gigahertz' && frequencyTwo === 'megahertz') {
            if (value !== '') {
                setFrequencyResult((Number(value) * 1000).toFixed(1));
            } else {
                setFrequencyResult('');
            }
        } else if (frequencyOne === frequencyTwo) {
            if (value !== '') {
                setFrequencyResult(Number(value));
            } else {
                setFrequencyResult('');
            }
        } else {
            if (value !== '') {
                setFrequencyResult((Number(value) / 1000).toFixed(3));
            } else {
                setFrequencyResult('')
            };
        };
    };

    const onChangeFrequency = (value) => {
        resultFrequency(value);
    };

    const clearFrequency = () => {
        setFrequencyResult(0);
        frequencyInput.clear();
    };

    return (
        <View style={Styles.frequencyContainer}>
            <Statusbar />
            <Title />
            <Caption />
            <FrequencyTextInput onChangeFrequency={onChangeFrequency} setFrequencyInput={setFrequencyInput} />
            <FrequencyPicker
                frequencyOne={frequencyOne} setFrequencyOne={setFrequencyOne}
                frequencyTwo={frequencyTwo} setFrequencyTwo={setFrequencyTwo} />
            <Button clearFrequency={clearFrequency} />
            <Result frequencyResult={frequencyResult} />
            <BackToHome setScreenHome={setScreenHome} />
        </View>
    );
};
