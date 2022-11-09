/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {TareaScreen} from './src/screens/TareaScreen';
// import {FlexScreen} from './src/screens/FlexScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {Dimensiones} from './src/screens/Dimensiones';
// import {CounterScreen} from './src/screens/CounterScreen';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#28425B'}}>
      {/* // <HolaMundoScreen />
      // <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <Dimensiones /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};
