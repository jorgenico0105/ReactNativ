
import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import "../global.css";
import { Slot, Stack } from "expo-router";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
  const [loaded] = useFonts({
      WorkSans: require('../assets/fonts/WorkSans-Black.ttf'),
      WorkSansL:require('../assets/fonts/WorkSans-Light.ttf'),
      WorkSansM:require('../assets/fonts/WorkSans-Medium.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Slot/>
  );
}
