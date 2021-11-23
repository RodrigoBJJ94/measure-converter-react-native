import React, { useState } from 'react';
import { View } from 'react-native';
import Statusbar from '../Statusbar/Statusbar';
import Title from '../Title/Title';
import Caption from '../../../components/Caption/Caption';
import SpeedTextInput from '../TextInput/SpeedTextInput';
import SpeedPicker from '../Picker/SpeedPicker';
import Button from '../Button/Button';
import Result from '../Result/Result';
import BackToHome from '../../../components/BackToHome/BackToHome';
import Styles from './Styles';

export default function Speed({ setScreen }) {
    const [speedOne, setSpeedOne] = useState('meterPerSecond');
    const [speedTwo, setSpeedTwo] = useState('kilometerPerHour');
    const [speedInput, setSpeedInput] = useState('');
    const [speedResult, setSpeedResult] = useState(0);

    const setScreenHome = () => {
        setScreen('home');
        setSpeedResult(0);
        setSpeedOne('meterPerSecond');
        setSpeedTwo('kilometerPerHour');
    };

    const resultSpeed = (value) => {
        if (speedOne === 'meterPerSecond' && speedTwo === 'milesPerHour') {
            if (value !== '') {
                setSpeedResult((Number(value) * 2.237).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'meterPerSecond' && speedTwo === 'footPerSecond') {
            if (value !== '') {
                setSpeedResult((Number(value) * 3.281).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'meterPerSecond' && speedTwo === 'knot') {
            if (value !== '') {
                setSpeedResult((Number(value) * 1.944).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'milesPerHour' && speedTwo === 'footPerSecond') {
            if (value !== '') {
                setSpeedResult((Number(value) * 1.467).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'milesPerHour' && speedTwo === 'meterPerSecond') {
            if (value !== '') {
                setSpeedResult((Number(value) / 2.237).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'milesPerHour' && speedTwo === 'kilometerPerHour') {
            if (value !== '') {
                setSpeedResult((Number(value) * 1.609).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'milesPerHour' && speedTwo === 'knot') {
            if (value !== '') {
                setSpeedResult((Number(value) / 1.151).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'footPerSecond' && speedTwo === 'milesPerHour') {
            if (value !== '') {
                setSpeedResult((Number(value) / 1.467).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'footPerSecond' && speedTwo === 'meterPerSecond') {
            if (value !== '') {
                setSpeedResult((Number(value) / 3.281).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'footPerSecond' && speedTwo === 'kilometerPerHour') {
            if (value !== '') {
                setSpeedResult((Number(value) * 1.097).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'footPerSecond' && speedTwo === 'knot') {
            if (value !== '') {
                setSpeedResult((Number(value) / 1.688).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'kilometerPerHour' && speedTwo === 'milesPerHour') {
            if (value !== '') {
                setSpeedResult((Number(value) / 1.609).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'kilometerPerHour' && speedTwo === 'footPerSecond') {
            if (value !== '') {
                setSpeedResult((Number(value) / 1.097).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'kilometerPerHour' && speedTwo === 'meterPerSecond') {
            if (value !== '') {
                setSpeedResult((Number(value) / 3.6).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'kilometerPerHour' && speedTwo === 'knot') {
            if (value !== '') {
                setSpeedResult((Number(value) / 1.852).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'knot' && speedTwo === 'milesPerHour') {
            if (value !== '') {
                setSpeedResult((Number(value) * 1.151).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'knot' && speedTwo === 'footPerSecond') {
            if (value !== '') {
                setSpeedResult((Number(value) * 1.688).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'knot' && speedTwo === 'meterPerSecond') {
            if (value !== '') {
                setSpeedResult((Number(value) / 1.944).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === 'knot' && speedTwo === 'kilometerPerHour') {
            if (value !== '') {
                setSpeedResult((Number(value) * 1.852).toFixed(1));
            } else {
                setSpeedResult('');
            }
        } else if (speedOne === speedTwo) {
            if (value !== '') {
                setSpeedResult(Number(value));
            } else {
                setSpeedResult('');
            }
        } else {
            if (value !== '') {
                setSpeedResult((Number(value) * 3.6).toFixed(1));
            } else {
                setSpeedResult('')
            };
        };
    };

    const onChangeSpeed = (value) => {
        resultSpeed(value);
    };

    const clearSpeed = () => {
        setSpeedResult(0);
        speedInput.clear();
    };


    return (
        <View style={Styles.speedContainer}>
            <Statusbar />
            <Title />
            <Caption />
            <SpeedTextInput onChangeSpeed={onChangeSpeed} setSpeedInput={setSpeedInput} />
            <SpeedPicker speedOne={speedOne} setSpeedOne={setSpeedOne} speedTwo={speedTwo} setSpeedTwo={setSpeedTwo} />
            <Button clearSpeed={clearSpeed} />
            <Result speedResult={speedResult} />
            <BackToHome setScreenHome={setScreenHome} />
        </View>
    );
};
