import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(); //location held in state variable for easier updating
  const [address, setAddress] = useState();

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

  const geocode = async () => {
    const obtainedGeocode = await Location.geocodeAsync(address);
    console.log("Geocode Address:");
    console.log(obtainedGeocode);
  }

  return (
    <View style={styles.container}>
      <Text>Address</Text> 
      
      <TextInput placeholder='Address' value = {address} onChangeText={setAddress}></TextInput>
      <Button title = "Geocode" onPress={geocode} />

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
