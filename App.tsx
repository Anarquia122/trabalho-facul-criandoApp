
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ListaFornecedores } from './screens/ListaFornecedores';
import { CadastroFornecedores } from './screens/CadastroFornecedores';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='ListaFornecedor' component={ListaFornecedores} />
        <Tab.Screen name='CadastroFornecedor' component={CadastroFornecedores} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
