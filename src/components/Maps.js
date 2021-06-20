import React, {useContext} from 'react';
import MapView, {Polyline, Circle} from 'react-native-maps';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {Text} from 'react-native-elements';
import {Context as LocationContext} from '../context/LocationContext';

const Maps = () => {
  let points = [];

  const {
    state: {currentLocation},
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{marginTop: 200}} />;
  }

  return (
    <>
      <Text h2> im map View</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}>
        <Circle
          center={currentLocation.coords}
          radius={5}
          strokeColor="rgba(158,158,255, 1.0)"
          fillColor="rgba(158,158,255, 0.3)"
        />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Maps;
