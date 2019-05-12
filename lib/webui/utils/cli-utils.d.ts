/**
 * @prettier
 */
import { SyntheticEvent } from 'react';
export declare const copyToClipBoardUtility: (str: string) => (event: SyntheticEvent<HTMLElement, Event>) => void;
export declare function getCLISetConfigRegistry(command: string, scope: string, registryUrl: string): string;
export declare function getCLISetRegistry(command: string, registryUrl: string): string;
export declare function getCLIChangePassword(command: string, registryUrl: string): string;
