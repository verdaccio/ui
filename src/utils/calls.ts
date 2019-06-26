import API from './api';

export interface DetailPage {
  readMe: any;
  packageMeta: any;
}

export async function callDetailPage(packageName): Promise<DetailPage> {
  const readMe = await API.request(`package/readme/${packageName}`, 'GET');
  const packageMeta = await API.request(`sidebar/${packageName}`, 'GET');

  return { readMe, packageMeta };
}
