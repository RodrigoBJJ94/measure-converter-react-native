import React, { useState } from 'react';
import { View } from 'react-native';
import Statusbar from '../Statusbar/Statusbar';
import Title from '../Title/Title';
import Caption from '../../../components/Caption/Caption';
import LengthTextInput from '../TextInput/LengthTextInput';
import LengthPicker from '../Picker/LengthPicker';
import Button from '../Button/Button';
import Result from '../Result/Result';
import BackToHome from '../../../components/BackToHome/BackToHome';
import Styles from './Styles';

export default function Lenght({ setScreen }) {
    const [lengthOne, setLengthOne] = useState('meter');
    const [lengthTwo, setLengthTwo] = useState('centimeter');
    const [lengthInput, setLengthInput] = useState('');
    const [lengthResult, setLengthResult] = useState(0);

    const setScreenHome = () => {
        setScreen('home');
        setLengthResult(0);
        setLengthOne('meter');
        setLengthTwo('centimeter');
    };

    const resultLength = (value) => {
        if (lengthOne === 'meter' && lengthTwo === 'kilometer') {
            if (value !== '') {
                setLengthResult((Number(value) / 1000).toFixed(3));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'meter' && lengthTwo === 'millimeter') {
            if (value !== '') {
                setLengthResult((Number(value) * 1000).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'meter' && lengthTwo === 'nanometer') {
            if (value !== '') {
                setLengthResult((Number(value) * 1000000000).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'meter' && lengthTwo === 'mile') {
            if (value !== '') {
                setLengthResult((Number(value) / 1609).toFixed(4));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'meter' && lengthTwo === 'yard') {
            if (value !== '') {
                setLengthResult((Number(value) * 1.094).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'meter' && lengthTwo === 'foot') {
            if (value !== '') {
                setLengthResult((Number(value) * 3.281).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'meter' && lengthTwo === 'inch') {
            if (value !== '') {
                setLengthResult((Number(value) * 39.37).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'kilometer' && lengthTwo === 'meter') {
            if (value !== '') {
                setLengthResult((Number(value) * 1000).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'kilometer' && lengthTwo === 'centimeter') {
            if (value !== '') {
                setLengthResult((Number(value) * 100000).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'kilometer' && lengthTwo === 'millimeter') {
            if (value !== '') {
                setLengthResult((Number(value) * 1000000).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'kilometer' && lengthTwo === 'nanometer') {
            if (value !== '') {
                setLengthResult((Number(value) * 1000000000000).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'kilometer' && lengthTwo === 'mile') {
            if (value !== '') {
                setLengthResult((Number(value) / 1.609).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'kilometer' && lengthTwo === 'yard') {
            if (value !== '') {
                setLengthResult((Number(value) * 1094).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'kilometer' && lengthTwo === 'foot') {
            if (value !== '') {
                setLengthResult((Number(value) * 3281).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'kilometer' && lengthTwo === 'inch') {
            if (value !== '') {
                setLengthResult((Number(value) * 39370).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'centimeter' && lengthTwo === 'kilometer') {
            if (value !== '') {
                setLengthResult((Number(value) / 100000).toFixed(5));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'centimeter' && lengthTwo === 'meter') {
            if (value !== '') {
                setLengthResult((Number(value) / 100).toFixed(2));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'centimeter' && lengthTwo === 'millimeter') {
            if (value !== '') {
                setLengthResult((Number(value) * 10).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'centimeter' && lengthTwo === 'nanometer') {
            if (value !== '') {
                setLengthResult((Number(value) * 10000000).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'centimeter' && lengthTwo === 'mile') {
            if (value !== '') {
                setLengthResult((Number(value) / 160934).toFixed(5));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'centimeter' && lengthTwo === 'yard') {
            if (value !== '') {
                setLengthResult((Number(value) / 91.44).toFixed(2));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'centimeter' && lengthTwo === 'foot') {
            if (value !== '') {
                setLengthResult((Number(value) / 30.48).toFixed(2));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'centimeter' && lengthTwo === 'inch') {
            if (value !== '') {
                setLengthResult((Number(value) / 2.54).toFixed(6));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'millimeter' && lengthTwo === 'kilometer') {
            if (value !== '') {
                setLengthResult((Number(value) / 1000000).toFixed(6));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'millimeter' && lengthTwo === 'meter') {
            if (value !== '') {
                setLengthResult((Number(value) / 1000).toFixed(3));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'millimeter' && lengthTwo === 'centimeter') {
            if (value !== '') {
                setLengthResult((Number(value) / 10).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'millimeter' && lengthTwo === 'nanometer') {
            if (value !== '') {
                setLengthResult((Number(value) * 1000000).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'millimeter' && lengthTwo === 'mile') {
            if (value !== '') {
                setLengthResult((Number(value) / 1609000).toFixed(6));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'millimeter' && lengthTwo === 'yard') {
            if (value !== '') {
                setLengthResult((Number(value) / 914).toFixed(3));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'millimeter' && lengthTwo === 'foot') {
            if (value !== '') {
                setLengthResult((Number(value) / 305).toFixed(3));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'millimeter' && lengthTwo === 'inch') {
            if (value !== '') {
                setLengthResult((Number(value) / 25.4).toFixed(2));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'nanometer' && lengthTwo === 'kilometer') {
            if (value !== '') {
                setLengthResult((Number(value) / 1000000000000).toFixed(12));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'nanometer' && lengthTwo === 'meter') {
            if (value !== '') {
                setLengthResult((Number(value) / 1000000000).toFixed(9));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'nanometer' && lengthTwo === 'centimeter') {
            if (value !== '') {
                setLengthResult((Number(value) / 10000000).toFixed(7));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'nanometer' && lengthTwo === 'millimeter') {
            if (value !== '') {
                setLengthResult((Number(value) / 1000000).toFixed(6));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'nanometer' && lengthTwo === 'mile') {
            if (value !== '') {
                setLengthResult((Number(value) / 1609000000000).toFixed(12));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'nanometer' && lengthTwo === 'yard') {
            if (value !== '') {
                setLengthResult((Number(value) / 914400000).toFixed(9));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'nanometer' && lengthTwo === 'foot') {
            if (value !== '') {
                setLengthResult((Number(value) * 304800000).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'nanometer' && lengthTwo === 'inch') {
            if (value !== '') {
                setLengthResult((Number(value) / 25400000).toFixed(8));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'mile' && lengthTwo === 'kilometer') {
            if (value !== '') {
                setLengthResult((Number(value) * 1.609).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'mile' && lengthTwo === 'meter') {
            if (value !== '') {
                setLengthResult((Number(value) * 1609).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'mile' && lengthTwo === 'centimeter') {
            if (value !== '') {
                setLengthResult((Number(value) * 160934).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'mile' && lengthTwo === 'millimeter') {
            if (value !== '') {
                setLengthResult((Number(value) * 1609000).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'mile' && lengthTwo === 'nanometer') {
            if (value !== '') {
                setLengthResult((Number(value) * 1609000000000).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'mile' && lengthTwo === 'yard') {
            if (value !== '') {
                setLengthResult((Number(value) * 1760).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'mile' && lengthTwo === 'foot') {
            if (value !== '') {
                setLengthResult((Number(value) * 5280).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'mile' && lengthTwo === 'inch') {
            if (value !== '') {
                setLengthResult((Number(value) * 63360).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'yard' && lengthTwo === 'kilometer') {
            if (value !== '') {
                setLengthResult((Number(value) / 1094).toFixed(4));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'yard' && lengthTwo === 'meter') {
            if (value !== '') {
                setLengthResult((Number(value) / 1.094).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'yard' && lengthTwo === 'centimeter') {
            if (value !== '') {
                setLengthResult((Number(value) * 91.44).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'yard' && lengthTwo === 'millimeter') {
            if (value !== '') {
                setLengthResult((Number(value) * 914).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'yard' && lengthTwo === 'nanometer') {
            if (value !== '') {
                setLengthResult((Number(value) * 914400000).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'yard' && lengthTwo === 'mile') {
            if (value !== '') {
                setLengthResult((Number(value) / 1760).toFixed(4));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'yard' && lengthTwo === 'foot') {
            if (value !== '') {
                setLengthResult((Number(value) * 3).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'yard' && lengthTwo === 'inch') {
            if (value !== '') {
                setLengthResult((Number(value) * 36).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'foot' && lengthTwo === 'kilometer') {
            if (value !== '') {
                setLengthResult((Number(value) / 3281).toFixed(4));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'foot' && lengthTwo === 'meter') {
            if (value !== '') {
                setLengthResult((Number(value) / 3.281).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'foot' && lengthTwo === 'centimeter') {
            if (value !== '') {
                setLengthResult((Number(value) * 30.48).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'foot' && lengthTwo === 'millimeter') {
            if (value !== '') {
                setLengthResult((Number(value) * 305).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'foot' && lengthTwo === 'nanometer') {
            if (value !== '') {
                setLengthResult((Number(value) * 304800000).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'foot' && lengthTwo === 'mile') {
            if (value !== '') {
                setLengthResult((Number(value) / 5280).toFixed(4));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'foot' && lengthTwo === 'yard') {
            if (value !== '') {
                setLengthResult((Number(value) / 3).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'foot' && lengthTwo === 'inch') {
            if (value !== '') {
                setLengthResult((Number(value) * 12).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'inch' && lengthTwo === 'kilometer') {
            if (value !== '') {
                setLengthResult((Number(value) / 39370).toFixed(5));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'inch' && lengthTwo === 'meter') {
            if (value !== '') {
                setLengthResult((Number(value) / 39.37).toFixed(2));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'inch' && lengthTwo === 'centimeter') {
            if (value !== '') {
                setLengthResult((Number(value) * 2.54).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'inch' && lengthTwo === 'millimeter') {
            if (value !== '') {
                setLengthResult((Number(value) * 25.4).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'inch' && lengthTwo === 'nanometer') {
            if (value !== '') {
                setLengthResult((Number(value) * 25400000).toFixed(1));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'inch' && lengthTwo === 'mile') {
            if (value !== '') {
                setLengthResult((Number(value) / 63360).toFixed(5));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'inch' && lengthTwo === 'yard') {
            if (value !== '') {
                setLengthResult((Number(value) / 36).toFixed(2));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === 'inch' && lengthTwo === 'foot') {
            if (value !== '') {
                setLengthResult((Number(value) / 12).toFixed(2));
            } else {
                setLengthResult('');
            }
        } else if (lengthOne === lengthTwo) {
            if (value !== '') {
                setLengthResult(Number(value));
            } else {
                setLengthResult('');
            }
        } else {
            if (value !== '') {
                setLengthResult((Number(value) * 100).toFixed(1));
            } else {
                setLengthResult('');
            };
        };
    };

    const onChangeLength = (value) => {
        resultLength(value);
    };

    const clearLength = () => {
        setLengthResult(0);
        lengthInput.clear();
    };

    return (
        <View style={Styles.lengthContainer}>
            <Statusbar />
            <Title />
            <Caption />
            <LengthTextInput onChangeLength={onChangeLength} setLengthInput={setLengthInput} />
            <LengthPicker
                lengthOne={lengthOne} setLengthOne={setLengthOne}
                lengthTwo={lengthTwo} setLengthTwo={setLengthTwo} />
            <Button clearLength={clearLength} />
            <Result lengthResult={lengthResult} />
            <BackToHome setScreenHome={setScreenHome} />
        </View>
    );
};
