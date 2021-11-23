import React, { useState } from 'react';
import { View } from 'react-native';
import Statusbar from '../Statusbar/Statusbar';
import Title from '../Title/Title';
import Caption from '../../../components/Caption/Caption';
import AreaTextInput from '../AreaTextInput/AreaTextInput';
import AreaPicker from '../Picker/AreaPicker';
import Button from '../Button/Button';
import Result from '../Result/Result';
import BackToHome from '../../../components/BackToHome/BackToHome';
import Styles from './Styles';

export default function Area({ setScreen }) {
    const [areaOne, setAreaOne] = useState('squareMeter');
    const [areaTwo, setAreaTwo] = useState('squareKilometer');
    const [areaInput, setAreaInput] = useState('');
    const [areaResult, setAreaResult] = useState(0);

    const setScreenHome = () => {
        setScreen('home');
        setAreaResult(0);
        setAreaOne('squareMeter');
        setAreaTwo('squareKilometer');
    };

    const resultArea = (value) => {
        if (areaOne === 'squareMeter' && areaTwo === 'squareMile') {
            if (value !== '') {
                setAreaResult((Number(value) / 2590000).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareMeter' && areaTwo === 'squareYard') {
            if (value !== '') {
                setAreaResult((Number(value) * 1.196).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareMeter' && areaTwo === 'squareFoot') {
            if (value !== '') {
                setAreaResult((Number(value) * 10.764).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareMeter' && areaTwo === 'squareInch') {
            if (value !== '') {
                setAreaResult((Number(value) * 1550).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareMeter' && areaTwo === 'hectare') {
            if (value !== '') {
                setAreaResult((Number(value) / 10000).toFixed(4));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareMeter' && areaTwo === 'acre') {
            if (value !== '') {
                setAreaResult((Number(value) / 4047).toFixed(4));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareKilometer' && areaTwo === 'squareMeter') {
            if (value !== '') {
                setAreaResult((Number(value) * 1000000).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareKilometer' && areaTwo === 'squareMile') {
            if (value !== '') {
                setAreaResult((Number(value) / 2.59).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareKilometer' && areaTwo === 'squareYard') {
            if (value !== '') {
                setAreaResult((Number(value) * 1196000).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareKilometer' && areaTwo === 'squareFoot') {
            if (value !== '') {
                setAreaResult((Number(value) * 10760000).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareKilometer' && areaTwo === 'squareInch') {
            if (value !== '') {
                setAreaResult((Number(value) * 1550000000).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareKilometer' && areaTwo === 'hectare') {
            if (value !== '') {
                setAreaResult((Number(value) * 100).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareKilometer' && areaTwo === 'acre') {
            if (value !== '') {
                setAreaResult((Number(value) * 247).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareMile' && areaTwo === 'squareKilometer') {
            if (value !== '') {
                setAreaResult((Number(value) * 2.59).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareMile' && areaTwo === 'squareMeter') {
            if (value !== '') {
                setAreaResult((Number(value) * 2590000).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareMile' && areaTwo === 'squareYard') {
            if (value !== '') {
                setAreaResult((Number(value) * 3098000).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareMile' && areaTwo === 'squareFoot') {
            if (value !== '') {
                setAreaResult((Number(value) * 27880000).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareMile' && areaTwo === 'squareInch') {
            if (value !== '') {
                setAreaResult((Number(value) * 4014000000).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareMile' && areaTwo === 'hectare') {
            if (value !== '') {
                setAreaResult((Number(value) * 259).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareMile' && areaTwo === 'acre') {
            if (value !== '') {
                setAreaResult((Number(value) * 640).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareYard' && areaTwo === 'squareKilometer') {
            if (value !== '') {
                setAreaResult((Number(value) / 1196000).toFixed(6));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareYard' && areaTwo === 'squareMeter') {
            if (value !== '') {
                setAreaResult((Number(value) / 1.196).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareYard' && areaTwo === 'squareMile') {
            if (value !== '') {
                setAreaResult((Number(value) / 3098000).toFixed(7));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareYard' && areaTwo === 'squareFoot') {
            if (value !== '') {
                setAreaResult((Number(value) * 9).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareYard' && areaTwo === 'squareInch') {
            if (value !== '') {
                setAreaResult((Number(value) * 1296).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareYard' && areaTwo === 'hectare') {
            if (value !== '') {
                setAreaResult((Number(value) / 11960).toFixed(4));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareYard' && areaTwo === 'acre') {
            if (value !== '') {
                setAreaResult((Number(value) / 4840).toFixed(4));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareFoot' && areaTwo === 'squareKilometer') {
            if (value !== '') {
                setAreaResult((Number(value) / 10760000).toFixed(7));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareFoot' && areaTwo === 'squareMeter') {
            if (value !== '') {
                setAreaResult((Number(value) / 10.764).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareFoot' && areaTwo === 'squareMile') {
            if (value !== '') {
                setAreaResult((Number(value) / 27880000).toFixed(8));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareFoot' && areaTwo === 'squareYard') {
            if (value !== '') {
                setAreaResult((Number(value) / 9).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareFoot' && areaTwo === 'squareInch') {
            if (value !== '') {
                setAreaResult((Number(value) * 144).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareFoot' && areaTwo === 'hectare') {
            if (value !== '') {
                setAreaResult((Number(value) / 107639).toFixed(6));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareFoot' && areaTwo === 'acre') {
            if (value !== '') {
                setAreaResult((Number(value) / 43560).toFixed(5));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareInch' && areaTwo === 'squareKilometer') {
            if (value !== '') {
                setAreaResult((Number(value) / 1550000000).toFixed(9));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareInch' && areaTwo === 'squareMeter') {
            if (value !== '') {
                setAreaResult((Number(value) / 1550).toFixed(4));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareInch' && areaTwo === 'squareMile') {
            if (value !== '') {
                setAreaResult((Number(value) / 4014000000).toFixed(10));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareInch' && areaTwo === 'squareYard') {
            if (value !== '') {
                setAreaResult((Number(value) / 1296).toFixed(4));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareInch' && areaTwo === 'squareFoot') {
            if (value !== '') {
                setAreaResult((Number(value) / 144).toFixed(3));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareInch' && areaTwo === 'hectare') {
            if (value !== '') {
                setAreaResult((Number(value) / 15500000).toFixed(7));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'squareInch' && areaTwo === 'acre') {
            if (value !== '') {
                setAreaResult((Number(value) / 6273000).toFixed(7));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'hectare' && areaTwo === 'squareKilometer') {
            if (value !== '') {
                setAreaResult((Number(value) / 100).toFixed(2));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'hectare' && areaTwo === 'squareMeter') {
            if (value !== '') {
                setAreaResult((Number(value) * 10000).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'hectare' && areaTwo === 'squareMile') {
            if (value !== '') {
                setAreaResult((Number(value) / 259).toFixed(3));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'hectare' && areaTwo === 'squareYard') {
            if (value !== '') {
                setAreaResult((Number(value) * 11960).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'hectare' && areaTwo === 'squareFoot') {
            if (value !== '') {
                setAreaResult((Number(value) * 107639).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'hectare' && areaTwo === 'squareInch') {
            if (value !== '') {
                setAreaResult((Number(value) * 15500000).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'hectare' && areaTwo === 'acre') {
            if (value !== '') {
                setAreaResult((Number(value) * 2.471).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'acre' && areaTwo === 'squareKilometer') {
            if (value !== '') {
                setAreaResult((Number(value) / 247).toFixed(3));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'acre' && areaTwo === 'squareMeter') {
            if (value !== '') {
                setAreaResult((Number(value) * 4047).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'acre' && areaTwo === 'squareMile') {
            if (value !== '') {
                setAreaResult((Number(value) / 640).toFixed(3));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'acre' && areaTwo === 'squareYard') {
            if (value !== '') {
                setAreaResult((Number(value) * 4840).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'acre' && areaTwo === 'squareFoot') {
            if (value !== '') {
                setAreaResult((Number(value) * 43560).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'acre' && areaTwo === 'squareInch') {
            if (value !== '') {
                setAreaResult((Number(value) * 6273000).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === 'acre' && areaTwo === 'hectare') {
            if (value !== '') {
                setAreaResult((Number(value) / 2.471).toFixed(1));
            } else {
                setAreaResult('');
            }
        } else if (areaOne === areaTwo) {
            if (value !== '') {
                setAreaResult(Number(value));
            } else {
                setAreaResult('');
            }
        } else {
            if (value !== '') {
                setAreaResult((Number(value) / 1000000).toFixed(6));
            } else {
                setAreaResult('');
            };
        };
    };

    const onChangeArea = (value) => {
        resultArea(value);
    };

    const clearArea = () => {
        setAreaResult(0);
        areaInput.clear();
    };

    return (
        <View style={Styles.areaContainer}>
            <Statusbar />
            <Title />
            <Caption />
            <AreaTextInput onChangeArea={onChangeArea} setAreaInput={setAreaInput} />
            <AreaPicker areaOne={areaOne} setAreaOne={setAreaOne} areaTwo={areaTwo} setAreaTwo={setAreaTwo} />
            <Button clearArea={clearArea} />
            <Result areaResult={areaResult} />
            <BackToHome setScreenHome={setScreenHome} />
        </View>
    );
};
