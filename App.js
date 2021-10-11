import Home from './src/screens/Home';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './src/components/Header';
import Context from './src/context/context';
import Favorites from './src/screens/Favorites';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';

const Stack = createStackNavigator();

function App() {
  const [selectedTab, setSelectedTab] = React.useState('Home');
  const [language, setLanguage] = React.useState('MNE');
  const [headerShadow, setHeaderShadow] = React.useState(false)
  
  return (
    <Context.Provider 
      value={{
        selectedTab,
        setSelectedTab,
        headerShadow, 
        setHeaderShadow,
        language, 
        setLanguage
      }}
    >
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerShown: true,
              animationEnabled: false,
              headerStyle: { 
                height: 60,
                elevation: 0,
                shadowOpacity: 0,  
              },
              headerTitleContainerStyle: {
                left: 0,
                right: 0,
                paddingTop: 5,
              },
              headerTitle: props => <Header {...props} />
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Favorites" component={Favorites} />
            <Stack.Screen name="Search" component={Search}/>
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Context.Provider>
  );
}

export default App;
