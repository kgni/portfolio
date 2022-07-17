import Home from './container/Home/Home';
import About from './container/About/About';
import Projects from './container/Projects/Projects';
import Contact from './container/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './container/Footer/Footer';

function App() {
	return (
		<>
			<div className="overflow-x-hidden">
				<Navbar />
				<Home />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</>
	);
}

export default App;
