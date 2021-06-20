import React, {useEffect, useContext} from 'react';
import {Context} from '../context/AuthContext';

const ResolveAuthScreen = () => {
  const {tryLocalSingin} = useContext(Context);

  useEffect(() => {
    tryLocalSingin();
  }, []);

  return null;
};

export default ResolveAuthScreen;
