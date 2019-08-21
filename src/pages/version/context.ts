import React, { Consumer, Provider } from 'react';
import { DetailContextProps, VersionPageConsumerProps } from './types';

export const DetailContext = React.createContext<Partial<DetailContextProps>>({});

export const DetailContextProvider: Provider<Partial<VersionPageConsumerProps>> = DetailContext.Provider;
export const DetailContextConsumer: Consumer<Partial<VersionPageConsumerProps>> = DetailContext.Consumer;
