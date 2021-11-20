import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [temperatureOne, setTemperatureOne] = useState('celsius');
  const [temperatureTwo, setTemperatureTwo] = useState('fahrenheit');
  const [temperatureInput, setTemperatureInput] = useState('');
  const [temperatureResult, setTemperatureResult] = useState(0);
  const [frequencyOne, setFrequencyOne] = useState('hertz');
  const [frequencyTwo, setFrequencyTwo] = useState('kilohertz');
  const [frequencyInput, setFrequencyInput] = useState('');
  const [frequencyResult, setFrequencyResult] = useState(0);
  const [speedOne, setSpeedOne] = useState('meterPerSecond');
  const [speedTwo, setSpeedTwo] = useState('kilometerPerHour');
  const [speedInput, setSpeedInput] = useState('');
  const [speedResult, setSpeedResult] = useState(0);
  const [timeOne, setTimeOne] = useState('second');
  const [timeTwo, setTimeTwo] = useState('minute');
  const [timeInput, setTimeInput] = useState('');
  const [timeResult, setTimeResult] = useState(0);
  const [digitalStorageOne, setDigitalStorageOne] = useState('byte');
  const [digitalStorageTwo, setDigitalStorageTwo] = useState('kilobyte');
  const [digitalStorageInput, setDigitalStorageInput] = useState('');
  const [digitalStorageResult, setDigitalStorageResult] = useState(0);
  const [areaOne, setAreaOne] = useState('squareMeter');
  const [areaTwo, setAreaTwo] = useState('squareKilometer');
  const [areaInput, setAreaInput] = useState('');
  const [areaResult, setAreaResult] = useState(0);
  const [lengthOne, setLengthOne] = useState('meter');
  const [lengthTwo, setLengthTwo] = useState('centimeter');
  const [lengthInput, setLengthInput] = useState('');
  const [lengthResult, setLengthResult] = useState(0);
  const [massOne, setMassOne] = useState('kilogram');
  const [massTwo, setMassTwo] = useState('gram');
  const [massInput, setMassInput] = useState('');
  const [massResult, setMassResult] = useState(0);

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
          setAreaResult((Number(value) * 4014000000).toFixed(9));
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
          setAreaResult((Number(value) / 3098000).toFixed(6));
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
          setAreaResult((Number(value) / 27880000).toFixed(7));
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
          setAreaResult((Number(value) / 4014000000).toFixed(9));
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
          setAreaResult((Number(value) / 6273000).toFixed(6));
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
          setAreaResult((Number(value) * 10000).toFixed(2));
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
          setAreaResult((Number(value)).toFixed(1));
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
      setAreaResult('');
      areaInput.clear();
    };

    return (
      <View>
        <Text>Area</Text>
        <Text>Select a value</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeArea} ref={input => setAreaInput(input)} />
        <Picker selectedValue={areaOne} onValueChange={(itemValue) => setAreaOne(itemValue)}>
          <Picker.Item label="Square Kilometer" value="squareKilometer" />
          <Picker.Item label="Square Meter" value="squareMeter" />
          <Picker.Item label="Square Mile" value="squareMile" />
          <Picker.Item label="Square Yard" value="squareYard" />
          <Picker.Item label="Square Foot" value="squareFoot" />
          <Picker.Item label="Square Inch" value="squareInch" />
          <Picker.Item label="Hectare" value="hectare" />
          <Picker.Item label="Acre" value="acre" />
        </Picker>
        <Picker selectedValue={areaTwo} onValueChange={(itemValue) => setAreaTwo(itemValue)}>
          <Picker.Item label="Square Kilometer" value="squareKilometer" />
          <Picker.Item label="Square Meter" value="squareMeter" />
          <Picker.Item label="Square Mile" value="squareMile" />
          <Picker.Item label="Square Yard" value="squareYard" />
          <Picker.Item label="Square Foot" value="squareFoot" />
          <Picker.Item label="Square Inch" value="squareInch" />
          <Picker.Item label="Hectare" value="hectare" />
          <Picker.Item label="Acre" value="acre" />
        </Picker>
        <TouchableOpacity onPress={clearArea}>
          <Text>Clear</Text>
        </TouchableOpacity>
        <Text>{areaResult !== 0 ? areaResult : ''}</Text>
        <TouchableOpacity onPress={setScreenHome}>
          <Text>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function getScreenDigitalStorage() {
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
          setDigitalStorageResult((Number(value) / 100).toFixed(2));
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
          setDigitalStorageResult((Number(value)).toFixed(1));
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
      setDigitalStorageResult('');
      digitalStorageInput.clear();
    };

    return (
      <View>
        <Text>DigitalStorage</Text>
        <Text>Select a value</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeDigitalStorage} ref={input => setDigitalStorageInput(input)} />
        <Picker selectedValue={digitalStorageOne} onValueChange={(itemValue) => setDigitalStorageOne(itemValue)}>
          <Picker.Item label="Bit" value="bit" />
          <Picker.Item label="Byte" value="byte" />
          <Picker.Item label="Kilobyte" value="kilobyte" />
          <Picker.Item label="Megabyte" value="megabyte" />
          <Picker.Item label="Gigabyte" value="gigabyte" />
          <Picker.Item label="Terabyte" value="terabyte" />
        </Picker>
        <Picker selectedValue={digitalStorageTwo} onValueChange={(itemValue) => setDigitalStorageTwo(itemValue)}>
          <Picker.Item label="Bit" value="bit" />
          <Picker.Item label="Byte" value="byte" />
          <Picker.Item label="Kilobyte" value="kilobyte" />
          <Picker.Item label="Megabyte" value="megabyte" />
          <Picker.Item label="Gigabyte" value="gigabyte" />
          <Picker.Item label="Terabyte" value="terabyte" />
        </Picker>
        <TouchableOpacity onPress={clearDigitalStorage}>
          <Text>Clear</Text>
        </TouchableOpacity>
        <Text>{digitalStorageResult !== 0 ? digitalStorageResult : ''}</Text>
        <TouchableOpacity onPress={setScreenHome}>
          <Text>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function getScreenFrequency() {
    const setScreenHome = () => {
      setScreen('home');
      setFrequencyResult(0);
      setFrequencyOne('hertz');
      setFrequencyTwo('kilohertz');
    };

    const resultFrequency = (value) => {
      if (frequencyOne === 'hertz' && frequencyTwo === 'megahertz') {
        if (value !== '') {
          setFrequencyResult((Number(value) / 1000000).toFixed(6));
        } else {
          setFrequencyResult('');
        }
      } else if (frequencyOne === 'hertz' && frequencyTwo === 'gigahertz') {
        if (value !== '') {
          setFrequencyResult((Number(value) / 1000000000).toFixed(9));
        } else {
          setFrequencyResult('');
        }
      } else if (frequencyOne === 'kilohertz' && frequencyTwo === 'hertz') {
        if (value !== '') {
          setFrequencyResult((Number(value) * 1000).toFixed(1));
        } else {
          setFrequencyResult('');
        }
      } else if (frequencyOne === 'kilohertz' && frequencyTwo === 'megahertz') {
        if (value !== '') {
          setFrequencyResult((Number(value) / 1000).toFixed(3));
        } else {
          setFrequencyResult('');
        }
      } else if (frequencyOne === 'kilohertz' && frequencyTwo === 'gigahertz') {
        if (value !== '') {
          setFrequencyResult((Number(value) / 1000000).toFixed(6));
        } else {
          setFrequencyResult('');
        }
      } else if (frequencyOne === 'megahertz' && frequencyTwo === 'hertz') {
        if (value !== '') {
          setFrequencyResult((Number(value) * 1000000).toFixed(1));
        } else {
          setFrequencyResult('');
        }
      } else if (frequencyOne === 'megahertz' && frequencyTwo === 'kilohertz') {
        if (value !== '') {
          setFrequencyResult((Number(value) * 1000).toFixed(1));
        } else {
          setFrequencyResult('');
        }
      } else if (frequencyOne === 'megahertz' && frequencyTwo === 'gigahertz') {
        if (value !== '') {
          setFrequencyResult((Number(value) / 1000).toFixed(3));
        } else {
          setFrequencyResult('');
        }
      } else if (frequencyOne === 'gigahertz' && frequencyTwo === 'hertz') {
        if (value !== '') {
          setFrequencyResult((Number(value) * 1000000000).toFixed(1));
        } else {
          setFrequencyResult('');
        }
      } else if (frequencyOne === 'gigahertz' && frequencyTwo === 'kilohertz') {
        if (value !== '') {
          setFrequencyResult((Number(value) * 1000000).toFixed(1));
        } else {
          setFrequencyResult('');
        }
      } else if (frequencyOne === 'gigahertz' && frequencyTwo === 'megahertz') {
        if (value !== '') {
          setFrequencyResult((Number(value) * 1000).toFixed(1));
        } else {
          setFrequencyResult('');
        }
      } else if (frequencyOne === frequencyTwo) {
        if (value !== '') {
          setFrequencyResult((Number(value)).toFixed(1));
        } else {
          setFrequencyResult('');
        }
      } else {
        if (value !== '') {
          setFrequencyResult((Number(value) / 1000).toFixed(3));
        } else {
          setFrequencyResult('')
        };
      };
    };

    const onChangeFrequency = (value) => {
      resultFrequency(value);
    };

    const clearFrequency = () => {
      setFrequencyResult('');
      frequencyInput.clear();
    };

    return (
      <View>
        <Text>Frequency</Text>
        <Text>Select a value</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeFrequency} ref={input => setFrequencyInput(input)} />
        <Picker selectedValue={frequencyOne} onValueChange={(itemValue) => setFrequencyOne(itemValue)}>
          <Picker.Item label="Hertz" value="hertz" />
          <Picker.Item label="Kilohertz" value="kilohertz" />
          <Picker.Item label="Megahertz" value="megahertz" />
          <Picker.Item label="Gigahertz" value="gigahertz" />
        </Picker>
        <Picker selectedValue={frequencyTwo} onValueChange={(itemValue) => setFrequencyTwo(itemValue)}>
          <Picker.Item label="Hertz" value="hertz" />
          <Picker.Item label="Kilohertz" value="kilohertz" />
          <Picker.Item label="Megahertz" value="megahertz" />
          <Picker.Item label="Gigahertz" value="gigahertz" />
        </Picker>
        <TouchableOpacity onPress={clearFrequency}>
          <Text>Clear</Text>
        </TouchableOpacity>
        <Text>{frequencyResult !== 0 ? frequencyResult : ''}</Text>
        <TouchableOpacity onPress={setScreenHome}>
          <Text>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function getScreenLength() {
    const setScreenHome = () => {
      setScreen('home');
      setLengthResult(0);
      setLengthOne('squareMeter');
      setLengthTwo('squareKilometer');
    };

    const resultLength = (value) => {
      if (lengthOne === 'squareMeter' && lengthTwo === 'squareMile') {
        if (value !== '') {
          setLengthResult((Number(value) / 2590000).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareMeter' && lengthTwo === 'squareYard') {
        if (value !== '') {
          setLengthResult((Number(value) * 1.196).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareMeter' && lengthTwo === 'squareFoot') {
        if (value !== '') {
          setLengthResult((Number(value) * 10.764).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareMeter' && lengthTwo === 'squareInch') {
        if (value !== '') {
          setLengthResult((Number(value) * 1550).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareMeter' && lengthTwo === 'hectare') {
        if (value !== '') {
          setLengthResult((Number(value) / 10000).toFixed(4));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareMeter' && lengthTwo === 'acre') {
        if (value !== '') {
          setLengthResult((Number(value) / 4047).toFixed(4));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareKilometer' && lengthTwo === 'squareMeter') {
        if (value !== '') {
          setLengthResult((Number(value) * 1000000).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareKilometer' && lengthTwo === 'squareMile') {
        if (value !== '') {
          setLengthResult((Number(value) / 2.59).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareKilometer' && lengthTwo === 'squareYard') {
        if (value !== '') {
          setLengthResult((Number(value) * 1196000).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareKilometer' && lengthTwo === 'squareFoot') {
        if (value !== '') {
          setLengthResult((Number(value) * 10760000).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareKilometer' && lengthTwo === 'squareInch') {
        if (value !== '') {
          setLengthResult((Number(value) * 1550000000).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareKilometer' && lengthTwo === 'hectare') {
        if (value !== '') {
          setLengthResult((Number(value) * 100).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareKilometer' && lengthTwo === 'acre') {
        if (value !== '') {
          setLengthResult((Number(value) * 247).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareMile' && lengthTwo === 'squareKilometer') {
        if (value !== '') {
          setLengthResult((Number(value) * 2.59).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareMile' && lengthTwo === 'squareMeter') {
        if (value !== '') {
          setLengthResult((Number(value) * 2590000).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareMile' && lengthTwo === 'squareYard') {
        if (value !== '') {
          setLengthResult((Number(value) * 3098000).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareMile' && lengthTwo === 'squareFoot') {
        if (value !== '') {
          setLengthResult((Number(value) * 27880000).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareMile' && lengthTwo === 'squareInch') {
        if (value !== '') {
          setLengthResult((Number(value) * 4014000000).toFixed(9));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareMile' && lengthTwo === 'hectare') {
        if (value !== '') {
          setLengthResult((Number(value) * 259).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareMile' && lengthTwo === 'acre') {
        if (value !== '') {
          setLengthResult((Number(value) * 640).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareYard' && lengthTwo === 'squareKilometer') {
        if (value !== '') {
          setLengthResult((Number(value) / 1196000).toFixed(6));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareYard' && lengthTwo === 'squareMeter') {
        if (value !== '') {
          setLengthResult((Number(value) / 1.196).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareYard' && lengthTwo === 'squareMile') {
        if (value !== '') {
          setLengthResult((Number(value) / 3098000).toFixed(6));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareYard' && lengthTwo === 'squareFoot') {
        if (value !== '') {
          setLengthResult((Number(value) * 9).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareYard' && lengthTwo === 'squareInch') {
        if (value !== '') {
          setLengthResult((Number(value) * 1296).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareYard' && lengthTwo === 'hectare') {
        if (value !== '') {
          setLengthResult((Number(value) / 11960).toFixed(4));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareYard' && lengthTwo === 'acre') {
        if (value !== '') {
          setLengthResult((Number(value) / 4840).toFixed(4));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareFoot' && lengthTwo === 'squareKilometer') {
        if (value !== '') {
          setLengthResult((Number(value) / 10760000).toFixed(7));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareFoot' && lengthTwo === 'squareMeter') {
        if (value !== '') {
          setLengthResult((Number(value) / 10.764).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareFoot' && lengthTwo === 'squareMile') {
        if (value !== '') {
          setLengthResult((Number(value) / 27880000).toFixed(7));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareFoot' && lengthTwo === 'squareYard') {
        if (value !== '') {
          setLengthResult((Number(value) / 9).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareFoot' && lengthTwo === 'squareInch') {
        if (value !== '') {
          setLengthResult((Number(value) * 144).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareFoot' && lengthTwo === 'hectare') {
        if (value !== '') {
          setLengthResult((Number(value) / 107639).toFixed(6));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareFoot' && lengthTwo === 'acre') {
        if (value !== '') {
          setLengthResult((Number(value) / 43560).toFixed(5));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareInch' && lengthTwo === 'squareKilometer') {
        if (value !== '') {
          setLengthResult((Number(value) / 1550000000).toFixed(9));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareInch' && lengthTwo === 'squareMeter') {
        if (value !== '') {
          setLengthResult((Number(value) / 1550).toFixed(4));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareInch' && lengthTwo === 'squareMile') {
        if (value !== '') {
          setLengthResult((Number(value) / 4014000000).toFixed(9));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareInch' && lengthTwo === 'squareYard') {
        if (value !== '') {
          setLengthResult((Number(value) / 1296).toFixed(4));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareInch' && lengthTwo === 'squareFoot') {
        if (value !== '') {
          setLengthResult((Number(value) / 144).toFixed(3));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareInch' && lengthTwo === 'hectare') {
        if (value !== '') {
          setLengthResult((Number(value) / 15500000).toFixed(7));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'squareInch' && lengthTwo === 'acre') {
        if (value !== '') {
          setLengthResult((Number(value) / 6273000).toFixed(6));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'hectare' && lengthTwo === 'squareKilometer') {
        if (value !== '') {
          setLengthResult((Number(value) / 100).toFixed(2));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'hectare' && lengthTwo === 'squareMeter') {
        if (value !== '') {
          setLengthResult((Number(value) * 10000).toFixed(2));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'hectare' && lengthTwo === 'squareMile') {
        if (value !== '') {
          setLengthResult((Number(value) / 259).toFixed(3));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'hectare' && lengthTwo === 'squareYard') {
        if (value !== '') {
          setLengthResult((Number(value) * 11960).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'hectare' && lengthTwo === 'squareFoot') {
        if (value !== '') {
          setLengthResult((Number(value) * 107639).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'hectare' && lengthTwo === 'squareInch') {
        if (value !== '') {
          setLengthResult((Number(value) * 15500000).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'hectare' && lengthTwo === 'acre') {
        if (value !== '') {
          setLengthResult((Number(value) * 2.471).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'acre' && lengthTwo === 'squareKilometer') {
        if (value !== '') {
          setLengthResult((Number(value) / 247).toFixed(3));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'acre' && lengthTwo === 'squareMeter') {
        if (value !== '') {
          setLengthResult((Number(value) * 4047).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'acre' && lengthTwo === 'squareMile') {
        if (value !== '') {
          setLengthResult((Number(value) / 640).toFixed(3));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'acre' && lengthTwo === 'squareYard') {
        if (value !== '') {
          setLengthResult((Number(value) * 4840).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'acre' && lengthTwo === 'squareFoot') {
        if (value !== '') {
          setLengthResult((Number(value) * 43560).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'acre' && lengthTwo === 'squareInch') {
        if (value !== '') {
          setLengthResult((Number(value) * 6273000).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'acre' && lengthTwo === 'hectare') {
        if (value !== '') {
          setLengthResult((Number(value) / 2.471).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === lengthTwo) {
        if (value !== '') {
          setLengthResult((Number(value)).toFixed(1));
        } else {
          setLengthResult('');
        }
      } else {
        if (value !== '') {
          setLengthResult((Number(value) / 1000000).toFixed(6));
        } else {
          setLengthResult('');
        };
      };
    };

    const onChangeLength = (value) => {
      resultLength(value);
    };

    const clearLength = () => {
      setLengthResult('');
      lengthInput.clear();
    };

    return (
      <View>
        <Text>Length</Text>
        <Text>Select a value</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeLength} ref={input => setLengthInput(input)} />
        <Picker selectedValue={lengthOne} onValueChange={(itemValue) => setLengthOne(itemValue)}>
          <Picker.Item label="Square Kilometer" value="squareKilometer" />
          <Picker.Item label="Square Meter" value="squareMeter" />
          <Picker.Item label="Square Mile" value="squareMile" />
          <Picker.Item label="Square Yard" value="squareYard" />
          <Picker.Item label="Square Foot" value="squareFoot" />
          <Picker.Item label="Square Inch" value="squareInch" />
          <Picker.Item label="Hectare" value="hectare" />
          <Picker.Item label="Acre" value="acre" />
        </Picker>
        <Picker selectedValue={lengthTwo} onValueChange={(itemValue) => setLengthTwo(itemValue)}>
          <Picker.Item label="Square Kilometer" value="squareKilometer" />
          <Picker.Item label="Square Meter" value="squareMeter" />
          <Picker.Item label="Square Mile" value="squareMile" />
          <Picker.Item label="Square Yard" value="squareYard" />
          <Picker.Item label="Square Foot" value="squareFoot" />
          <Picker.Item label="Square Inch" value="squareInch" />
          <Picker.Item label="Hectare" value="hectare" />
          <Picker.Item label="Acre" value="acre" />
        </Picker>
        <TouchableOpacity onPress={clearLength}>
          <Text>Clear</Text>
        </TouchableOpacity>
        <Text>{lengthResult !== 0 ? lengthResult : ''}</Text>
        <TouchableOpacity onPress={setScreenHome}>
          <Text>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  };

  function getScreenMass() {
    const setScreenHome = () => {
      setScreen('home');
      setMassResult(0);
      setMassOne('squareMeter');
      setMassTwo('squareKilometer');
    };

    const resultMass = (value) => {
      if (massOne === 'squareMeter' && massTwo === 'squareMile') {
        if (value !== '') {
          setMassResult((Number(value) / 2590000).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareMeter' && massTwo === 'squareYard') {
        if (value !== '') {
          setMassResult((Number(value) * 1.196).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareMeter' && massTwo === 'squareFoot') {
        if (value !== '') {
          setMassResult((Number(value) * 10.764).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareMeter' && massTwo === 'squareInch') {
        if (value !== '') {
          setMassResult((Number(value) * 1550).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareMeter' && massTwo === 'hectare') {
        if (value !== '') {
          setMassResult((Number(value) / 10000).toFixed(4));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareMeter' && massTwo === 'acre') {
        if (value !== '') {
          setMassResult((Number(value) / 4047).toFixed(4));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareKilometer' && massTwo === 'squareMeter') {
        if (value !== '') {
          setMassResult((Number(value) * 1000000).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareKilometer' && massTwo === 'squareMile') {
        if (value !== '') {
          setMassResult((Number(value) / 2.59).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareKilometer' && massTwo === 'squareYard') {
        if (value !== '') {
          setMassResult((Number(value) * 1196000).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareKilometer' && massTwo === 'squareFoot') {
        if (value !== '') {
          setMassResult((Number(value) * 10760000).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareKilometer' && massTwo === 'squareInch') {
        if (value !== '') {
          setMassResult((Number(value) * 1550000000).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareKilometer' && massTwo === 'hectare') {
        if (value !== '') {
          setMassResult((Number(value) * 100).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareKilometer' && massTwo === 'acre') {
        if (value !== '') {
          setMassResult((Number(value) * 247).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareMile' && massTwo === 'squareKilometer') {
        if (value !== '') {
          setMassResult((Number(value) * 2.59).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareMile' && massTwo === 'squareMeter') {
        if (value !== '') {
          setMassResult((Number(value) * 2590000).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareMile' && massTwo === 'squareYard') {
        if (value !== '') {
          setMassResult((Number(value) * 3098000).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareMile' && massTwo === 'squareFoot') {
        if (value !== '') {
          setMassResult((Number(value) * 27880000).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareMile' && massTwo === 'squareInch') {
        if (value !== '') {
          setMassResult((Number(value) * 4014000000).toFixed(9));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareMile' && massTwo === 'hectare') {
        if (value !== '') {
          setMassResult((Number(value) * 259).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareMile' && massTwo === 'acre') {
        if (value !== '') {
          setMassResult((Number(value) * 640).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareYard' && massTwo === 'squareKilometer') {
        if (value !== '') {
          setMassResult((Number(value) / 1196000).toFixed(6));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareYard' && massTwo === 'squareMeter') {
        if (value !== '') {
          setMassResult((Number(value) / 1.196).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareYard' && massTwo === 'squareMile') {
        if (value !== '') {
          setMassResult((Number(value) / 3098000).toFixed(6));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareYard' && massTwo === 'squareFoot') {
        if (value !== '') {
          setMassResult((Number(value) * 9).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareYard' && massTwo === 'squareInch') {
        if (value !== '') {
          setMassResult((Number(value) * 1296).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareYard' && massTwo === 'hectare') {
        if (value !== '') {
          setMassResult((Number(value) / 11960).toFixed(4));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareYard' && massTwo === 'acre') {
        if (value !== '') {
          setMassResult((Number(value) / 4840).toFixed(4));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareFoot' && massTwo === 'squareKilometer') {
        if (value !== '') {
          setMassResult((Number(value) / 10760000).toFixed(7));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareFoot' && massTwo === 'squareMeter') {
        if (value !== '') {
          setMassResult((Number(value) / 10.764).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareFoot' && massTwo === 'squareMile') {
        if (value !== '') {
          setMassResult((Number(value) / 27880000).toFixed(7));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareFoot' && massTwo === 'squareYard') {
        if (value !== '') {
          setMassResult((Number(value) / 9).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareFoot' && massTwo === 'squareInch') {
        if (value !== '') {
          setMassResult((Number(value) * 144).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareFoot' && massTwo === 'hectare') {
        if (value !== '') {
          setMassResult((Number(value) / 107639).toFixed(6));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareFoot' && massTwo === 'acre') {
        if (value !== '') {
          setMassResult((Number(value) / 43560).toFixed(5));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareInch' && massTwo === 'squareKilometer') {
        if (value !== '') {
          setMassResult((Number(value) / 1550000000).toFixed(9));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareInch' && massTwo === 'squareMeter') {
        if (value !== '') {
          setMassResult((Number(value) / 1550).toFixed(4));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareInch' && massTwo === 'squareMile') {
        if (value !== '') {
          setMassResult((Number(value) / 4014000000).toFixed(9));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareInch' && massTwo === 'squareYard') {
        if (value !== '') {
          setMassResult((Number(value) / 1296).toFixed(4));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareInch' && massTwo === 'squareFoot') {
        if (value !== '') {
          setMassResult((Number(value) / 144).toFixed(3));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareInch' && massTwo === 'hectare') {
        if (value !== '') {
          setMassResult((Number(value) / 15500000).toFixed(7));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'squareInch' && massTwo === 'acre') {
        if (value !== '') {
          setMassResult((Number(value) / 6273000).toFixed(6));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'hectare' && massTwo === 'squareKilometer') {
        if (value !== '') {
          setMassResult((Number(value) / 100).toFixed(2));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'hectare' && massTwo === 'squareMeter') {
        if (value !== '') {
          setMassResult((Number(value) * 10000).toFixed(2));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'hectare' && massTwo === 'squareMile') {
        if (value !== '') {
          setMassResult((Number(value) / 259).toFixed(3));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'hectare' && massTwo === 'squareYard') {
        if (value !== '') {
          setMassResult((Number(value) * 11960).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'hectare' && massTwo === 'squareFoot') {
        if (value !== '') {
          setMassResult((Number(value) * 107639).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'hectare' && massTwo === 'squareInch') {
        if (value !== '') {
          setMassResult((Number(value) * 15500000).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'hectare' && massTwo === 'acre') {
        if (value !== '') {
          setMassResult((Number(value) * 2.471).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'acre' && massTwo === 'squareKilometer') {
        if (value !== '') {
          setMassResult((Number(value) / 247).toFixed(3));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'acre' && massTwo === 'squareMeter') {
        if (value !== '') {
          setMassResult((Number(value) * 4047).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'acre' && massTwo === 'squareMile') {
        if (value !== '') {
          setMassResult((Number(value) / 640).toFixed(3));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'acre' && massTwo === 'squareYard') {
        if (value !== '') {
          setMassResult((Number(value) * 4840).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'acre' && massTwo === 'squareFoot') {
        if (value !== '') {
          setMassResult((Number(value) * 43560).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'acre' && massTwo === 'squareInch') {
        if (value !== '') {
          setMassResult((Number(value) * 6273000).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'acre' && massTwo === 'hectare') {
        if (value !== '') {
          setMassResult((Number(value) / 2.471).toFixed(1));
        } else {
          setMassResult('');
        }
      } else if (massOne === massTwo) {
        if (value !== '') {
          setMassResult((Number(value)).toFixed(1));
        } else {
          setMassResult('');
        }
      } else {
        if (value !== '') {
          setMassResult((Number(value) / 1000000).toFixed(6));
        } else {
          setMassResult('');
        };
      };
    };

    const onChangeMass = (value) => {
      resultMass(value);
    };

    const clearMass = () => {
      setMassResult('');
      massInput.clear();
    };

    return (
      <View>
        <Text>Mass</Text>
        <Text>Select a value</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeMass} ref={input => setMassInput(input)} />
        <Picker selectedValue={massOne} onValueChange={(itemValue) => setMassOne(itemValue)}>
          <Picker.Item label="Square Kilometer" value="squareKilometer" />
          <Picker.Item label="Square Meter" value="squareMeter" />
          <Picker.Item label="Square Mile" value="squareMile" />
          <Picker.Item label="Square Yard" value="squareYard" />
          <Picker.Item label="Square Foot" value="squareFoot" />
          <Picker.Item label="Square Inch" value="squareInch" />
          <Picker.Item label="Hectare" value="hectare" />
          <Picker.Item label="Acre" value="acre" />
        </Picker>
        <Picker selectedValue={massTwo} onValueChange={(itemValue) => setMassTwo(itemValue)}>
          <Picker.Item label="Square Kilometer" value="squareKilometer" />
          <Picker.Item label="Square Meter" value="squareMeter" />
          <Picker.Item label="Square Mile" value="squareMile" />
          <Picker.Item label="Square Yard" value="squareYard" />
          <Picker.Item label="Square Foot" value="squareFoot" />
          <Picker.Item label="Square Inch" value="squareInch" />
          <Picker.Item label="Hectare" value="hectare" />
          <Picker.Item label="Acre" value="acre" />
        </Picker>
        <TouchableOpacity onPress={clearMass}>
          <Text>Clear</Text>
        </TouchableOpacity>
        <Text>{massResult !== 0 ? massResult : ''}</Text>
        <TouchableOpacity onPress={setScreenHome}>
          <Text>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
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
          setSpeedResult((Number(value)).toFixed(1));
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
      setSpeedResult('');
      speedInput.clear();
    };

    return (
      <View>
        <Text>Speed</Text>
        <Text>Select a value</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeSpeed} ref={input => setSpeedInput(input)} />
        <Picker selectedValue={speedOne} onValueChange={(itemValue) => setSpeedOne(itemValue)}>
          <Picker.Item label="Meter per Second" value="meterPerSecond" />
          <Picker.Item label="Miles per Hour" value="milesPerHour" />
          <Picker.Item label="Foot per Second" value="footPerSecond" />
          <Picker.Item label="Kilometer per Hour" value="kilometerPerHour" />
          <Picker.Item label="Knot" value="knot" />
        </Picker>
        <Picker selectedValue={speedTwo} onValueChange={(itemValue) => setSpeedTwo(itemValue)}>
          <Picker.Item label="Meter per Second" value="meterPerSecond" />
          <Picker.Item label="Miles per Hour" value="milesPerHour" />
          <Picker.Item label="Foot per Second" value="footPerSecond" />
          <Picker.Item label="Kilometer per Hour" value="kilometerPerHour" />
          <Picker.Item label="Knot" value="knot" />
        </Picker>
        <TouchableOpacity onPress={clearSpeed}>
          <Text>Clear</Text>
        </TouchableOpacity>
        <Text>{speedResult !== 0 ? speedResult : ''}</Text>
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
      } else if (temperatureOne === temperatureTwo) {
        if (value !== '') {
          setTemperatureResult((Number(value)).toFixed(1));
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
      setTemperatureResult('');
      temperatureInput.clear();
    };

    return (
      <View>
        <Text>Temperature</Text>
        <Text>Select a value</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeTemperature} ref={input => setTemperatureInput(input)} />
        <Picker selectedValue={temperatureOne} onValueChange={(itemValue) => setTemperatureOne(itemValue)}>
          <Picker.Item label="Celsius" value="celsius" />
          <Picker.Item label="Fahrenheit" value="fahrenheit" />
          <Picker.Item label="Kelvin" value="kelvin" />
        </Picker>
        <Picker selectedValue={temperatureTwo} onValueChange={(itemValue) => setTemperatureTwo(itemValue)}>
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
          setTimeResult((Number(value) / 7).toFixed(2));
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
          setTimeResult((Number(value) / 4.345).toFixed(2));
        } else {
          setTimeResult('');
        }
      } else if (timeOne === 'week' && timeTwo === 'year') {
        if (value !== '') {
          setTimeResult((Number(value) / 52.143).toFixed(3));
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
          setTimeResult((Number(value)).toFixed(1));
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
      setTimeResult('');
      timeInput.clear();
    };

    return (
      <View>
        <Text>Time</Text>
        <Text>Select a value</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeTime} ref={input => setTimeInput(input)} />
        <Picker selectedValue={timeOne} onValueChange={(itemValue) => setTimeOne(itemValue)}>
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
        <Picker selectedValue={timeTwo} onValueChange={(itemValue) => setTimeTwo(itemValue)}>
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
        <TouchableOpacity onPress={clearTime}>
          <Text>Clear</Text>
        </TouchableOpacity>
        <Text>{timeResult !== 0 ? timeResult : ''}</Text>
        <TouchableOpacity onPress={setScreenHome}>
          <Text>Go Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  };
};
