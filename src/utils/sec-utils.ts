import { filterXSS } from 'xss';

export function preventXSS(text: string): string {
  const encodedText = filterXSS(text);

  return encodedText;
}
