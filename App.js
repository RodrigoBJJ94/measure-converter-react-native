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
          setLengthResult((Number(value) * 1000000).toFixed(6));
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
          setLengthResult((Number(value) / 914400000).toFixed(8));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'nanometer' && lengthTwo === 'foot') {
        if (value !== '') {
          setLengthResult((Number(value) * 304800000).toFixed(8));
        } else {
          setLengthResult('');
        }
      } else if (lengthOne === 'nanometer' && lengthTwo === 'inch') {
        if (value !== '') {
          setLengthResult((Number(value) / 25400000).toFixed(7));
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
          setLengthResult((Number(value)).toFixed(1));
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
      setLengthResult('');
      lengthInput.clear();
    };

    return (
      <View>
        <Text>Length</Text>
        <Text>Select a value</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeLength} ref={input => setLengthInput(input)} />
        <Picker selectedValue={lengthOne} onValueChange={(itemValue) => setLengthOne(itemValue)}>
          <Picker.Item label="Kilometer" value="kilometer" />
          <Picker.Item label="Meter" value="meter" />
          <Picker.Item label="Centimeter" value="centimeter" />
          <Picker.Item label="Millimeter" value="millimeter" />
          <Picker.Item label="Nanometer" value="nanometer" />
          <Picker.Item label="Mile" value="mile" />
          <Picker.Item label="Yard" value="yard" />
          <Picker.Item label="Foot" value="foot" />
          <Picker.Item label="Inch" value="inch" />
        </Picker>
        <Picker selectedValue={lengthTwo} onValueChange={(itemValue) => setLengthTwo(itemValue)}>
          <Picker.Item label="Kilometer" value="kilometer" />
          <Picker.Item label="Meter" value="meter" />
          <Picker.Item label="Centimeter" value="centimeter" />
          <Picker.Item label="Millimeter" value="millimeter" />
          <Picker.Item label="Nanometer" value="nanometer" />
          <Picker.Item label="Mile" value="mile" />
          <Picker.Item label="Yard" value="yard" />
          <Picker.Item label="Foot" value="foot" />
          <Picker.Item label="Inch" value="inch" />
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
          setMassResult((Number(value) / 28.35).toFixed(1));
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
          setMassResult((Number(value) / 453592).toFixed(5));
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
          setMassResult((Number(value) / 453600000).toFixed(8));
        } else {
          setMassResult('');
        }
      } else if (massOne === 'microgram' && massTwo === 'once') {
        if (value !== '') {
          setMassResult((Number(value) / 28350000).toFixed(7));
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
          setMassResult((Number(value) * 16).toFixed(3));
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
          setMassResult((Number(value)).toFixed(1));
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
      setMassResult('');
      massInput.clear();
    };

    return (
      <View>
        <Text>Mass</Text>
        <Text>Select a value</Text>
        <TextInput keyboardType="numeric" onChangeText={onChangeMass} ref={input => setMassInput(input)} />
        <Picker selectedValue={massOne} onValueChange={(itemValue) => setMassOne(itemValue)}>
          <Picker.Item label="Tonne" value="tonne" />
          <Picker.Item label="Kilogram" value="kilogram" />
          <Picker.Item label="Gram" value="gram" />
          <Picker.Item label="Milligram" value="milligram" />
          <Picker.Item label="Microgram" value="microgram" />
          <Picker.Item label="Pound" value="pound" />
          <Picker.Item label="Once" value="once" />
        </Picker>
        <Picker selectedValue={massTwo} onValueChange={(itemValue) => setMassTwo(itemValue)}>
          <Picker.Item label="Tonne" value="tonne" />
          <Picker.Item label="Kilogram" value="kilogram" />
          <Picker.Item label="Gram" value="gram" />
          <Picker.Item label="Milligram" value="milligram" />
          <Picker.Item label="Microgram" value="microgram" />
          <Picker.Item label="Pound" value="pound" />
          <Picker.Item label="Once" value="once" />
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
