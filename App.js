import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [temperatureOne, setTemperatureOne] = useState('celsius');
  const [temperatureTwo, setTemperatureTwo] = useState('fahrenheit');
  const [temperatureInput, setTemperatureInput] = useState('');
  const [temperatureResult, setTemperatureResult] = useState(0);

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
      <View>
        <Text>Menu</Text>
        <TouchableOpacity onPress={setScreenArea}>
          <Text>Area</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={setScreenDigitalStorage}>
          <Text>Digital Storage</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={setScreenFrequency}>
          <Text>Frequency</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={setScreenLength}>
          <Text>Length</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={setScreenMass}>
          <Text>Mass</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={setScreenSpeed}>
          <Text>Speed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={setScreenTemperature}>
          <Text>Temperature</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={setScreenTime}>
          <Text>Time</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function getScreenArea() {
    const setScreenHome = () => {
      setScreen('home');
    };

    return (
      <View>
        <Text>Area</Text>
        <TouchableOpacity onPress={setScreenHome}>
          <Text>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function getScreenDigitalStorage() {
    const setScreenHome = () => {
      setScreen('home');
    };

    return (
      <View>
        <Text>Digital Storage</Text>
        <TouchableOpacity onPress={setScreenHome}>
          <Text>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function getScreenFrequency() {
    const setScreenHome = () => {
      setScreen('home');
    };

    return (
      <View>
        <Text>Frequency</Text>
        <TouchableOpacity onPress={setScreenHome}>
          <Text>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function getScreenLength() {
    const setScreenHome = () => {
      setScreen('home');
    };

    return (
      <View>
        <Text>Length</Text>
        <TouchableOpacity onPress={setScreenHome}>
          <Text>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function getScreenMass() {
    const setScreenHome = () => {
      setScreen('home');
    };

    return (
      <View>
        <Text>Mass</Text>
        <TouchableOpacity onPress={setScreenHome}>
          <Text>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function getScreenSpeed() {
    const setScreenHome = () => {
      setScreen('home');
    };

    return (
      <View>
        <Text>Speed</Text>
        <TouchableOpacity onPress={setScreenHome}>
          <Text>Go Back to Home</Text>
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
      } else {
        if (value !== '') {
          setTemperatureResult(Number(value) * 9 / 5 + 32);
        } else {
          setTemperatureResult('')
        }
      }
    };

    const onChangeTemperature = (value) => {
      resultTemperature(value)
    }

    const clearTemperature = () => {
      setTemperatureResult('');
      temperatureInput.clear();
    };

    return (
      <View>
        <Text>Temperature</Text>
        <Text>Select a value</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeTemperature} ref={input => setTemperatureInput(input)} />
        <Picker
          selectedValue={temperatureOne}
          onValueChange={(itemValue) =>
            setTemperatureOne(itemValue)
          } >
          <Picker.Item label="Celsius" value="celsius" />
          <Picker.Item label="Fahrenheit" value="fahrenheit" />
          <Picker.Item label="Kelvin" value="kelvin" />
        </Picker>
        <Picker
          selectedValue={temperatureTwo}
          onValueChange={(itemValue) =>
            setTemperatureTwo(itemValue)
          } >
          <Picker.Item label="Fahrenheit" value="fahrenheit" />
          <Picker.Item label="Celsius" value="celsius" />
          <Picker.Item label="Kelvin" value="kelvin" />
        </Picker>
        <TouchableOpacity onPress={clearTemperature}>
          <Text>Clear</Text>
        </TouchableOpacity>
        <Text>{temperatureResult !== 0 ? temperatureResult : ''}</Text>
        <TouchableOpacity onPress={setScreenHome}>
          <Text>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function getScreenTime() {
    const setScreenHome = () => {
      setScreen('home');
    };

    return (
      <View>
        <Text>Time</Text>
        <TouchableOpacity onPress={setScreenHome}>
          <Text>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  };
};
