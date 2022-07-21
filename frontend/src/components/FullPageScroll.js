import React from 'react';
import Fullpage, {
	FullPageSections,
	FullpageSection,
	FullPageNavigation,
} from '@ap.cx/react-fullpage';

const FullPageScroll = () => {
	return (
		<div>
			<Fullpage>
				<FullPageSections>
					<FullpageSection style={{ minHeight: '100vh' }}></FullpageSection>
				</FullPageSections>
			</Fullpage>
		</div>
	);
};

export default FullPageScroll;
