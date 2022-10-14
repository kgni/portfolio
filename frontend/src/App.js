import Home from './container/Home/Home';
import About from './container/About/About';
import Projects from './container/Projects/Projects';
import Contact from './container/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import useMediaQuery from './hooks/useMediaQuery';

import React from 'react';

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
