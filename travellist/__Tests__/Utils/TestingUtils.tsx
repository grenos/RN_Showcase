import React, {FC, ReactElement, ReactNode} from 'react';
import {render} from '@testing-library/react-native';
import {store} from '@Storage/Redux';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

type Props = {children: ReactNode};
const AllTheProviders: FC<Props> = ({children}) => {
  return (
    <Provider store={store}>
      <NavigationContainer>{children}</NavigationContainer>
    </Provider>
  );
};

const customRender = (ui: ReactElement, options: any) =>
  render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
