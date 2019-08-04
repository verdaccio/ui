import parseXSS from 'xss';

export function preventXSS(text: string): string {
  const encodedText = parseXSS.filterXSS(text);

  return encodedText;
}
