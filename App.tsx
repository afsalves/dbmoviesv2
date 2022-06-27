import React from "react";
import Routes from "./src/routes/routes";
import {DBMoviesProvider} from '@hooks/useDBMovies'
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded)
  return <AppLoading />

  return (
    <DBMoviesProvider>
      < Routes />
    </DBMoviesProvider>
  );
}