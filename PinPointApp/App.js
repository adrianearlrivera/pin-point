import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";

export default function App() {
  const GOOGLE_MAPS_APIKEY = "UNKWONS";

  const defaultRegion = ({
    longitude: 37.788825,
    latitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [location, setLocation] = useState(); //location held in state variable for easier updating
  const [address, setAddress] = useState();
  
  const [mapRegion, setMapRegion] = useState(defaultRegion);
  const [coordsLocation, setCoords] = useState();
  const [destination, setDestination] = useState({
    longitude: -5.930120,
    latitude: 54.597286,
  });

  //function to obtain location permission
  useEffect(() => {
    const locationRequest = async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      ///Asks the user to grant permissions for location while the app is in the foreground.
      if (status != 'granted') {
        console.log("Location permission required to use app!");
        return;
      }

      //permission granted
      let currentLocation = await Location.getCurrentPositionAsync({});
      console.log("Location:");
      console.log(currentLocation);
      setLocation(currentLocation);

      setCoords({
        longitude: currentLocation.coords.longitude,
        latitude: currentLocation.coords.latitude,
        });
      console.log(coordsLocation);
      

      setMapRegion({
        longitude: currentLocation.coords.longitude,
        latitude: currentLocation.coords.latitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });//map sets current location

      setDestination({
        longitude: -5.930120,
        latitude: 54.597286,
      });
      
      console.log(destination);
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
  
  //reference for map function interaction - zoom feature
  const mapViewRef = useRef(null);

  return ( // visual section of app
    <View style={styles.container}>
      <Text>Address</Text> 
      
      <TextInput placeholder='Address' value = {address} onChangeText={setAddress}></TextInput>
      <Button title = "Geocode" onPress={geocode} />

      <Button title = "Reverse Geocode Current Location" onPress={reverseGeocode} />

      <StatusBar style="auto" />

      <MapView style={styles.map} 
        region={defaultRegion}

        //map zoom in on current location feature
        ref={mapViewRef}
        onLongPress={() =>
          mapViewRef.current?.animateToRegion(mapRegion,2000)
        }

        //onUserLocationChange={} - could use maybe
        showsUserLocation={true}
        followUserLocation={true}
        
      >
        {/* Path to marker */}
        {/* <MapViewDirections
          origin={coordsLocation}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        /> */}

        <Marker coordinate={destination} title='Marker' />

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
    width: '75%',
    height: '75%',
  },
});
