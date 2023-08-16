import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(); //location held in state variable for easier updating

  //function to obtain location permission
  useEffect(() => {
    const locationRequest = async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      ///Asks the user to grant permissions for location while the app is in the foreground.
      if (status !== 'granted') {
        console.log("Location permission required to use app!");
        return;
      }

      //permission granted
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      console.log("Location:");
      console.log(currentLocation);
    };

    locationRequest(); 

  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
