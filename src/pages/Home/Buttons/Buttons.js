import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

export default function Buttons({ setScreenArea, setScreenDigitalStorage, setScreenFrequency, setScreenLength, setScreenMass, setScreenSpeed, setScreenTemperature, setScreenTime }) {
    return (
        <>
            <View style={Styles.homeButtonsContainer}>
                <TouchableOpacity onPress={setScreenArea} style={Styles.homeButtonArea}>
                    <Text style={Styles.homeButtonsText}>Area</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={setScreenDigitalStorage} style={Styles.homeButtonDigitalStorage}>
                    <Text style={Styles.homeButtonsText}>Digital Storage</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.homeButtonsContainer}>
                <TouchableOpacity onPress={setScreenFrequency} style={Styles.homeButtonFrequency}>
                    <Text style={Styles.homeButtonsText}>Frequency</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={setScreenLength} style={Styles.homeButtonLenght}>
                    <Text style={Styles.homeButtonsText}>Length</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.homeButtonsContainer}>
                <TouchableOpacity onPress={setScreenMass} style={Styles.homeButtonMass}>
                    <Text style={Styles.homeButtonsText}>Mass</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={setScreenSpeed} style={Styles.homeButtonSpeed}>
                    <Text style={Styles.homeButtonsText}>Speed</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.homeButtonsContainer}>
                <TouchableOpacity onPress={setScreenTemperature} style={Styles.homeButtonTemperature}>
                    <Text style={Styles.homeButtonsText}>Temperature</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={setScreenTime} style={Styles.homeButtonTime}>
                    <Text style={Styles.homeButtonsText}>Time</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};
