import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import OurWork from './components/OurWork';
import ContactUs from './components/Contact';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/aboutus" component={About} />
					<Route path="/ourwork" component={OurWork} />
					<Route path="/contactus" component={ContactUs} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
