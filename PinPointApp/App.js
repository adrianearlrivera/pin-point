import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';

export default function App() {
  const [location, setLocation] = useState(); //location held in state variable for easier updating
  const [address, setAddress] = useState();
  
  const [mapRegion, setMapRegion] = useState({
    longitude: 37.788825,
    latitude: -122.4324,
    longitudeDelta: 0.0922,
    latitudeDelat: 0.0421,
  });//map - random location

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

      setMapRegion({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        longitudeDelta: 0.0922,
        latitudeDelat: 0.0421,
      });//map sets current location
    };

    locationRequest(); 

  }, []);

  const geocode = async () => {
    const obtainedGeocode = await Location.geocodeAsync(address);
    console.log("Geocode Address:");
    console.log(obtainedGeocode);
  }

  const reverseGeocode = async () => {
    const reverseObtainedLocation = await Location.reverseGeocodeAsync({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude
    });

    console.log("Reverse Geocode Address:");
    console.log(reverseObtainedLocation);

  }

  return ( // visual section of app
    <View style={styles.container}>
      <Text>Address</Text> 
      
      <TextInput placeholder='Address' value = {address} onChangeText={setAddress}></TextInput>
      <Button title = "Geocode" onPress={geocode} />

      <Button title = "Reverse Geocode Current Location" onPress={reverseGeocode} />

      <StatusBar style="auto" />

      <MapView style={styles.map} 
        region={mapRegion}
      >
        <Marker coordinate={mapRegion} title='Marker' />
      </MapView>
      
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
  map: {
    width: '50%',
    height: '50%',
  },
});
