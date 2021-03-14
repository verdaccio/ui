import React, { createContext, FunctionComponent, useContext, useMemo, useState } from 'react';

export type VerdaccioOptions = {
  url_prefix?: string;
  uri?: string;
  base?: string;
  language?: string;
  version?: string;
  protocol?: string;
  host?: string;
  scope?: string;
  title?: string;
  primaryColor?: string;
  darkMode?: boolean;
};

type ConfigProviderProps = {
  configOptions: VerdaccioOptions;
  setConfigOptions: any;
};

const defaultValues: ConfigProviderProps = {
  configOptions: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setConfigOptions: () => {},
};

const AppConfigurationContext = createContext<ConfigProviderProps>(defaultValues);

const AppConfigurationProvider: FunctionComponent = ({ children }) => {
  const [configOptions, setConfigOptions] = useState(window?.__VERDACCIO_BASENAME_UI_OPTIONS ?? {});

  const value = useMemo(
    () => ({
      configOptions,
      setConfigOptions,
    }),
    [configOptions]
  );

  return <AppConfigurationContext.Provider value={value}>{children}</AppConfigurationContext.Provider>;
};

export default AppConfigurationProvider;

const useConfig = () => useContext(AppConfigurationContext);

export { useConfig };
