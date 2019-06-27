import API from './api';
import { PackageMetaInterface } from 'types/packageMeta';

export interface DetailPage {
  readMe: string | {};
  packageMeta: PackageMetaInterface | {};
}

export async function callDetailPage(packageName): Promise<DetailPage> {
  const readMe = await API.request(`package/readme/${packageName}`, 'GET');
  const packageMeta = await API.request(`sidebar/${packageName}`, 'GET');

  return { readMe, packageMeta };
}
