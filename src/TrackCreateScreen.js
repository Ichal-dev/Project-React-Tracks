import './_mockLocation';
import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import Maps from './components/Maps';
import {Context as LocationContext} from './context/LocationContext';
import useLocation from './hooks/useLocation';
import {useIsFocused} from '@react-navigation/native';

const TrackCreateScreen = () => {
  const isFocused = useIsFocused();

  const {addLocation} = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);

  return (
    <View>
      <Text h1>Track Create</Text>
      <Maps />
      {err ? <Text> Please Enable Location Service</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
