import React, { useState } from 'react';
import { View } from 'react-native';
import Statusbar from '../Statusbar/Statusbar';
import Title from '../Title/Title';
import Caption from '../../../components/Caption/Caption';
import MassTextInput from '../TextInput/MassTextInput';
import MassPicker from '../Picker/MassPicker';
import Button from '../Button/Button';
import Result from '../Result/Result';
import BackToHome from '../../../components/BackToHome/BackToHome';
import Styles from './Styles';

export default function Mass({ setScreen }) {
    const [massOne, setMassOne] = useState('kilogram');
    const [massTwo, setMassTwo] = useState('gram');
    const [massInput, setMassInput] = useState('');
    const [massResult, setMassResult] = useState(0);

    const setScreenHome = () => {
        setScreen('home');
        setMassResult(0);
        setMassOne('kilogram');
        setMassTwo('gram');
    };

    const resultMass = (value) => {
        if (massOne === 'kilogram' && massTwo === 'tonne') {
            if (value !== '') {
                setMassResult((Number(value) / 1000).toFixed(3));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'kilogram' && massTwo === 'milligram') {
            if (value !== '') {
                setMassResult((Number(value) * 1000000).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'kilogram' && massTwo === 'microgram') {
            if (value !== '') {
                setMassResult((Number(value) * 1000000000).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'kilogram' && massTwo === 'pound') {
            if (value !== '') {
                setMassResult((Number(value) * 1550).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'kilogram' && massTwo === 'once') {
            if (value !== '') {
                setMassResult((Number(value) * 35.274).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'tonne' && massTwo === 'kilogram') {
            if (value !== '') {
                setMassResult((Number(value) * 1000).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'tonne' && massTwo === 'gram') {
            if (value !== '') {
                setMassResult((Number(value) * 1000000).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'tonne' && massTwo === 'milligram') {
            if (value !== '') {
                setMassResult((Number(value) * 1000000000).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'tonne' && massTwo === 'microgram') {
            if (value !== '') {
                setMassResult((Number(value) * 1000000000000).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'tonne' && massTwo === 'pound') {
            if (value !== '') {
                setMassResult((Number(value) * 2205).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'tonne' && massTwo === 'once') {
            if (value !== '') {
                setMassResult((Number(value) * 35274).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'gram' && massTwo === 'tonne') {
            if (value !== '') {
                setMassResult((Number(value) / 1000000).toFixed(6));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'gram' && massTwo === 'kilogram') {
            if (value !== '') {
                setMassResult((Number(value) / 1000).toFixed(3));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'gram' && massTwo === 'milligram') {
            if (value !== '') {
                setMassResult((Number(value) * 1000).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'gram' && massTwo === 'microgram') {
            if (value !== '') {
                setMassResult((Number(value) * 1000000).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'gram' && massTwo === 'pound') {
            if (value !== '') {
                setMassResult((Number(value) / 454).toFixed(3));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'gram' && massTwo === 'once') {
            if (value !== '') {
                setMassResult((Number(value) / 28.35).toFixed(2));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'milligram' && massTwo === 'tonne') {
            if (value !== '') {
                setMassResult((Number(value) / 1000000000).toFixed(9));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'milligram' && massTwo === 'kilogram') {
            if (value !== '') {
                setMassResult((Number(value) / 1000000).toFixed(6));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'milligram' && massTwo === 'gram') {
            if (value !== '') {
                setMassResult((Number(value) / 1000).toFixed(3));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'milligram' && massTwo === 'microgram') {
            if (value !== '') {
                setMassResult((Number(value) * 1000).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'milligram' && massTwo === 'pound') {
            if (value !== '') {
                setMassResult((Number(value) / 453592).toFixed(6));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'milligram' && massTwo === 'once') {
            if (value !== '') {
                setMassResult((Number(value) / 28350).toFixed(5));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'microgram' && massTwo === 'tonne') {
            if (value !== '') {
                setMassResult((Number(value) / 1000000000000).toFixed(12));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'microgram' && massTwo === 'kilogram') {
            if (value !== '') {
                setMassResult((Number(value) / 1000000000).toFixed(9));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'microgram' && massTwo === 'gram') {
            if (value !== '') {
                setMassResult((Number(value) / 1000000).toFixed(6));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'microgram' && massTwo === 'milligram') {
            if (value !== '') {
                setMassResult((Number(value) / 1000).toFixed(3));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'microgram' && massTwo === 'pound') {
            if (value !== '') {
                setMassResult((Number(value) / 453600000).toFixed(9));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'microgram' && massTwo === 'once') {
            if (value !== '') {
                setMassResult((Number(value) / 28350000).toFixed(8));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'pound' && massTwo === 'tonne') {
            if (value !== '') {
                setMassResult((Number(value) / 2205).toFixed(4));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'pound' && massTwo === 'kilogram') {
            if (value !== '') {
                setMassResult((Number(value) / 2.205).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'pound' && massTwo === 'gram') {
            if (value !== '') {
                setMassResult((Number(value) * 454).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'pound' && massTwo === 'milligram') {
            if (value !== '') {
                setMassResult((Number(value) * 453592).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'pound' && massTwo === 'microgram') {
            if (value !== '') {
                setMassResult((Number(value) * 453600000).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'pound' && massTwo === 'once') {
            if (value !== '') {
                setMassResult((Number(value) * 16).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'once' && massTwo === 'tonne') {
            if (value !== '') {
                setMassResult((Number(value) / 35274).toFixed(5));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'once' && massTwo === 'kilogram') {
            if (value !== '') {
                setMassResult((Number(value) / 35.274).toFixed(2));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'once' && massTwo === 'gram') {
            if (value !== '') {
                setMassResult((Number(value) * 28.35).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'once' && massTwo === 'milligram') {
            if (value !== '') {
                setMassResult((Number(value) * 28350).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'once' && massTwo === 'microgram') {
            if (value !== '') {
                setMassResult((Number(value) * 28350000).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === 'once' && massTwo === 'pound') {
            if (value !== '') {
                setMassResult((Number(value) / 16).toFixed(1));
            } else {
                setMassResult('');
            }
        } else if (massOne === massTwo) {
            if (value !== '') {
                setMassResult(Number(value));
            } else {
                setMassResult('');
            }
        } else {
            if (value !== '') {
                setMassResult((Number(value) * 1000).toFixed(1));
            } else {
                setMassResult('');
            };
        };
    };

    const onChangeMass = (value) => {
        resultMass(value);
    };

    const clearMass = () => {
        setMassResult(0);
        massInput.clear();
    };

    return (
        <View style={Styles.massContainer}>
            <Statusbar />
            <Title />
            <Caption />
            <MassTextInput onChangeMass={onChangeMass} setMassInput={setMassInput} />
            <MassPicker massOne={massOne} setMassOne={setMassOne} massTwo={massTwo} setMassTwo={setMassTwo} />
            <Button clearMass={clearMass} />
            <Result massResult={massResult} />
            <BackToHome setScreenHome={setScreenHome} />
        </View>
    );
};
