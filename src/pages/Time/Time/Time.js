import React, { useState } from 'react';
import { View } from 'react-native';
import Statusbar from '../Statusbar/Statusbar';
import Title from '../Title/Title';
import Caption from '../../../components/Caption/Caption';
import TimeTextInput from '../TextInput/TimeTextInput';
import TimePicker from '../Picker/TimePicker';
import Button from '../Button/Button';
import Result from '../Result/Result';
import BackToHome from '../../../components/BackToHome/BackToHome';
import Styles from './Styles';

export default function Time({ setScreen }) {
    const [timeOne, setTimeOne] = useState('second');
    const [timeTwo, setTimeTwo] = useState('minute');
    const [timeInput, setTimeInput] = useState('');
    const [timeResult, setTimeResult] = useState(0);

    const setScreenHome = () => {
        setScreen('home');
        setTimeResult(0);
        setTimeOne('second');
        setTimeTwo('minute');
    };

    const resultTime = (value) => {
        if (timeOne === 'second' && timeTwo === 'hour') {
            if (value !== '') {
                setTimeResult((Number(value) / 3600).toFixed(4));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'second' && timeTwo === 'day') {
            if (value !== '') {
                setTimeResult((Number(value) / 86400).toFixed(5));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'second' && timeTwo === 'week') {
            if (value !== '') {
                setTimeResult((Number(value) / 604800).toFixed(6));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'second' && timeTwo === 'month') {
            if (value !== '') {
                setTimeResult((Number(value) / 2628000).toFixed(7));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'second' && timeTwo === 'year') {
            if (value !== '') {
                setTimeResult((Number(value) / 31540000).toFixed(8));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'second' && timeTwo === 'decade') {
            if (value !== '') {
                setTimeResult((Number(value) / 315400000).toFixed(9));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'second' && timeTwo === 'century') {
            if (value !== '') {
                setTimeResult((Number(value) / 3154000000).toFixed(10));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'minute' && timeTwo === 'second') {
            if (value !== '') {
                setTimeResult((Number(value) * 60).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'minute' && timeTwo === 'hour') {
            if (value !== '') {
                setTimeResult((Number(value) / 60).toFixed(2));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'minute' && timeTwo === 'day') {
            if (value !== '') {
                setTimeResult((Number(value) / 1440).toFixed(4));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'minute' && timeTwo === 'week') {
            if (value !== '') {
                setTimeResult((Number(value) / 10080).toFixed(4));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'minute' && timeTwo === 'month') {
            if (value !== '') {
                setTimeResult((Number(value) / 43800).toFixed(5));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'minute' && timeTwo === 'year') {
            if (value !== '') {
                setTimeResult((Number(value) / 525600).toFixed(6));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'minute' && timeTwo === 'decade') {
            if (value !== '') {
                setTimeResult((Number(value) / 5256000).toFixed(7));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'minute' && timeTwo === 'century') {
            if (value !== '') {
                setTimeResult((Number(value) / 52560000).toFixed(8));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'hour' && timeTwo === 'second') {
            if (value !== '') {
                setTimeResult((Number(value) * 3600).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'hour' && timeTwo === 'minute') {
            if (value !== '') {
                setTimeResult((Number(value) * 60).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'hour' && timeTwo === 'day') {
            if (value !== '') {
                setTimeResult((Number(value) / 24).toFixed(2));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'hour' && timeTwo === 'week') {
            if (value !== '') {
                setTimeResult((Number(value) / 168).toFixed(3));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'hour' && timeTwo === 'month') {
            if (value !== '') {
                setTimeResult((Number(value) / 730).toFixed(3));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'hour' && timeTwo === 'year') {
            if (value !== '') {
                setTimeResult((Number(value) / 8760).toFixed(4));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'hour' && timeTwo === 'decade') {
            if (value !== '') {
                setTimeResult((Number(value) / 87600).toFixed(5));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'hour' && timeTwo === 'century') {
            if (value !== '') {
                setTimeResult((Number(value) / 876000).toFixed(6));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'day' && timeTwo === 'second') {
            if (value !== '') {
                setTimeResult((Number(value) * 86400).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'day' && timeTwo === 'minute') {
            if (value !== '') {
                setTimeResult((Number(value) * 1440).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'day' && timeTwo === 'hour') {
            if (value !== '') {
                setTimeResult((Number(value) * 24).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'day' && timeTwo === 'week') {
            if (value !== '') {
                setTimeResult((Number(value) / 7).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'day' && timeTwo === 'month') {
            if (value !== '') {
                setTimeResult((Number(value) / 30.417).toFixed(2));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'day' && timeTwo === 'year') {
            if (value !== '') {
                setTimeResult((Number(value) / 365).toFixed(3));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'day' && timeTwo === 'decade') {
            if (value !== '') {
                setTimeResult((Number(value) / 3650).toFixed(4));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'day' && timeTwo === 'century') {
            if (value !== '') {
                setTimeResult((Number(value) / 36500).toFixed(5));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'week' && timeTwo === 'second') {
            if (value !== '') {
                setTimeResult((Number(value) * 604800).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'week' && timeTwo === 'minute') {
            if (value !== '') {
                setTimeResult((Number(value) * 10080).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'week' && timeTwo === 'hour') {
            if (value !== '') {
                setTimeResult((Number(value) * 168).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'week' && timeTwo === 'day') {
            if (value !== '') {
                setTimeResult((Number(value) * 7).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'week' && timeTwo === 'month') {
            if (value !== '') {
                setTimeResult((Number(value) / 4.345).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'week' && timeTwo === 'year') {
            if (value !== '') {
                setTimeResult((Number(value) / 52.143).toFixed(2));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'week' && timeTwo === 'decade') {
            if (value !== '') {
                setTimeResult((Number(value) / 521).toFixed(3));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'week' && timeTwo === 'century') {
            if (value !== '') {
                setTimeResult((Number(value) / 5214).toFixed(4));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'month' && timeTwo === 'second') {
            if (value !== '') {
                setTimeResult((Number(value) * 2628000).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'month' && timeTwo === 'minute') {
            if (value !== '') {
                setTimeResult((Number(value) * 43800).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'month' && timeTwo === 'hour') {
            if (value !== '') {
                setTimeResult((Number(value) * 730).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'month' && timeTwo === 'day') {
            if (value !== '') {
                setTimeResult((Number(value) * 30.417).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'month' && timeTwo === 'week') {
            if (value !== '') {
                setTimeResult((Number(value) * 4.345).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'month' && timeTwo === 'year') {
            if (value !== '') {
                setTimeResult((Number(value) / 12).toFixed(2));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'month' && timeTwo === 'decade') {
            if (value !== '') {
                setTimeResult((Number(value) / 120).toFixed(3));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'month' && timeTwo === 'century') {
            if (value !== '') {
                setTimeResult((Number(value) / 1200).toFixed(4));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'year' && timeTwo === 'second') {
            if (value !== '') {
                setTimeResult((Number(value) * 31540000).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'year' && timeTwo === 'minute') {
            if (value !== '') {
                setTimeResult((Number(value) * 525600).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'year' && timeTwo === 'hour') {
            if (value !== '') {
                setTimeResult((Number(value) * 8760).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'year' && timeTwo === 'day') {
            if (value !== '') {
                setTimeResult((Number(value) * 365).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'year' && timeTwo === 'week') {
            if (value !== '') {
                setTimeResult((Number(value) * 52.143).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'year' && timeTwo === 'month') {
            if (value !== '') {
                setTimeResult((Number(value) * 12).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'year' && timeTwo === 'decade') {
            if (value !== '') {
                setTimeResult((Number(value) / 10).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'year' && timeTwo === 'century') {
            if (value !== '') {
                setTimeResult((Number(value) / 100).toFixed(2));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'decade' && timeTwo === 'second') {
            if (value !== '') {
                setTimeResult((Number(value) * 315400000).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'decade' && timeTwo === 'minute') {
            if (value !== '') {
                setTimeResult((Number(value) * 5656000).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'decade' && timeTwo === 'hour') {
            if (value !== '') {
                setTimeResult((Number(value) * 87600).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'decade' && timeTwo === 'day') {
            if (value !== '') {
                setTimeResult((Number(value) * 3650).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'decade' && timeTwo === 'week') {
            if (value !== '') {
                setTimeResult((Number(value) * 521).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'decade' && timeTwo === 'month') {
            if (value !== '') {
                setTimeResult((Number(value) * 120).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'decade' && timeTwo === 'year') {
            if (value !== '') {
                setTimeResult((Number(value) * 10).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'decade' && timeTwo === 'century') {
            if (value !== '') {
                setTimeResult((Number(value) / 10).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'century' && timeTwo === 'second') {
            if (value !== '') {
                setTimeResult((Number(value) * 3154000000).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'century' && timeTwo === 'minute') {
            if (value !== '') {
                setTimeResult((Number(value) * 52560000).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'century' && timeTwo === 'hour') {
            if (value !== '') {
                setTimeResult((Number(value) * 87600).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'century' && timeTwo === 'day') {
            if (value !== '') {
                setTimeResult((Number(value) * 36500).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'century' && timeTwo === 'week') {
            if (value !== '') {
                setTimeResult((Number(value) * 5214).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'century' && timeTwo === 'month') {
            if (value !== '') {
                setTimeResult((Number(value) * 1200).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'century' && timeTwo === 'year') {
            if (value !== '') {
                setTimeResult((Number(value) * 100).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === 'century' && timeTwo === 'decade') {
            if (value !== '') {
                setTimeResult((Number(value) * 10).toFixed(1));
            } else {
                setTimeResult('');
            }
        } else if (timeOne === timeTwo) {
            if (value !== '') {
                setTimeResult(Number(value));
            } else {
                setTimeResult('');
            }
        } else {
            if (value !== '') {
                setTimeResult((Number(value) / 60).toFixed(2));
            } else {
                setTimeResult('');
            };
        };
    };

    const onChangeTime = (value) => {
        resultTime(value);
    };

    const clearTime = () => {
        setTimeResult(0);
        timeInput.clear();
    };


    return (
        <View style={Styles.timeContainer}>
            <Statusbar />
            <Title />
            <Caption />
            <TimeTextInput onChangeTime={onChangeTime} setTimeInput={setTimeInput} />
            <TimePicker timeOne={timeOne} setTimeOne={setTimeOne} timeTwo={timeTwo} setTimeTwo={setTimeTwo} />
            <Button clearTime={clearTime} />
            <Result timeResult={timeResult} />
            <BackToHome setScreenHome={setScreenHome} />
        </View>
    );
};
