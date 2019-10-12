/* eslint-disable no-console */

import { SyntheticEvent } from 'react';

export const copyToClipBoardUtility = (str: string): ((e: SyntheticEvent<HTMLElement>) => void) => (event: SyntheticEvent<HTMLElement>): void => {
  event.preventDefault();

  const node = document.createElement('div');
  node.innerText = str;
  if (document.body) {
    document.body.appendChild(node);

    const range = document.createRange();
    const selection = window.getSelection() as Selection;
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    document.body.removeChild(node);
  }
};

export function getCLISetConfigRegistry(command: string, scope: string, registryUrl: string): string {
  return `${command} ${scope}registry ${registryUrl}`;
}

export function getCLISetRegistry(command: string, registryUrl: string): string {
  return `${command} --registry ${registryUrl}`;
}

export function getCLIChangePassword(command: string, registryUrl: string): string {
  return `${command} profile set password --registry ${registryUrl}`;
}

export function getCLIChangePassword1(command: string, registryUrl: string): string {
  return `${command} profile set password --registry ${registryUrl}`;
}

export function getCLIChangePassword2(command: string, registryUrl: string): string {
  return `${command} profile set password --registry ${registryUrl}`;
}

export function getCLIChangePassword3(command: string, registryUrl: string): string {
  return `${command} profile set password --registry ${registryUrl}`;
}

export function getCLIChangePassword4(command: string, registryUrl: string): string {
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  console.log('3232k3j2lkjk');
  return `${command} profile set password --registry ${registryUrl}`;
}
