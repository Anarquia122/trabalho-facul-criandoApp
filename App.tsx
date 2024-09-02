import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ListaFornecedores } from './screens/ListaFornecedores';
import { CadastroFornecedores } from './screens/CadastroFornecedores';

const listaIcon = 'https://firebasestorage.googleapis.com/v0/b/criandoapprn.appspot.com/o/lista-icon.png?alt=media&token=61265c30-b7c6-4e15-972a-11503ff31e8d';

const cadastroIcon = 'https://firebasestorage.googleapis.com/v0/b/criandoapprn.appspot.com/o/cadastro-icon.png?alt=media&token=8ecde634-b293-4c88-920d-2d5f83f97848';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Fornecedores' component={ListaFornecedores} options={{
          headerStyle: {backgroundColor: '#1c1c1c'},
          headerTintColor: '#fff',
          tabBarIcon: ({color, size}) => (
            <Image
              source={{ uri: listaIcon }}
              style={{ width: size, height: size, tintColor: color }}
            />
          )
        }} />

        <Tab.Screen name='Novo Fornecedor' component={CadastroFornecedores} options={{
          headerStyle: {backgroundColor: '#1c1c1c'},
          headerTintColor: '#fff',
          tabBarIcon: ({color, size}) => (
            <Image
              source={{ uri: cadastroIcon }}
              style={{ width: size, height: size, tintColor: color }}
            />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
