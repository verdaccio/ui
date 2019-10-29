import React, { Fragment } from 'react';

import { PackageMetaInterface } from '../../../types/packageMeta';
import Avatar from '../../muiComponents/Avatar';
import { DetailContextConsumer } from '../../pages/Version';
import { isURL } from '../../utils/url';
import CopyToClipBoard from '../CopyToClipBoard';
import List from '../../muiComponents/List';

import git from './img/git.png';
import { GithubLink, StyledText, RepositoryListItem, RepositoryListItemText } from './styles';

const Repository: React.FC = props => {
	const renderRepositoryText = (url: string) => (
		<GithubLink href={url} target="_blank">
			{url}
		</GithubLink>
	);

	const renderContent = (url: string) => <CopyToClipBoard text={url}>{renderRepositoryText(url)}</CopyToClipBoard>;

	const renderRepository = (packageMeta: PackageMetaInterface) => {
		const { repository: { url = null } = {} } = packageMeta.latest;

		if (!url || isURL(url) === false) {
			return null;
		}

		return (
			<Fragment>
				<List dense={true} subheader={<StyledText variant="subtitle1">{'Repository'}</StyledText>}>
					<RepositoryListItem button={true}>
						<Avatar src={git} />
						<RepositoryListItemText primary={renderContent(url)} />
					</RepositoryListItem>
				</List>
			</Fragment>
		);
	};
	return <DetailContextConsumer>
		{context => context && context.packageMeta && renderRepository(context.packageMeta)}
	</DetailContextConsumer>;
};

export default Repository;
