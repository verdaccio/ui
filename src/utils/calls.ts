import API from './api';
import { PackageMetaInterface } from 'types/packageMeta';

export async function callReadme(packageName): Promise<string | {}> {
  return await API.request<string | {}>(`package/readme/${packageName}`, 'GET');
}

export async function callDetailPage(packageName): Promise<PackageMetaInterface | {}> {
  const packageMeta = await API.request<PackageMetaInterface | {}>(`sidebar/${packageName}`, 'GET');

  return packageMeta;
}
