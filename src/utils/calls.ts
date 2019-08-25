import API from './api';
import { PackageMetaInterface } from 'types/packageMeta';

export async function callReadme(packageName): Promise<string | {}> {
  return await API.request<string | {}>(`package/readme/${packageName}`, 'GET');
}

export async function callDetailPage(packageName): Promise<PackageMetaInterface | {}> {
  const packageMeta = await API.request<PackageMetaInterface | {}>(`sidebar/${packageName}`, 'GET');

  return packageMeta;
}

export function callSearch(value: string, signal: any) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#Browser_compatibility
  // FUTURE: signal is not well supported for IE and Samsung Browser
  return API.request(`search/${encodeURIComponent(value)}`, 'GET', { signal, headers: {} });
}
