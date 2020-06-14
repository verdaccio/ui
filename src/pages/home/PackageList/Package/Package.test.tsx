import React from 'react';

import { shallow } from '../../../../utils/test-enzyme';

import Tag from './Tag';
import Package from './Package';
import { WrapperLink, Description, OverviewItem } from './styles';

/**
 * Generates one month back date from current time
 * @return {object} date object
 */
const dateOneMonthAgo = (): Date => new Date(1544377770747);

describe('<Package /> component', () => {
  test.skip('should load the component', () => {
    const props = {
      name: 'verdaccio',
      version: '1.0.0',
      time: String(dateOneMonthAgo()),
      license: 'MIT',
      description: 'Private NPM repository',
      author: {
        name: 'Sam',
      },
      keywords: ['verdaccio'],
    };

    const wrapper = shallow(
      <Package
        author={props.author}
        description={props.description}
        license={props.license}
        name={props.name}
        time={props.time}
        version={props.version}
      />
    );

    // integration expectations

    // check link
    expect(wrapper.find(WrapperLink).prop('to')).toEqual(`detail/${props.name}`);

    // check version
    expect(wrapper.find(OverviewItem).prop('children')).toHaveReturnedWith(`v${props.version}`);

    // TODO - REWRITE THE TEST
    // expect(wrapper.find(Author).dive())

    // check description
    expect(wrapper.find(Description).prop('children')).toHaveReturnedWith(props.description);

    // check license
    expect(wrapper.find(OverviewItem).someWhere(n => n.get(0).props.children[1] === props.license)).toBe(true);

    // check keyword
    expect(wrapper.find(Tag).prop('children')).toEqual(props.keywords[0]);
  });

  test.skip('should load the component without author', () => {
    const props = {
      name: 'verdaccio',
      version: '1.0.0',
      time: String(dateOneMonthAgo()),
      license: 'MIT',
      author: {
        name: 'Anonymous',
        email: '',
        avatar: '',
      },
      description: 'Private NPM repository',
    };
    const wrapper = shallow(
      <Package
        author={props.author}
        description={props.description}
        license={props.license}
        name={props.name}
        time={props.time}
        version={props.version}
      />
    );

    // integration expectations
    expect(wrapper.html()).toMatchSnapshot();
  });
});
