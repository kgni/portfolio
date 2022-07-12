import Home from './container/Home/Home';
import About from './container/About/About';
import Projects from './container/Projects/Projects';
import Contact from './container/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './container/Footer/Footer';
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
	return (
		<>
			<div className="snap-y snap-mandatory overflow-x-hidden">
				<Navbar />
				<ReactFullpage.Wrapper>
					<Home />
					<About />
					<Projects />
					<Contact />
					<Footer />
				</ReactFullpage.Wrapper>
			</div>
		</>
	);
}

export default App;
