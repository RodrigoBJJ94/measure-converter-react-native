import React from 'react';
import { View } from 'react-native';
import Statusbar from '../Statusbar/Statusbar';
import Title from '../Title/Title';
import Buttons from '../Buttons/Buttons';
import Styles from './Styles';

export default function Home({ setScreen }) {
    const setScreenArea = () => {
        setScreen('area');
    };

    const setScreenDigitalStorage = () => {
        setScreen('digitalStorage');
    };

    const setScreenFrequency = () => {
        setScreen('frequency');
    };

    const setScreenLength = () => {
        setScreen('length');
    };

    const setScreenMass = () => {
        setScreen('mass');
    };

    const setScreenSpeed = () => {
        setScreen('speed');
    };

    const setScreenTemperature = () => {
        setScreen('temperature');
    };

    const setScreenTime = () => {
        setScreen('time');
    };

    return (
        <View style={Styles.homeContainer}>
            <Statusbar />
            <Title />
            <Buttons
                setScreenArea={setScreenArea} setScreenDigitalStorage={setScreenDigitalStorage}
                setScreenFrequency={setScreenFrequency} setScreenLength={setScreenLength} setScreenMass={setScreenMass}
                setScreenSpeed={setScreenSpeed} setScreenTemperature={setScreenTemperature} setScreenTime={setScreenTime} />
        </View>
    );
};
