import React from 'react';
import { shallow, mount } from 'enzyme';

import { DetailContext } from '../../pages/Version';

import UpLinks from './UpLinks';

describe('<UpLinks /> component', () => {
  test('should return null without packageMeta', () => {
    const wrapper = shallow(<UpLinks />);
    expect(wrapper.html()).toBeNull();
  });

  test('should render the component with uplinks', () => {
    const packageMeta = {
      latest: {
        name: 'verdaccio',
        version: '4.0.0',
        author: {
          name: 'verdaccio user',
          url: '',
          avatar: 'https://www.gravatar.com/avatar/000000',
        },
        dist: { fileCount: 0, unpackedSize: 0 },
      },
      _uplinks: {
        npmjs: {
          etag: '"W/"252f0a131cedd3ea82dfefd6fa049558""',
          fetched: 1529779934081,
        },
      },
    };

    const wrapper = mount(
      <DetailContext.Provider value={{ packageMeta }}>
        <UpLinks />
      </DetailContext.Provider>
    );

    expect(wrapper.html()).toMatchSnapshot();
  });
});
