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
      });//map sets current location
}

export default ( mapRegion );

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
