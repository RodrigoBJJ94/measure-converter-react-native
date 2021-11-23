import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Home from './pages/Home/Home/Home';
import Area from './pages/Area/Area/Area';
import DigitalStorage from './pages/DigitalStorage/DigitalStorage/DigitalStorage';
import Frequency from './pages/Frequency/Frequency/Frequency';
import Lenght from './pages/Length/Length/Length';
import Mass from './pages/Speed/Mass/Mass';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [temperatureOne, setTemperatureOne] = useState('celsius');
  const [temperatureTwo, setTemperatureTwo] = useState('fahrenheit');
  const [temperatureInput, setTemperatureInput] = useState('');
  const [temperatureResult, setTemperatureResult] = useState(0);
  const [speedOne, setSpeedOne] = useState('meterPerSecond');
  const [speedTwo, setSpeedTwo] = useState('kilometerPerHour');
  const [speedInput, setSpeedInput] = useState('');
  const [speedResult, setSpeedResult] = useState(0);
  const [timeOne, setTimeOne] = useState('second');
  const [timeTwo, setTimeTwo] = useState('minute');
  const [timeInput, setTimeInput] = useState('');
  const [timeResult, setTimeResult] = useState(0);


  if (screen === 'home') {
    return getScreenMenu();
  } else if (screen === 'area') {
    return getScreenArea();
  } else if (screen === 'digitalStorage') {
    return getScreenDigitalStorage();
  } else if (screen === 'frequency') {
    return getScreenFrequency();
  } else if (screen === 'length') {
    return getScreenLength();
  } else if (screen === 'mass') {
    return getScreenMass();
  } else if (screen === 'speed') {
    return getScreenSpeed();
  } else if (screen === 'temperature') {
    return getScreenTemperature();
  } else if (screen === 'time') {
    return getScreenTime();
  };

  function getScreenMenu() {
    return <Home setScreen={setScreen} />
  };

  function getScreenArea() {
    return <Area setScreen={setScreen} />
  };

  function getScreenDigitalStorage() {
    return <DigitalStorage setScreen={setScreen} />
  };

  function getScreenFrequency() {
    return <Frequency setScreen={setScreen} />
  };

  function getScreenLength() {
    return <Lenght setScreen={setScreen} />
  };

  function getScreenMass() {
    return <Mass setScreen={setScreen} />
  };

  function getScreenSpeed() {
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
        <StatusBar backgroundColor="#00154d" />
        <Text style={Styles.speedTitle}>Speed</Text>
        <Text style={Styles.speedCaption}>Select the first measurement</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeSpeed} ref={input => setSpeedInput(input)} style={Styles.speedTextInput} />
        <Picker selectedValue={speedOne} onValueChange={(itemValue) => setSpeedOne(itemValue)} style={Styles.speedPicker}>
          <Picker.Item label="Meter per Second" value="meterPerSecond" />
          <Picker.Item label="Miles per Hour" value="milesPerHour" />
          <Picker.Item label="Foot per Second" value="footPerSecond" />
          <Picker.Item label="Kilometer per Hour" value="kilometerPerHour" />
          <Picker.Item label="Knot" value="knot" />
        </Picker>
        <Picker selectedValue={speedTwo} onValueChange={(itemValue) => setSpeedTwo(itemValue)} style={Styles.speedPicker}>
          <Picker.Item label="Meter per Second" value="meterPerSecond" />
          <Picker.Item label="Miles per Hour" value="milesPerHour" />
          <Picker.Item label="Foot per Second" value="footPerSecond" />
          <Picker.Item label="Kilometer per Hour" value="kilometerPerHour" />
          <Picker.Item label="Knot" value="knot" />
        </Picker>
        <TouchableOpacity onPress={clearSpeed} style={Styles.speedButtonClear}>
          <Text style={Styles.speedButtonClearText}>Clear</Text>
        </TouchableOpacity>
        <Text style={Styles.speedResult}>{speedResult !== 0 ? 'The result is: ' : ''}{speedResult !== 0 ? speedResult : ''}</Text>
        <TouchableOpacity onPress={setScreenHome} style={Styles.backToHomeButton}>
          <Text style={Styles.backToHomeButtonText}>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function getScreenTemperature() {
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
        <StatusBar backgroundColor="#000536" />
        <Text style={Styles.temperatureTitle}>Temperature</Text>
        <Text style={Styles.temperatureCaption}>Select the first measurement</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeTemperature} ref={input => setTemperatureInput(input)} style={Styles.temperatureTextInput} />
        <Picker selectedValue={temperatureOne} onValueChange={(itemValue) => setTemperatureOne(itemValue)} style={Styles.temperaturePicker}>
          <Picker.Item label="Celsius" value="celsius" />
          <Picker.Item label="Fahrenheit" value="fahrenheit" />
          <Picker.Item label="Kelvin" value="kelvin" />
        </Picker>
        <Picker selectedValue={temperatureTwo} onValueChange={(itemValue) => setTemperatureTwo(itemValue)} style={Styles.temperaturePicker}>
          <Picker.Item label="Fahrenheit" value="fahrenheit" />
          <Picker.Item label="Celsius" value="celsius" />
          <Picker.Item label="Kelvin" value="kelvin" />
        </Picker>
        <TouchableOpacity onPress={clearTemperature} style={Styles.temperatureButtonClear}>
          <Text style={Styles.temperatureButtonClearText}>Clear</Text>
        </TouchableOpacity>
        <Text style={Styles.temperatureResult}>{temperatureResult !== 0 ? 'The result is: ' : ''}{temperatureResult !== 0 ? temperatureResult : ''}</Text>
        <TouchableOpacity onPress={setScreenHome} style={Styles.backToHomeButton}>
          <Text style={Styles.backToHomeButtonText}>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function getScreenTime() {
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
        <StatusBar backgroundColor="#000536" />
        <Text style={Styles.timeTitle}>Time</Text>
        <Text style={Styles.timeCaption}>Select the first measurement</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeTime} ref={input => setTimeInput(input)} style={Styles.timeTextInput} />
        <Picker selectedValue={timeOne} onValueChange={(itemValue) => setTimeOne(itemValue)} style={Styles.timePicker}>
          <Picker.Item label="Second" value="second" />
          <Picker.Item label="Minute" value="minute" />
          <Picker.Item label="Hour" value="hour" />
          <Picker.Item label="Day" value="day" />
          <Picker.Item label="Week" value="week" />
          <Picker.Item label="Month" value="month" />
          <Picker.Item label="Year" value="year" />
          <Picker.Item label="Decade" value="decade" />
          <Picker.Item label="Century" value="century" />
        </Picker>
        <Picker selectedValue={timeTwo} onValueChange={(itemValue) => setTimeTwo(itemValue)} style={Styles.timePicker}>
          <Picker.Item label="Second" value="second" />
          <Picker.Item label="Minute" value="minute" />
          <Picker.Item label="Hour" value="hour" />
          <Picker.Item label="Day" value="day" />
          <Picker.Item label="Week" value="week" />
          <Picker.Item label="Month" value="month" />
          <Picker.Item label="Year" value="year" />
          <Picker.Item label="Decade" value="decade" />
          <Picker.Item label="Century" value="century" />
        </Picker>
        <TouchableOpacity onPress={clearTime} style={Styles.timeButtonClear}>
          <Text style={Styles.timeButtonClearText}>Clear</Text>
        </TouchableOpacity>
        <Text style={Styles.timeResult}>{timeResult !== 0 ? 'The result is: ' : ''}{timeResult !== 0 ? timeResult : ''}</Text>
        <TouchableOpacity onPress={setScreenHome} style={Styles.backToHomeButton}>
          <Text style={Styles.backToHomeButtonText}>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  };
};

