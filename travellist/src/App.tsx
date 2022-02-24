import React, {useEffect} from 'react';
import {HomeStack} from '@Navigation/Stacks';
import {setCurrencyLocales} from '@Utils/General';

const App = () => {
  useEffect(() => {
    setCurrencyLocales();
  }, []);

  return <HomeStack />;
};

export default App;
