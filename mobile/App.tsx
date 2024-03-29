import { ActivityIndicator, StatusBar } from 'react-native';
import Home from './src/screens/Home';

import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
export default function App() {

  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })

  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : <ActivityIndicator />}
    </>
  )
};