const Styles = StyleSheet.create({






  speedContainer: {
    flex: 1,
    backgroundColor: '#00154d',
  },
  speedTitle: {
    fontSize: 60,
    fontFamily: 'Montserrat-ExtraBold',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  speedTextInput: {
    backgroundColor: '#ffffff',
    width: Dimensions.get('screen').width / 1.2,
    alignSelf: 'center',
    paddingLeft: 15,
    fontSize: 18,
    marginBottom: 20,
    marginTop: 15,
    borderRadius: 3,
    fontFamily: 'Montserrat-Bold',
  },
  speedPicker: {
    color: '#ffffff',
  },
  speedButtonClear: {
    width: Dimensions.get('screen').width / 4.5,
    backgroundColor: '#000000',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    borderRadius: 15,
    marginTop: 5,
  },
  speedButtonClearText: {
    color: '#ffffff',
    fontSize: 22,
    fontFamily: 'Montserrat-ExtraBold',
  },
  speedResult: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    paddingLeft: 15,
    marginTop: 40,
    marginBottom: 112,
    alignSelf: 'center',
  },
  temperatureContainer: {
    flex: 1,
    backgroundColor: '#000536',
  },
  temperatureTitle: {
    fontSize: 48,
    fontFamily: 'Montserrat-ExtraBold',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 60,
  },
  temperatureTextInput: {
    backgroundColor: '#ffffff',
    width: Dimensions.get('screen').width / 1.2,
    alignSelf: 'center',
    paddingLeft: 15,
    fontSize: 18,
    marginBottom: 20,
    marginTop: 15,
    borderRadius: 3,
    fontFamily: 'Montserrat-Bold',
  },
  temperaturePicker: {
    color: '#ffffff',
  },
  temperatureButtonClear: {
    width: Dimensions.get('screen').width / 4.5,
    backgroundColor: '#000000',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    borderRadius: 15,
    marginTop: 5,
  },
  temperatureButtonClearText: {
    color: '#ffffff',
    fontSize: 22,
    fontFamily: 'Montserrat-ExtraBold',
  },
  temperatureResult: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    paddingLeft: 15,
    marginTop: 40,
    marginBottom: 108,
    alignSelf: 'center',
  },
  timeContainer: {
    flex: 1,
    backgroundColor: '#000536',
  },
  timeTitle: {
    fontSize: 60,
    fontFamily: 'Montserrat-ExtraBold',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  timeTextInput: {
    backgroundColor: '#ffffff',
    width: Dimensions.get('screen').width / 1.2,
    alignSelf: 'center',
    paddingLeft: 15,
    fontSize: 18,
    marginBottom: 20,
    marginTop: 15,
    borderRadius: 3,
    fontFamily: 'Montserrat-Bold',
  },
  timePicker: {
    color: '#ffffff',
  },
  timeButtonClear: {
    width: Dimensions.get('screen').width / 4.5,
    backgroundColor: '#000000',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    borderRadius: 15,
    marginTop: 5,
  },
  timeButtonClearText: {
    color: '#ffffff',
    fontSize: 22,
    fontFamily: 'Montserrat-ExtraBold',
  },
  timeResult: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    paddingLeft: 15,
    marginTop: 40,
    marginBottom: 112,
    alignSelf: 'center',
  },
});
