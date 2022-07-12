import React from 'react';
import Fullpage, {
	FullPageSections,
	FullPageSection,
	FullPageNavigation,
} from '@fullpage/react-fullpage';

const FullPageScroll = () => {
	return (
		<div>
			<Fullpage>
				<FullPageSections>
					<FullPageSection></FullPageSection>
				</FullPageSections>
			</Fullpage>
		</div>
	);
};

export default FullPageScroll;
