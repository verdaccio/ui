import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import React, { createContext, FunctionComponent, useContext, useMemo, useState } from 'react';

export type VerdaccioOptions = {
  url_prefix: string;
  uri?: string;
  base: string;
  language?: string;
  version?: string;
  protocol?: string;
  host?: string;
  scope: string;
  title: string;
  logo?: string;
  primaryColor: string;
  darkMode: boolean;
};

type ConfigProviderProps = {
  configOptions: VerdaccioOptions;
  setConfigOptions: any;
};

const defaultValues: ConfigProviderProps = {
  configOptions: {
    primaryColor: '#4b5e40',
    darkMode: false,
    scope: '',
    base: '',
    url_prefix: '',
    title: 'Verdaccio',
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setConfigOptions: () => {},
};

function getConfiguration() {
  const uiConfiguration = window?.__VERDACCIO_BASENAME_UI_OPTIONS ?? defaultValues.configOptions;
  if (isNil(uiConfiguration.primaryColor) || isEmpty(uiConfiguration.primaryColor)) {
    uiConfiguration.primaryColor = '#4b5e40';
  }

  return uiConfiguration;
}

const AppConfigurationContext = createContext<ConfigProviderProps>(defaultValues);

const AppConfigurationProvider: FunctionComponent = ({ children }) => {
  const [configOptions, setConfigOptions] = useState(getConfiguration());

  const value = useMemo(
    () => ({
      configOptions,
      setConfigOptions,
    }),
    [configOptions]
  );

  // @ts-ignore
  return <AppConfigurationContext.Provider value={value}>{children}</AppConfigurationContext.Provider>;
};

export default AppConfigurationProvider;

const useConfig = () => useContext(AppConfigurationContext);

export { useConfig };
