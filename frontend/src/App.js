import Home from './container/Home/Home';
import About from './container/About/About';
import Projects from './container/Projects/Projects';
import Contact from './container/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './container/Footer/Footer';
import useMediaQuery from './hooks/useMediaQuery';

import React from 'react';
import Fullpage, {
	FullPageSections,
	FullpageSection,
	FullPageNavigation,
} from '@ap.cx/react-fullpage';

function App() {
	const isDesktop = useMediaQuery('(max-width: 755px)');
	return (
		<>
			<div className="overflow-x-hidden">
				<Navbar />
				{isDesktop ? (
					<>
						<Home />
						<About />
						<Projects />
						<Contact />
					</>
				) : (
					// <Fullpage>
					// 	<FullPageSections>
					// 		<FullpageSection style={{ height: '' }}>
					// 			<Home />
					// 		</FullpageSection>
					// 		<FullpageSection style={{ height: '' }}>
					// 			<About />
					// 		</FullpageSection>
					// 		<FullpageSection style={{ height: '' }}>
					// 			<Projects />
					// 		</FullpageSection>
					// 		<FullpageSection style={{ height: '' }}>
					// 			<Contact />
					// 		</FullpageSection>
					// 	</FullPageSections>
					// </Fullpage>
					<>
						<Home />
						<About />
						<Projects />
						<Contact />
					</>
				)}
			</div>
		</>
	);
}

export default App;
