import parseXSS from 'xss';

export function preventXSS(text: string) {
  const encodedText = parseXSS.filterXSS(text);

  return encodedText;
}
