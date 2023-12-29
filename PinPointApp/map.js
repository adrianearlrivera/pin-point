import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';

const [location, setLocation] = useState(); //location held in state variable for easier updating
const [address, setAddress] = useState();

const [mapRegion, setMapRegion] = useState();//map view

function show_map() {
    //display map on click of button?

    setMapRegion({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        longitudeDelta: 0.0922,
        latitudeDelat: 0.0421,
      });//map sets current location
      
    return ( // visual section of app
    <View style={styles.container}>
      <Text>Map</Text> 
      
      <MapView style={styles.map} 
        region={mapRegio}
      >
        <Marker coordinate={mapRegio} title='Marker' />
      </MapView>
      
    </View>
  );
}

function current_location() {
    //gets precise current geo-location
}

var location_now = () => {
    //call current_location
    //shows this location on map
}

//maybe call this when current_location is different to location_now
function display_path(start, end) {
    //show path on map from start node to end node
}


const map_zoom = () => {
    //set default zoom level
}


//testing purposes - can add to actual css file later
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