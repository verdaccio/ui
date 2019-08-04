import isURLValidator from 'validator/lib/isURL';
import isEmailValidator from 'validator/lib/isEmail';
import '../../types';

export function isURL(url: string): boolean {
  return isURLValidator(url || '', {
    protocols: ['http', 'https', 'git+https'],
    require_protocol: true,
    require_tld: false,
  });
}

export function isEmail(email): boolean {
  return isEmailValidator(email || '');
}

export function getRegistryURL(): string {
  // Don't add slash if it's not a sub directory
  return `${location.origin}${location.pathname === '/' ? '' : location.pathname}`;
}

export function extractFileName(url: string): string {
  return url.substring(url.lastIndexOf('/') + 1);
}

export function downloadFile(fileStream: Blob, fileName: string): void {
  const file = new File([fileStream], fileName, { type: 'application/octet-stream', lastModified: Date.now() });
  const objectURL = URL.createObjectURL(file);
  const fileLink = document.createElement('a');
  fileLink.href = objectURL;
  fileLink.download = fileName;
  fileLink.click();
  // firefox requires remove the object url
  setTimeout(() => {
    URL.revokeObjectURL(objectURL);
  }, 150);
}
