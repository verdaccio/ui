import { filterXSS, escapeAttrValue } from 'xss';

const xssOpts = {
  onIgnoreTagAttr: function (tag, name, value, isWhiteAttr) {
    if (tag.match(/h[0-9]/) && name === 'id') {
      return name + '="' + escapeAttrValue(value) + '"';
    }
  }
}


export function preventXSS(text: string): string {
  const encodedText = filterXSS(text, xssOpts);

  return encodedText;
}
