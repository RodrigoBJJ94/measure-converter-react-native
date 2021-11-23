import React, { useState } from 'react';
import Home from './pages/Home/Home/Home';
import Area from './pages/Area/Area/Area';
import DigitalStorage from './pages/DigitalStorage/DigitalStorage/DigitalStorage';
import Frequency from './pages/Frequency/Frequency/Frequency';
import Lenght from './pages/Length/Length/Length';
import Mass from './pages/Speed/Speed/Speed';
import Speed from './pages/Speed/Speed/Speed';
import Temperature from './pages/Temperature/Temperature/Temperature';
import Time from './pages/Time/Time/Time';

export default function App() {
  const [screen, setScreen] = useState('home');

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
    return <Speed setScreen={setScreen} />
  };

  function getScreenTemperature() {
    return <Temperature setScreen={setScreen} />
  };

  function getScreenTime() {
    return <Time setScreen={setScreen} />
  };
};
