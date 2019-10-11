import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';

import { PackageDependencies } from '../../../types/packageMeta';
import { DetailContext } from '../../pages/Version';
import NoItems from '../NoItems';

import { CardWrap, Heading, Tags, Tag } from './styles';

interface DependencyBlockProps {
  title: string;
  dependencies: PackageDependencies;
}

const DependencyBlock: React.FC<DependencyBlockProps> = ({ title, dependencies }) => {
  const { enableLoading } = useContext(DetailContext);
  const history = useHistory();

  const deps = Object.entries(dependencies);

  function handleClick(name: string): void {
    enableLoading && enableLoading();

    history.push(`/-/web/detail/${name}`);
  }

  return (
    <CardWrap>
      <CardContent>
        <Heading variant="subtitle1">{`${title} (${deps.length})`}</Heading>
        <Tags>
          {deps.map(([name, version]) => (
            // eslint-disable-next-line
            <Tag className={'dep-tag'} clickable={true} key={name} label={`${name}@${version}`} onClick={() => handleClick(name)} />
          ))}
        </Tags>
      </CardContent>
    </CardWrap>
  );
};

function hasKeys(object?: { [key: string]: any }): boolean {
  return !!object && Object.keys(object).length > 0;
}

const Dependencies: React.FC<{}> = () => {
  const { packageMeta } = useContext(DetailContext);

  if (!packageMeta) {
    throw new Error('packageMeta is required at DetailContext');
  }

  const { latest } = packageMeta;
  // FIXME: add dependencies to package meta type
  // @ts-ignore
  const { dependencies, devDependencies, peerDependencies, name } = latest;
  const dependencyMap = { dependencies, devDependencies, peerDependencies };
  const hasDependencies = hasKeys(dependencies) || hasKeys(devDependencies) || hasKeys(peerDependencies);

  if (hasDependencies) {
    return (
      <>
        {Object.entries(dependencyMap).map(([dependencyType, dependencies]) => {
          if (!dependencies || Object.keys(dependencies).length === 0) {
            return null;
          }

          return <DependencyBlock dependencies={dependencies} key={dependencyType} title={dependencyType} />;
        })}
      </>
    );
  }

  return <NoItems className="no-dependencies" text={`${name} has no dependencies.`} />;
};

export default Dependencies;
