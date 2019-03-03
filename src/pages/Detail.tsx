/**
 * @prettier
 */

import React from 'react';
import isEmpty from 'lodash/isEmpty';

import PackageDetail from '../components/patterns/PackageDetail/PackageDetail';
import NotFound from '../components/patterns/NotFound/NotFound';
import Spinner from '../components/primitives/Spinner';
import PackageSidebar from '../components/patterns/PackageSidebar';
import API from '../utils/api';

interface Props {
  isUserLoggedIn: boolean;
  match: any;
}

const Detail: React.FC<Props> = ({ match: { params }, isUserLoggedIn }) => {
  const [notFound, setNotFound] = React.useState(false);
  const [readMe, setReadMe] = React.useState('');

  const packageName = `${(params.scope && '@' + params.scope + '/') || ''}${params.package}`;

  React.useEffect(
    () => {
      loadPackageInfo();
    },
    [readMe]
  );

  const loadPackageInfo = async () => {
    setReadMe('');

    try {
      const resp = await API.request(`package/readme/${packageName}`, 'GET');
      // @ts-ignore
      setReadMe(resp);
      setNotFound(false);
    } catch (err) {
      console.error('Package not found', err);
      setNotFound(true);
    }
  };

  if (notFound) {
    return (
      <div className={`container content`}>
        <NotFound pkg={packageName} />
      </div>
    );
  }

  if (isEmpty(readMe)) {
    return <Spinner centered={true} />;
  }

  return (
    <div className={`container content`}>
      <PackageDetail packageName={packageName} readMe={readMe} />
      <PackageSidebar packageName={packageName} />
    </div>
  );
};

export default Detail;

//   componentDidUpdate(prevProps) {
//     const { isUserLoggedIn, match } = this.props;
//     const condition1 = prevProps.isUserLoggedIn !== isUserLoggedIn;
//     const condition2 =
//       prevProps.match.params.package !== match.params.package;
//     if (condition1 || condition2) {
//       const packageName = this.getPackageName(this.props);
//       this.loadPackageInfo(packageName);
//     }
//   }
