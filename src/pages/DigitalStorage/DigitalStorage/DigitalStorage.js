import React, { useState } from 'react';
import { View } from 'react-native';
import Statusbar from '../Statusbar/Statusbar';
import Title from '../Title/Title';
import Caption from '../../../components/Caption/Caption';
import DigitalStorageTextInput from '../TextInput/DigitalStorageTextInput';
import DigitalStoragePicker from '../Picker/DigitalStoragePicker';
import Button from '../Button/Button';
import Result from '../Result/Result';
import BackToHome from '../../../components/BackToHome/BackToHome';
import Styles from './Styles';

export default function DigitalStorage({ setScreen }) {
    const [digitalStorageOne, setDigitalStorageOne] = useState('byte');
    const [digitalStorageTwo, setDigitalStorageTwo] = useState('kilobyte');
    const [digitalStorageInput, setDigitalStorageInput] = useState('');
    const [digitalStorageResult, setDigitalStorageResult] = useState(0);

    const setScreenHome = () => {
        setScreen('home');
        setDigitalStorageResult(0);
        setDigitalStorageOne('byte');
        setDigitalStorageTwo('kylobyte');
    };

    const resultDigitalStorage = (value) => {
        if (digitalStorageOne === 'byte' && digitalStorageTwo === 'bit') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) * 8).toFixed(1));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'byte' && digitalStorageTwo === 'megabyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) / 1000000).toFixed(6));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'byte' && digitalStorageTwo === 'gigabyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) / 1000000000).toFixed(9));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'byte' && digitalStorageTwo === 'terabyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) / 1000000000000).toFixed(12));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'bit' && digitalStorageTwo === 'byte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) / 8).toFixed(1));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'bit' && digitalStorageTwo === 'kilobyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) / 8000).toFixed(4));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'bit' && digitalStorageTwo === 'megabyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) / 8000000).toFixed(7));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'bit' && digitalStorageTwo === 'gigabyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) / 8000000000).toFixed(10));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'bit' && digitalStorageTwo === 'terabyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) / 8000000000000).toFixed(13));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'kilobyte' && digitalStorageTwo === 'bit') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) * 8000).toFixed(1));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'kilobyte' && digitalStorageTwo === 'byte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) * 1000).toFixed(1));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'kilobyte' && digitalStorageTwo === 'megabyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) / 1000).toFixed(3));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'kilobyte' && digitalStorageTwo === 'gigabyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) / 1000000).toFixed(6));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'kilobyte' && digitalStorageTwo === 'terabyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) / 1000000000).toFixed(9));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'megabyte' && digitalStorageTwo === 'bit') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) * 8000000).toFixed(1));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'megabyte' && digitalStorageTwo === 'byte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) * 1000000).toFixed(1));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'megabyte' && digitalStorageTwo === 'kilobyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) * 1000).toFixed(1));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'megabyte' && digitalStorageTwo === 'gigabyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) / 1000).toFixed(3));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'megabyte' && digitalStorageTwo === 'terabyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) / 1000000).toFixed(6));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'gigabyte' && digitalStorageTwo === 'bit') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) * 8000000000).toFixed(1));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'gigabyte' && digitalStorageTwo === 'byte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) * 1000000000).toFixed(1));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'gigabyte' && digitalStorageTwo === 'kilobyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) * 1000000).toFixed(1));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'gigabyte' && digitalStorageTwo === 'megabyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) * 1000).toFixed(1));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'gigabyte' && digitalStorageTwo === 'terabyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) / 1000).toFixed(3));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'terabyte' && digitalStorageTwo === 'bit') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) * 8000000000000).toFixed(1));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'terabyte' && digitalStorageTwo === 'byte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) * 1000000000000).toFixed(1));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'terabyte' && digitalStorageTwo === 'kilobyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) * 1000000000).toFixed(1));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'terabyte' && digitalStorageTwo === 'megabyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) * 1000000).toFixed(1));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === 'terabyte' && digitalStorageTwo === 'gigabyte') {
            if (value !== '') {
                setDigitalStorageResult((Number(value) * 1000).toFixed(1));
            } else {
                setDigitalStorageResult('');
            }
        } else if (digitalStorageOne === digitalStorageTwo) {
            if (value !== '') {
                setDigitalStorageResult(Number(value));
            } else {
                setDigitalStorageResult('');
            }
        } else {
            if (value !== '') {
                setDigitalStorageResult((Number(value) / 1000).toFixed(3));
            } else {
                setDigitalStorageResult('');
            };
        };
    };

    const onChangeDigitalStorage = (value) => {
        resultDigitalStorage(value);
    };

    const clearDigitalStorage = () => {
        setDigitalStorageResult(0);
        digitalStorageInput.clear();
    };

    return (
        <View style={Styles.digitalStorageContainer}>
            <Statusbar />
            <Title />
            <Caption />
            <DigitalStorageTextInput
                onChangeDigitalStorage={onChangeDigitalStorage} setDigitalStorageInput={setDigitalStorageInput} />
            <DigitalStoragePicker
                digitalStorageOne={digitalStorageOne} setDigitalStorageOne={setDigitalStorageOne}
                digitalStorageTwo={digitalStorageTwo} setDigitalStorageTwo={setDigitalStorageTwo} />
            <Button clearDigitalStorage={clearDigitalStorage} />
            <Result digitalStorageResult={digitalStorageResult} />
            <BackToHome setScreenHome={setScreenHome} />
        </View>
    );
};
