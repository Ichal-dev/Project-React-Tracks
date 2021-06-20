import React, {useState, useEffect} from 'react';
import {
  requestForegroundPermissionsAsync,
  Accuracy,
  watchPositionAsync,
} from 'expo-location';

export default (shouldTrack, callback) => {
  const [subscriber, setSubscriber] = useState(null);
  const [err, setErr] = useState(null);
  const starWatching = async () => {
    try {
      const {granted} = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback,
      );
      setSubscriber(sub);
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      starWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);

  return [err];
};
